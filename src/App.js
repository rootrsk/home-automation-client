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
// const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
const END_POINT = 'http://localhost:3001'
function App(props) {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
	const switchHandler = ({switch_no,status,user,local}) =>{
        if(props.socket && !local){
            props.socket.emit('switch-trigger',{switch_no,status})
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
                switchHandler({switch_no:index+1, status, user:'rootrsk'})
                return
            })
        })
		socket.on('arduino-connection-status',({status})=>{
            props.dispatch({
                type:'SET_ARDUINO_STATUS',
                status
            })
        })
        socket.on('switch-triggered', ({switch_no,status}) => {
            switchHandler({switch_no,status,local:true})
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
                <Switch>
                    <Route path='/' component={Dashboard} exact/>
                    <Route path='/arduino' component={Arduino} />
                    <Route path='/switches' component={Switches} />
                    <Route path='/graphs' component={Grpah} />
                    <Route path='/login' component={Login} />
                    <Route path='/details' component={ProjectDetails} />
                    <Route path='/about-us' component={About} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </div>
			
		</BrowserRouter>
    );
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);
