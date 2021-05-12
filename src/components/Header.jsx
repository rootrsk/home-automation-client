import { Button, Divider, IconButton, SwipeableDrawer, } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Close, ContactSupport, ExitToApp, Home, Info, Menu } from '@material-ui/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header({user}) {
    const [open,setOpen] = useState(false)
    return (
        <div className='header'>
            <div>
                <IconButton onClick={()=>setOpen(!open)}>
                    {open ? <Close style={{color:'#ffffff'}}/>:<Menu style={{color:'#ffffff'}}/>}
                    
                </IconButton>
            </div>
            <div className='avatar-container'>
                <Avatar src='https://pm1.narvii.com/7510/3a97aa2dfe448705c5edd1bc7e6766c612d8095br1-507-508v2_128.jpg' />
                <p>{user.name}</p> 
            </div>
            
            <SwipeableDrawer
                onClose={()=>setOpen(false)}
                open={open}
                onOpen={()=>{setOpen(true)}}
            >  
                <div className='drawar'>
                   <div className='drawar-link'>
                       <div className='logo'>
                           <h2>Home Automation</h2>
                       </div>
                       <Divider style={{background:'#ffffff'}}/>
                        <NavLink to='/' className='link' activeClassName='active-link'>
                            <Home />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to='/details' className='link' activeClassName='active-link'>
                            <Info />
                            <span>Project Details</span>
                        </NavLink>
                        <NavLink to='/about-us' className='link' activeClassName='active-link'>
                            <ContactSupport />
                            <span>About Us</span>
                            
                        </NavLink>
                        {/* <div style={{padding:'10px 15px'}}>
                            <Button style={{color:'white',padding:'0px',margin:'0px'}} onClick={()=>window.close()}>
                                <ExitToApp style={{padding:'0px',margin:'0px'}}/>
                                <span style={{margin:'0px 10px'}}>Exit</span>  
                            </Button>
                        </div> */}
                    </div> 
                </div>
                
            </SwipeableDrawer>
            
        </div>
    )
}

export default Header
