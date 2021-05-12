import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

function Login({loginHandler,error,connected}) {
    const [username,setUserName] = useState('rootrsk1')
    const [password,setPassword] = useState('rootrsk')
    const [room,setRoom] = useState('123')
    useEffect(()=>{
        setRoom('123')
    },[])
    return (
        <div className='login-page'>
            
            <div className='login-div'>
                <div className='login-avatar'>
                    <Avatar 
                        style={{width:'150px',height:'150px'}} 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jxzLIrdsnOrglo0o3YM-f9nzmqTQickDQs6tHAKTEoAMLcAF6O9vtb-bfNMojYKrIdA&usqp=CAU' 
                    />
                </div>
                {/* <h1>Login </h1> */}
                <input  
                    type='text'
                    placeholder='Username'
                    onChange={(e)=>setUserName(e.target.value)}
                    value={username}
                    
                />
                <input  
                    type='text'
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                {!connected && <p>Connecting to Socket</p> }
                
                <button onClick={()=>loginHandler({username,password,room})}>Login</button>
                <p className='error'>{error}</p>
            </div>
        </div>
    )
}

export default Login
