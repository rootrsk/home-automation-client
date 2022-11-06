import React from 'react'
import { useEffect, useState } from "react";
import socketClient from "socket.io-client";
import random from 'random';
// const END_POINT = 'http://localhost:3002'
const END_POINT = 'https://rootrsk-homeautomation-api.vercel.app'


function Arduino() {
    const [switch_1, setSwitch1] = useState(false)
    const [switch_2, setSwitch2] = useState(false)
    const [switch_3, setSwitch3] = useState(false)
    const [switch_4, setSwitch4] = useState(false)
    const [switch_5, setSwitch5] = useState(false)
    const [switch_6, setSwitch6] = useState(false)
    const [switch_7, setSwitch7] = useState(false)
    const [switch_8, setSwitch8] = useState(false)
    const [normal,setNormal] = useState(true)
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
            if(temp>50 || humidity > 50 || co>50 || ch >50){
                setNormal(false)
            }else{
                setNormal(true)
            }
            const time  =  Date.now()
            sensorHandler({temp ,humidity,co,ch,time})
            socket.emit('sensor-send',{temp,humidity,co,ch,time})
        }, 2000);
        // eslint-disable-next-line
    }, [])
    return (
        <div className='arduino-page'>
            <h1>Arduino</h1>
            <div className='arduino_header'>
                <div className="led">
                    <div className={normal?'led-green':'led-off'}></div>
                    <p>Led </p>
                </div>
                <div className='relay'>
                    <div className='switch_container'>
                        <div className={switch_1?'led-green':'led-off'}></div>
                        <p>Switch 1</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_2?'led-green':'led-off'}></div>
                        <p>Switch 2</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_3?'led-green':'led-off'}></div>
                        <p>Switch 3</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_4?'led-green':'led-off'}></div>
                        <p>Switch 4</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_5?'led-green':'led-off'}></div>
                        <p>Switch 5</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_6?'led-green':'led-off'}></div>
                        <p>Switch 6</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_7?'led-green':'led-off'}></div>
                        <p>Switch 7</p>
                    </div>
                    <div className='switch_container'>
                        <div className={switch_8?'led-green':'led-off'}></div>
                        <p>Switch 8</p>
                    </div> 
                </div>

                <div className='buzzer'>
                    <div className={normal?'led-green':'led-off'}></div>
                    <p>Buzzer </p>
                </div>

            </div>
            
            <div className='sensors'>
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
