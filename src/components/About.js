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
                        src={''}
                    />
                </div>
                <div className="card-description">
                    <div className="card-title">Ravishankar</div>
                    <div className='card-icon'>
                        <GitHub fontSize="inherit" />
                        <a href='https://github.com/rootrsk'>Visit Github</a>
                    </div>
                </div>
            </div>
            {/* <div className="card">
                <div className="card-profile">
                    <Avatar
                        style={{width:'150px',height:'150px'}} 
                        src={''}
                    />
                </div>
                <div className="card-description">
                    <div className="card-title">Rajshree</div>
                    <div className='card-icon'>
                        <GitHub fontSize="inherit" />
                        <a href='#'>Visit Github</a>
                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

export default About
