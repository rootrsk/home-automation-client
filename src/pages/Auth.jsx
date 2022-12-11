import { useEffect, useState } from 'react'
import axios from 'axios'
import { emitEvent } from '../redux/reducers/socket'
import { useDispatch, useSelector } from 'react-redux'
import { initiateAuthentication } from '../redux/reducers/auth'
import { Avatar, Fade, LinearProgress, Slide } from '@material-ui/core'
import './Auth.scss'
function Auth() {
    const [name,setName] = useState("")
    const [city, setCity] = useState("")
    const [email,setEmail] = useState("")
    const [serror, setError] = useState('')
    const [room, setRoom] = useState('123')
    const [login, setLogin] = useState(true)
    const [warning, setWarning] = useState('')
    const [success, setSuccess] = useState('')
    const [password, setPassword] = useState('rootrsk')
    const [username, setUserName] = useState('rootrsk')
    const [contact_no, setContact] = useState("")
    const [sloading ,setLoading] = useState(false)

    const dispatch = useDispatch()
    const auth = useSelector(state=>state?.auth)
    const socket = useSelector(state=>state.socket)
    
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
            url:'https://rootrsk-home-automation-api.herokuapp.com/signup',
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
    const loginHandler = async()=>{
        dispatch(initiateAuthentication())
        dispatch(emitEvent({
            eventName:'join',
            data:{username,password,room}
        }))
    }
    useEffect(()=>{
        const susername = localStorage.getItem('username')
        const spassword = localStorage.getItem('password')
        if(susername || spassword){
            setUserName(susername)
            setPassword(spassword)
        }
        setRoom('123')
    },[])
    return (
        <div className='login-page'>
            <div className='login-div'>
                <Fade 
                    in={login} 
                    mountOnEnter 
                    unmountOnExit 
                    direction='up' 
                    timeout={{enter:1500,exit:0}}
                >
                    <div className="login">
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
                            onClick={loginHandler}
                            disabled={auth.isAuthenticating}
                        >
                            {
                                auth.isAuthenticating?
                                <LinearProgress color="secondary" />
                                :'Login'
                            }
                        </button>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <button 
                                style={{background:'transparent',padding:'0px',color:'#79fff8',margin:'0px'}}
                                onClick={()=>setLogin(!login)}
                                disabled={auth.isAuthenticating}
                            >
                                Create new account
                            </button>    
                        </div>
                        
                    </div>    
                </Fade>
                
                <Fade 
                    in={!login} 
                    mountOnEnter 
                    unmountOnExit 
                    direction='down' 
                    timeout={{enter:1500,exit:0}}
                >
                    <div className='login'>
                        <div className='login-avatar'>
                            <Avatar 
                                style={{width:'150px',height:'150px'}} 
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jxzLIrdsnOrglo0o3YM-f9nzmqTQickDQs6tHAKTEoAMLcAF6O9vtb-bfNMojYKrIdA&usqp=CAU' 
                            />
                        </div>
                        <input  
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e)=>setUserName(e.target.value)}
                        /> 
                        <input  
                            type='text'
                            placeholder='Full Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input  
                            type='text'
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            
                        />
                        <input  
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            
                        />
                        <input  
                            type='text'
                            placeholder='Password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button 
                            onClick={signupHandler}
                        >
                            {sloading?<LinearProgress color="secondary" />:'Create Account'}
                        </button>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <button 
                                style={{
                                    background:'transparent',
                                    padding:'0px',
                                    color:'#79fff8',margin:'0px'
                                }}
                                onClick={()=>setLogin(!login)}
                            >
                                Already have an account ?
                            </button>
                        </div>
                        
                    </div>
                </Fade>

                <div  className = "absolute" >
                    {socket.isConnecting && <p>Connecting to Socket</p> }
                    {auth.error && login &&  <p>{auth.error}</p>}
                    {success && <p>{success}</p>}
                    {serror &&  !login && <p>{serror}</p>}  
                </div>
                
            </div>
        </div>
    )
}

export default Auth
