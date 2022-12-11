import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function AuthenticationHanlder() {
    const dispatch = useDispatch()
    const socket = useSelector(state=>state.socket)
    socket?.socket?.on('login',({error,status,user})=>{
        
    })
    return (<></>)
}

export default AuthenticationHanlder