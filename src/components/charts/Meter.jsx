import React from 'react'

function Meter(props) {
    return (
        <div>
            <input className='meter' type='range' min='10' max='100' value={props.data} />
        </div>
    )
}

export default Meter
