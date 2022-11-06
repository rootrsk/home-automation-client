import { Avatar, Fade, LinearProgress, Slide } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Login({loginHandler,error,connected,loading}) {
    
    const [name,setName] = useState("")
    const [city, setCity] = useState("")
    const [email,setEmail] = useState("")
    const [serror, setError] = useState('')
    const [room, setRoom] = useState('123')
    const [login, setLogin] = useState(true)
    const [warning, setWarning] = useState('')
    const [success, setSuccess] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [contact_no, setContact] = useState("")
    const [sloading ,setLoading] = useState(false)
    
    const signupHandler = async() =>{
        setError('')
        setWarning('')
        setSuccess('')
        setLoading(true)
        if(!username) return setError('Username is required.')
        if (!name) return setError('Name is required.')
        if (!email) return setError('Email is required.')
        if (!city) return setError('City is required.')
        if (!password) return setError('Password is required.')
        
        const response = await axios({
            method:'POST',
            url:'https://rootrsk-homeautomation-api.vercel.app/signup',
            data:{name,username,email,city,contact_no,password}
        })
        setLoading(false)
        if(response.data.success===true){
            setSuccess('✓ ' + response.data.message)
            setTimeout(() => {
                setSuccess('')
            }, 2000);
        }else{
            setError(response.data.error)
        }
        console.log(response)
    }
    useEffect(()=>{

        const susername = localStorage.getItem('username')
        const spassword = localStorage.getItem('password')
        if(susername || spassword){
            setUserName(susername)
            setPassword(spassword)
        }
        setRoom('123')
        window.addEventListener('keypress',(e)=>{
            setError('')
            setWarning('')
            setSuccess('')
            if(e.key==='Enter'){
                if(login){
                    console.log('pressed')
                    console.log(login)
                    loginHandler({username,password})
                }else{
                    signupHandler()
                }
            }
        })
        
    },[])
    return (
        <div className='login-page'>
            <div className='login-div'>
                <Fade in={login} mountOnEnter unmountOnExit direction='up' timeout={{enter:1500,exit:0}}>
                    <div className="login-div login">
                        <div className='login-avatar'>
                            <Avatar 
                                style={{width:'150px',height:'150px'}} 
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jxzLIrdsnOrglo0o3YM-f9nzmqTQickDQs6tHAKTEoAMLcAF6O9vtb-bfNMojYKrIdA&usqp=CAU' 
                            />
                        </div> 
                        <input  
                            type='text'
                            placeholder='Enter Username or Email'
                            onChange={(e)=>setUserName(e.target.value)}
                            value={username}
                            
                        />
                        <input  
                            type='text'
                            placeholder='Enter password'
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                        
                        <button 
                            onClick={()=>{
                                loginHandler({username,password,room})}}
                            >{loading?<LinearProgress color="secondary" />:'Login'}
                        </button>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <button 
                                style={{background:'transparent',padding:'0px',color:'#79fff8',margin:'0px'}}
                                onClick={()=>setLogin(!login)}
                            >
                                Create new account
                            </button>    
                        </div>
                        
                    </div>    
                </Fade>
                
                <Fade in={!login} mountOnEnter unmountOnExit direction='down' timeout={{enter:1500,exit:0}}>
                    <div className='login-div signup'>
                        <div className='login-avatar'>
                        <Avatar 
                            style={{width:'150px',height:'150px'}} 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jxzLIrdsnOrglo0o3YM-f9nzmqTQickDQs6tHAKTEoAMLcAF6O9vtb-bfNMojYKrIdA&usqp=CAU' 
                        />
                    </div>
                        <input  
                            type='text'
                            placeholder='Username'
                            onChange={(e)=>setUserName(e.target.value)}
                            value={username}
                        /> 
                        <input  
                            type='text'
                            placeholder='Full Name'
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                        />
                        <input  
                            type='text'
                            placeholder='Email'
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            
                        />
                        {/* <input  
                            type='text'
                            placeholder='Contact'
                            onChange={(e)=>setContact(e.target.value)}
                            value={contact_no}
                            
                        /> */}
                        <input  
                            type='text'
                            placeholder='City'
                            onChange={(e)=>setCity(e.target.value)}
                            value={city}
                            
                        />
                        <input  
                            type='text'
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                        <button 
                            onClick={signupHandler}
                            >{sloading?<LinearProgress color="secondary" />:'Create Account'}
                        </button>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <button 
                                style={{background:'transparent',padding:'0px',color:'#79fff8',margin:'0px'}}
                                onClick={()=>setLogin(!login)}
                            >
                                Already have an account ?
                            </button>
                        </div>
                        
                    </div>
                </Fade>
                <div div className = "login-div absolute" >
                    {!connected && <p>Connecting to Socket</p> }
                    {error && <p className='error'>{error}</p>}
                    {success && <p>{success}</p>}
                    {serror && <p>{serror}</p>}  
                </div>
                
            </div>
        </div>
    )
}

export default Login
