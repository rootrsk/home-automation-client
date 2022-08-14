import React from 'react'
import { connect } from 'react-redux'
import Radial from './charts/Radial'
import RealtimeChart from './charts/RealtimeChart'

function Grpah(props) {
    return (
        <div>
            <div className='meters'>
                <Radial data ={props.sensors.temp} name='Temperature'/>
                <Radial data ={props.sensors.humidity} name='Humidity'/>
                <Radial data ={props.sensors.co} name='Carbon Monooxide'/>
                <Radial data ={props.sensors.ch} name='Methane'/>
            </div>
           <div>
                <RealtimeChart  data ={props.sensors.temp} title='Temperature' max={50}/>
                <RealtimeChart  data ={props.sensors.humidity} title="Humidity" min={20} max={100} />
                <RealtimeChart  data ={props.sensors.co} title="Carbon MonoOxide" min={1} max={50}/>
                <RealtimeChart  data ={props.sensors.ch} title="Methane" min={0.001} max={50} />
            </div> 
            
        </div>
    )
}
const mapStateToProps = state =>state
export default connect(mapStateToProps) (Grpah)
