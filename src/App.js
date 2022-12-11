import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Auth from './pages/Auth';
import About from "./pages/About";
import Switches from './pages/Switch'
import Grpah from './components/Grpah'
import Login from "./components/Login"
import Header from './components/Header'
import Dashboard from "./pages/Dashboard"
import Profile from './components/Profile'
import HideBar from './components/HideBar'
import Weather from './components/Weather'
import Arduino from "./components/Arduino"
import Application from './components/Application';
import ProjectDetails from "./components/ProjectDetails";
import { initiateConnection } from './redux/reducers/socket';

function App(props) {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)
	const switchHandler = ({switch_no,status,username,local}) =>{
        console.log(username)
        if(props.socket && !local){
            props.socket.emit('switch-trigger',{switch_no,status,username})
        }
        // props.dispatch({
        //     type: 'SET_SWITCH_STATUS',
        //     buttonStatus: {
        //         switch_no,
        //         status
        //     }
        // })
    }
    useEffect(()=>{
        dispatch(initiateConnection())
    },[])
	// useState(()=>{
	// 	// const socket = socketClient(END_POINT, {})
	// 	socket.on('connect', () => {
	// 		// props.dispatch({
	// 		// 	type: 'SET_SOCKET_STATUS',
	// 		// 	socket
	// 		// })
    //         console.log('Socket Connected')
			
	// 	})
    //     socket.on('disconnect',()=>{
    //         window.location.reload();
    //     })
	// 	socket.on('login',({error,status,user})=>{
    //         if(status===200){
    //             setTimeout(() => {
    //             //    props.dispatch({
    //             //         type: 'SET_USER',
    //             //         user,
    //             //         isAuthenticated:true,
    //             //         loading:false,
    //             //     }) 
    //                 setError("")
    //                 setLoading(false)
    //             }, 2000);
    //             setError("Redirecting to Dashboard")
    //         } else{
    //             setError(error)
    //             setLoading(false)
    //         }
    //     })
	// 	socket.on('sensor-sent',({temp,humidity,co,ch,time})=>{
    //         // props.dispatch({
    //         //     type: 'SET_SENSORS_DATA',
    //         //     sensorsData:{temp,humidity,co,ch,time}
    //         // })
    //     })
	// 	socket.on('arduino-data',(status)=>{
	// 		console.log(status)
    //         status.forEach((status,index)=>{
    //             switchHandler({switch_no:index+1, status, username:'arduino'})
    //             return
    //         })
    //     })
	// 	socket.on('arduino-connection-status',({status})=>{
    //         // props.dispatch({
    //         //     type:'SET_ARDUINO_STATUS',
    //         //     status
    //         // })
    //     })
    //     socket.on('switch-triggered', ({switch_no,status,username}) => {
    //         setMessage(`Switch no ${switch_no} is turned ${status?' on':' off'} by ${username}`)
    //         switchHandler({switch_no,status,local:true,username})
    //     })
	// },[])
    if(!auth?.user) return <Auth />
    return (
		<BrowserRouter>
            <div>
                <Header />
                {message && <HideBar message={message} opn={true} /> }
                <Routes>
                    <Route path='/' element={<Dashboard />} exact/>
                    <Route path='/arduino' element={<Arduino/>} />
                    <Route path='/switches' element={<Switches/>} />
                    <Route path='/graphs' element={<Grpah/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/details' element={<ProjectDetails/>} />
                    <Route path='/about-us' element={<About/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/weather' element={<Weather/>} />
                    <Route path='/application' element={<Application/>} />
                </Routes>
            </div>
			
		</BrowserRouter>
    );
}

export default App
