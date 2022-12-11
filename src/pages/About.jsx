import { Avatar } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import React from 'react'

function About() {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-profile">
                    <Avatar
                        style={{width:'150px',height:'150px'}} 
                        src={'https://i.ibb.co/gD6pS17/IMG20210531021320.jpg'}
                    />
                </div>
                <div className="card-description">
                    <div className="card-title">Ravishankar</div>
                    <p className='center'>Full Stack Developer</p>
                    <div className='card-icon'>
                        <GitHub fontSize="inherit" />
                        <a href='https://github.com/rootrsk'>Visit Github</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-profile">
                    <Avatar
                        style={{width:'150px',height:'150px'}} 
                        src={'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/298345364_3367857520165953_590507407697174199_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lpoYET0OAWgAX877Qd6&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9N-oYzCetJ44jGdGA-sPuujMab-dj3l5Y4o9XdqzurAw&oe=62FE0FD3'}
                    />
                </div>
                <div className="card-description">
                    <div className="card-title">Rajashri</div>
                    <p className='center'>Web Designer & Developer</p>
                    
                    <div className='card-icon'>
                        <GitHub fontSize="inherit" />
                        <a href='https://github.com/Rajashri-Banerjee'>Visit Github</a>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default About
