import React, { useEffect, useState } from 'react'
import socketClient from "socket.io-client";
import BoardStatus from './BoardStatus';
import Radial from './charts/Radial';
import RealtimeChart from './charts/RealtimeChart';
import Temperature from './charts/Temperature';
import Header from './Header';
import Login from './Login';
import SwitchButton from './SwitchButton';
// const END_POINT = 'http://localhost:3002'
const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
let stateHandler;
let loginHandler;
function Dashboard() {
    const [switch_1,setSwitch1] = useState(false)
    const [switch_2,setSwitch2] = useState(false)
    const [switch_3,setSwitch3] = useState(false)
    const [switch_4,setSwitch4] = useState(false)
    const [switch_5,setSwitch5] = useState(false)
    const [switch_6,setSwitch6] = useState(false)
    const [switch_7,setSwitch7] = useState(false)
    const [switch_8,setSwitch8] = useState(false)
    const [login,setLogin] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [connected,setConnected] = useState(false)
    const [ardunioStatus,setArduinoStatus] = useState(false)
    const [user,setUser] = useState({})

    const [sensors, setSensors] = useState({
        temp: 10,
        humidity: 0,
        co: 0,
        ch: 0,
        time:  Date.now(),
    })
    
    const sensorHandler = ({temp,humidity,co,ch,time}) =>{
        setSensors({temp, humidity, co, ch,time})
    }
    
    const switchHandler = (switch_no,status,user) =>{
        if(!user){
            stateHandler({switch_no,status})
        }
        switch (switch_no) {
            case 1:
                setSwitch1(status)
                break;
            case 2:
                setSwitch2(status)
                break;
            case 3:
                setSwitch3(status)
                break;
            case 4:
                setSwitch4(status)
                break;
            case 5:
                setSwitch5(status)
                break;
            case 6:
                setSwitch6(status)
                break;
            case 7:
                setSwitch7(status)
                break;
            case 8:
                setSwitch8(status)
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        const socket = socketClient(END_POINT, {
        })
        socket.on('connect',()=>{
            setConnected(true)
        })

        socket.on('disconnect',(reason)=>{
            setConnected(false)
            setLogin(false)
            setUser({})
            setError('Connection has been closed, reloading in 1 sec')
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        socket.on('login',({error,status,user})=>{
            setError('')
            // setLoading(false)
            
            if(status===200){
                setTimeout(() => {
                    
                    setError('')
                    setUser(user)
                    setLogin(true)
                    setLoading(false)
                }, 2000);
            } else{
                setLoading(false)
                setError(error)
            }
            
            console.log(error)
            console.log(status)
        })

        socket.on('newUserMessage',({message})=>{
            console.log(message)
        })
        socket.on('message',({message})=>{
            console.log(message)
        })
        
        socket.on('new_connection',({username})=>{
            if(username==='arduino'){
                console.log('Connected to Arduino Board')
            }
        })
        socket.on('new_disconnection',({username})=>{

        })

        socket.on('sensor-sent',({temp,humidity,co,ch,time})=>{
            sensorHandler({temp,humidity,co,ch,time})
        })
        socket.on('arduino-data',(status)=>{
            status.forEach((status,index)=>{
                switchHandler(index+1, status, 'rootrsk')
                return
            })
        })
        socket.on('switch-triggered',({switch_no,status})=>{
            switchHandler(switch_no,status,'rootrsk')
        })
        socket.on('arduino-connection-status',({status})=>{
            setArduinoStatus(status)
        })

        stateHandler = ({status,switch_no})=>{
            socket.emit('switch-trigger',{switch_no,status})
        }
        loginHandler = async ({username,password,room}) => {
            setLoading(true)
            setError('')
            socket.emit('join',{username,password,room})
        }
    },[])
    if(!login)
    return(
        <div>
            <Login loginHandler={loginHandler} error={error} connected={connected} loading={loading}/>
        </div>
    )
    return (
        <div className='dashboard'>
            <Header user={user} />
            <BoardStatus status={ardunioStatus} />
            <div className='button_containers'>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_1} buttonNumber={1} title='Button 1'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_2} buttonNumber={2} title='Button 2'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_3} buttonNumber={3} title='Button 3'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_4} buttonNumber={4} title='Button 4'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_5} buttonNumber={5} title='Button 5'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_6} buttonNumber={6} title='Button 6'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_7} buttonNumber={7} title='Button 7'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={switch_8} buttonNumber={8} title='Button 8'/>
            </div>
            {console.log(loading)}
            <div>
                {/* <Temperature data={sensors.temp} time={sensors.time} title='Room Temperature' name='temp' key='ddd'/> te */}
                <div >
                    <RealtimeChart  data ={sensors.temp} title='Temperature'/>
                    <RealtimeChart  data ={sensors.humidity} title="Humidity" />
                    <RealtimeChart  data ={sensors.co} title="Carbon MonoOxide" />
                    <RealtimeChart  data ={sensors.ch} title="Methane" />
                </div>
                
                <div className='meters'>
                    <Radial data ={sensors.temp} name='Temperature'/>
                    <Radial data ={sensors.humidity} name='Humidity'/>
                    <Radial data ={sensors.co} name='Carbon Monooxide'/>
                    <Radial data ={sensors.ch} name='Methane'/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
