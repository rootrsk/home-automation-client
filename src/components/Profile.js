import { Avatar } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

function Profile(props) {
    
    return (
        <div>
            {props.user.user && 
                <div className='profile-details'>
                    <div className='login-avatar'>
                        <Avatar 
                            style={{width:'150px',height:'150px'}} 
                            src = 'https://i.pinimg.com/originals/8f/e2/53/8fe253e4d4531f55f31d72f47da50c9f.gif'
                        />
                    </div>
                    <div style={{textAlign:'center'}}><h2>User Profile</h2></div>
                    <div className='user-details-flexbox'>
                        <p>Username</p> <p>{props.user.user.username}</p>
                    </div>
                    <div className='user-details-flexbox'>
                        <p>Name</p> <p>{props.user.user.name}</p>
                    </div>
                    <div className='user-details-flexbox'>
                        <p>Email</p> <p>{props.user.user.email}</p>
                    </div>
                    <div className='user-details-flexbox'>
                        <p>Contact</p> <p>{props.user.user.contact}</p>
                    </div>
                    <div className='user-details-flexbox'>
                        <p>City</p> <p>{props.user.user.city}</p>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Profile)
