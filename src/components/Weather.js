import { CircularProgress, Divider } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
const url = "https://mammoth-galvanized-fiber.glitch.me"

function Weather(props) {
    console.log(props)
    const dispatch = useDispatch()
    const buttons = useSelector(state=>state.buttons)
    const arduino = useSelector(state=>state.arduino)
    const weahter = useSelector(state=>state.weather)
    const featchWeather = async()=>{
        
        try {
            const response = await axios({
                url:`${url}/weather?location=${props.user.user.city}`,
                method:'get'
            })
            const response2 = await axios({
                url:`${url}/weather?location=dobhi bihar`,
                method:'get'
            })
            console.log(response.data)
            // if(response.data.success===false){
            //     console.log(response.data)
            //     props.dispatch({
            //         type:'SET_WEATHER',
            //         weather:{
            //             user:'failed',
            //             room:response2.data.data
            //         }
            //     })
            // }else{
            //     props.dispatch({
            //         type:'SET_WEATHER',
            //         weather:{
            //             user:response.data.data,
            //             room:response2.data.data
            //         }
            //     })
            // }

            
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useState(()=>{
        if(props.user.user){
            if(!props.weather){
                featchWeather()
            }
        }
    },[])
    return (
        <div>
            <div>
                {   props.weather && props.weather.user==='failed'  ?
                    <ErrorTemplate message="Couldn't find your location" />:
                    props.weather && props.weather.user ?
                    <WeatherTemplate 
                        location={`${props.weather.user.location.name} ${props.weather.user.location.region} ${props.weather.user.location.country}`}
                        time={new Date(props.weather.user.current.last_updated).toLocaleTimeString()}
                        temperature={props.weather.user.current.temp_c}
                        image={`http:${props.weather.user.current.condition.icon}`}
                        humidity={props.weather.user.current.humidity}
                        condition={props.weather.user.current.condition.text}
                        wind={props.weather.user.current.wind_kph}
                        feelslike={props.weather.user.current.feelslike_c}
                        city="Your City"
                    />:
                    <LoadingTemplate />
                }
                {
                    props.weather ?
                    <WeatherTemplate 
                        location={`${props?.weather?.room?.location?.name} ${props?.weather?.room?.location?.region} ${props?.weather?.room?.location?.country}`}
                        time={new Date(props.weather.room.current.last_updated).toLocaleTimeString()}
                        temperature={props.weather.room.current.temp_c}
                        image={`http:${props.weather.room.current.condition.icon}`}
                        humidity={props.weather.room.current.humidity}
                        condition={props.weather.room.current.condition.text}
                        wind={props.weather.room.current.wind_kph}
                        feelslike={props.weather.room.current.feelslike_c}
                        city="Your City"
                    />: 
                    <LoadingTemplate />
                }
                {
                    props.sensors && 
                    <div className='weather-template'>
                        <div className="weather-template_header">
                            <p className='title'>{'Kalipark NewTown WestBengal'}</p>
                            <p>{new Date(props.sensors.time).toLocaleTimeString()}</p>
                        </div>
                        <div className="flexbox">
                            <div style={{width:'100px',height:'100px'}}>
                                <img src="http://cdn.weatherapi.com/weather/64x64/night/143.png" alt="weather icon" width="100%" height="100%"/>
                            </div>
                            <div>
                                <p className='big-text'>{props.sensors.temp}°C </p>
                            </div>

                            <div>
                                <div className='weather-template-details'>
                                    <div className="flexbox">
                                        <p className='paragrpah'>Temperature</p>
                                        <p className='paragrpah'>{props.sensors.temp}°C</p>
                                    </div>
                                    <Divider  />
                                    <div className="flexbox">
                                        <p className='paragrpah'>Humidity</p>
                                        <p className='paragrpah'>{props.sensors.humidity}</p>
                                    </div>
                                    <Divider  />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (Weather)


const WeatherTemplate = ({temperature,humidity,wind,condition,text,time,image,location}) =>(
    
    <div className='weather-template'>
        <div className="weather-template_header">
            <p className='title'>{location}</p>
            <p>{time}</p>
        </div>
        <div className="flexbox">
            <div style={{width:'100px',height:'100px'}}>
                <img src={image} alt="weather icon" width="100%" height="100%"/>
            </div>
            <div>
                <p className='big-text'>{temperature}° </p>
                <p>{condition}</p>
            </div>
            <div>
                <div className='weather-template-details'>
                    <div className="flexbox">
                        <p className='paragrpah'>Temperature</p>
                        <p className='paragrpah'>{temperature}°C</p>
                    </div>
                    <Divider light={true} />
                    <div className="flexbox">
                        <p className='paragrpah'>Humidity</p>
                        <p className='paragrpah'>{humidity}</p>
                    </div>
                    <Divider light={true} />
                    <div className="flexbox">
                        <p className='paragrpah'>Wind</p>
                        <p className='paragrpah'>{wind}Kmph</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
)

const LoadingTemplate = ()=>(
    <div className='weather-template weather-loading-template'>
        <div className="center" style={{padding:'50px'}}>
            <CircularProgress color='secondary' />
        </div>
    </div>
)

const ErrorTemplate = ({message}) =>(
    <div className='weather-template weather-loading-template'>
        <div className="center" style={{padding:'50px'}}>
            <p className='paragrpah'>{message}</p>
        </div>
    </div>
)