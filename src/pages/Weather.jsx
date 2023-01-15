import { CircularProgress, Divider } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
const url = "https://mammoth-galvanized-fiber.glitch.me"

function Weather() {
    const dispatch = useDispatch()
    const buttons = useSelector(state=>state.buttons)
    const arduino = useSelector(state=>state.arduino)
    const weather = useSelector(state=>state.weather)
    const sensors = useSelector(state=>state.sensors)

    return (
        <div>
            <div className='weather-template'>
                <div className="weather-template_header">
                    <p className='title'>{'Kalipark NewTown WestBengal'}</p>
                    <p>{new Date(sensors.time).toLocaleTimeString()}</p>
                </div>
                <div className="flexbox">
                    <div style={{width:'100px',height:'100px'}}>
                        <img src="http://cdn.weatherapi.com/weather/64x64/night/143.png" alt="weather icon" width="100%" height="100%"/>
                    </div>
                    <div>
                        <p className='big-text'>{sensors.temp}°C </p>
                    </div>

                    <div>
                        <div className='weather-template-details'>
                            <div className="flexbox">
                                <p className='paragrpah'>Temperature</p>
                                <p className='paragrpah'>{sensors.temp}°C</p>
                            </div>
                            <Divider  />
                            <div className="flexbox">
                                <p className='paragrpah'>Humidity</p>
                                <p className='paragrpah'>{sensors.humidity}</p>
                            </div>
                            <Divider  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather