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
import Weather from './pages/Weather'
import Arduino from "./pages/Arduino"
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
