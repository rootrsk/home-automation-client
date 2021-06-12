import React from 'react'
import { Divider, IconButton, SwipeableDrawer, } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { AccountCircle, Android, BarChart, Close, Cloud, ContactSupport, Home, Info, Menu, PowerSettingsNew } from '@material-ui/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
function Header(props) {
    const [open,setOpen] = useState(false)
    return (
        <div className='header'>
            <div>
                <IconButton onClick={()=>setOpen(!open)}>
                    {open ? <Close style={{color:'#ffffff'}}/>:<Menu style={{color:'#ffffff'}}/>}
                    
                </IconButton>
            </div>
            
            {props.user.user && 
                <div className='avatar-container'>
                    <Avatar src='https://pm1.narvii.com/7510/3a97aa2dfe448705c5edd1bc7e6766c612d8095br1-507-508v2_128.jpg' />
                    <p>{props.user.user.username}</p> 
                </div>
            }
            
            <SwipeableDrawer
                onClose={()=>setOpen(false)}
                open={open}
                onOpen={()=>{setOpen(true)}}
                
            >  
                <div className='drawar' onClick={()=>setOpen(false)}>
                   <div className='drawar-link'>
                       <div className='logo'>
                           <h2>Home Automation</h2>
                       </div>
                       <Divider style={{background:'#ffffff'}}/>
                        <NavLink to='/' exact className='link' activeClassName='active-link'>
                            <Home />
                            <span>Home</span>
                        </NavLink>
                        
                        <NavLink to='/graphs' className='link' activeClassName='active-link'>
                            <BarChart />
                            <span>Graphs</span>
                        </NavLink>
                        
                        <NavLink to='/profile' className='link' activeClassName='active-link'>
                            <AccountCircle />
                            <span>Profile</span>
                        </NavLink>
                        
                        <NavLink to='/weather' className='link' activeClassName='active-link'>
                            <Cloud />
                            <span>Weather</span>
                        </NavLink>
                        <NavLink to='/switches' className='link' activeClassName='active-link'>
                            <PowerSettingsNew />
                            <span>Switches</span>
                        </NavLink>
                        <NavLink to='/about-us' className='link' activeClassName='active-link'>
                            <ContactSupport />
                            <span>About Us</span>
                        </NavLink>
                        <NavLink to='/application' className='link' activeClassName='active-link'>
                            <Android />
                            <span>Application</span>
                        </NavLink>
                        <NavLink to='/details' className='link' activeClassName='active-link'>
                            <Info />
                            <span>Project Details</span>
                        </NavLink>
                        
                    </div> 
                </div>
                
            </SwipeableDrawer>
            
        </div>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (Header)
