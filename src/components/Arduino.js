import { useEffect, useState } from "react";
import socketClient from "socket.io-client";
import random from 'random';
// const END_POINT = 'http://localhost:3002'
const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'

function Arduino() {
    const [switch_1, setSwitch1] = useState(false)
    const [switch_2, setSwitch2] = useState(false)
    const [switch_3, setSwitch3] = useState(false)
    const [switch_4, setSwitch4] = useState(false)
    const [switch_5, setSwitch5] = useState(false)
    const [switch_6, setSwitch6] = useState(false)
    const [switch_7, setSwitch7] = useState(false)
    const [switch_8, setSwitch8] = useState(false)

    const [sensors,setSensors] = useState({
        temp: 25,
        humidity: 40,
        co: 30,
        ch: 42,
        time: Date.now()
    })
    const sensorHandler = ({temp,humidity,co,ch,time}) =>{
        setSensors({temp, humidity, co, ch,time})
    }
    
    const switchHandler = ({switch_no,status}) =>{
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
    const sensorsStatus =  [switch_1, switch_2, switch_3, switch_4, switch_5, switch_6, switch_7, switch_8]
    
    useEffect(()=>{
        const socket = socketClient(END_POINT, {
            path: '/websocket/'
        })
        socket.on('connect',()=>{
            socket.emit('join',{username: 'arduino',password:'rootrsk',room:'123'})
            socket.emit('arduino-status', sensorsStatus)
        })
        socket.on('loginError',({error})=>{
            console.log(error)
        })
        socket.on('switch-triggered',({switch_no,status})=>{
            switchHandler({switch_no,status})
        })
        setInterval(() => {
            const temp = random.int(20, 55)
            const humidity = random.int(20,55)
            const co = random.int(20,55)
            const ch = random.int(20,55)
            const time  =  Date.now()
            sensorHandler({temp ,humidity,co,ch,time})
            socket.emit('sensor-send',{temp,humidity,co,ch,time})
        }, 2000);
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h1>Arduino</h1>
            <div>
                <p>Switch 1 : {switch_1 ? 'On' : 'Off'}</p>
                <p>Switch 2 : {switch_2 ? 'On' : 'Off'}</p> 
                <p>Switch 3 : {switch_3 ? 'On' : 'Off'}</p>
                <p>Switch 4 : {switch_4 ? 'On' : 'Off'}</p>  
                <p>Switch 5 : {switch_5 ? 'On' : 'Off'}</p> 
                <p>Switch 6 : {switch_6 ? 'On' : 'Off'}</p>  
                <p>Switch 7 : {switch_7 ? 'On' : 'Off'}</p>
                <p>Switch 8 : {switch_8 ? 'On' : 'Off'}</p>  
            </div>
            <div>
                <p>Temp : {sensors.temp}</p>
                <p>Humidity : {sensors.humidity}</p>
                <p>CO : {sensors.co}</p>
                <p>CH4 : {sensors.ch}</p>
                <p>{new Date(sensors.time).toLocaleTimeString()}</p>
            </div>
        </div>
    )
}

export default Arduino
