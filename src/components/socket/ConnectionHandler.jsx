import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeAuthenticationStatus, terminateAuthentication } from '../../redux/reducers/auth';
import { changeButtonStatus } from '../../redux/reducers/buttons';
import { changeConnectionStatus, terminateConnection } from '../../redux/reducers/socket';
function ConnectionHandler() {
    const dispatch = useDispatch()
    const socket = useSelector(state=>state.socket)

    socket?.socket?.on('connect',()=>{
        console.log('Connected successfully')
        dispatch(changeConnectionStatus({
            isConnected:true,
            isConnecting:false,
            isReconnectig:false
        }))
    })
    socket?.socket?.on('disconnect',()=>{
        console.log('Disconnected successfully')
        dispatch(terminateConnection())
        dispatch(terminateAuthentication())
    })
    socket?.socket?.on('login',({error,status,user})=>{
        dispatch(changeAuthenticationStatus({
            error,
            status,
            user,
            isAuthenticated: user? true: false,
            isAuthentication:false
        }))
        console.log({error,status,user})
    })
    socket?.socket?.on('switch-triggered', (data) => {
        dispatch(changeButtonStatus(data))
    })
    socket?.socket?.on('new_connection',(data)=>{
        console.log('new user',data)
    })
    socket?.socket?.on('sync',({switchStatus,arduinoStatus})=>{
        switchStatus.forEach((status,idx)=>dispatch(changeButtonStatus({switch_no:idx+1,status})))
        console.log('sync')
    })
    return (<></>)
}

export default ConnectionHandler