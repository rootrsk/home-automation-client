import React, { useState } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Arduino from "./components/Arduino";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProjectDetails from "./components/ProjectDetails";
import socketClient from "socket.io-client";
import './styles/styles.css'
import Switches from './components/Switches';
import Grpah from './components/Grpah';
import Header from './components/Header';
import Profile from './components/Profile';
import HideBar from './components/HideBar'
import Weather from './components/Weather';
import Application from './components/Application';
const END_POINT = 'https://rootrsk-homeautomation-api.vercel.app'
// const END_POINT = 'http://localhost:3001'
function App(props) {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')
	const switchHandler = ({switch_no,status,username,local}) =>{
        console.log(username)
        if(props.socket && !local){
            props.socket.emit('switch-trigger',{switch_no,status,username})
        }
        props.dispatch({
            type: 'SET_SWITCH_STATUS',
            buttonStatus: {
                switch_no,
                status
            }
        })
    }
    const loginHandler = ({username,password,room}) =>{
        localStorage.setItem('username',username)
        localStorage.setItem('password',password)
        if(props.socket){
            props.socket.emit('join',{username,password,room})
            setLoading(true)
        }
    }
	useState(()=>{
		const socket = socketClient(END_POINT, {})
		socket.on('connect', () => {
			props.dispatch({
				type: 'SET_SOCKET_STATUS',
				socket
			})
			
		})
        socket.on('disconnect',()=>{
            window.location.reload();
        })
		socket.on('login',({error,status,user})=>{
            if(status===200){
                setTimeout(() => {
                   props.dispatch({
                        type: 'SET_USER',
                        user,
                        isAuthenticated:true,
                        loading:false,
                    }) 
                    setError("")
                    setLoading(false)
                }, 2000);
                setError("Redirecting to Dashboard")
            } else{
                setError(error)
                setLoading(false)
            }
        })
		socket.on('sensor-sent',({temp,humidity,co,ch,time})=>{
            props.dispatch({
                type: 'SET_SENSORS_DATA',
                sensorsData:{temp,humidity,co,ch,time}
            })
        })
		socket.on('arduino-data',(status)=>{
			console.log(status)
            status.forEach((status,index)=>{
                switchHandler({switch_no:index+1, status, username:'arduino'})
                return
            })
        })
		socket.on('arduino-connection-status',({status})=>{
            props.dispatch({
                type:'SET_ARDUINO_STATUS',
                status
            })
        })
        socket.on('switch-triggered', ({switch_no,status,username}) => {
            setMessage(`Switch no ${switch_no} is turned ${status?' on':' off'} by ${username}`)
            switchHandler({switch_no,status,local:true,username})
        })
	},[])
    if(!props.user.user)
    return(
        <div>
            <Login loginHandler={loginHandler} connected={props.socket} error={error} loading={loading}  />
        </div>
    )
    return (
		<BrowserRouter>
            <div>
                <Header />
                {message && <HideBar message={message} opn={true} /> }
                <Switch>
                    <Route path='/' component={Dashboard} exact/>
                    <Route path='/arduino' component={Arduino} />
                    <Route path='/switches' component={Switches} />
                    <Route path='/graphs' component={Grpah} />
                    <Route path='/login' component={Login} />
                    <Route path='/details' component={ProjectDetails} />
                    <Route path='/about-us' component={About} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/weather' component={Weather} />
                    <Route path='/application' component={Application} />
                </Switch>
            </div>
			
		</BrowserRouter>
    );
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);
