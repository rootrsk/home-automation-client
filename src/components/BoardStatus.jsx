import React from 'react'
function BoardStatus({status}) {
    return (
        <div className='arduino-status'>
            <div className="arduino-status_title">
                <h2>Arduino</h2>
            </div>
            <div className="arduino-status_status">
                <p>{status? 'Connected':'Disconnected'}</p>
                <div className={status?'led-green' : 'led-off'}></div>
            </div>
        </div>
    )
}
export default BoardStatus
