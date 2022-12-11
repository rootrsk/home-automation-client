import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import BoardStatus from '../components/BoardStatus';
import Radial from '../components/charts/Radial';
import RealtimeChart from '../components/charts/RealtimeChart';
import SwitchButton from '../components/SwitchButton';
import { emitEvent } from '../redux/reducers/socket';
// const END_POINT = 'http://localhost:3002'
function Dashboard(props) {
    const dispatch = useDispatch()
    const switchHandler = (switch_no,status,username) =>{
        console.log({switch_no,status,username})
        dispatch(emitEvent({
            eventName:'switch-trigger',
            data:{switch_no,status,username}
        }))
    }
    const buttons = useSelector(state=>state.buttons)
    return (
        <div className='dashboard'>
            <BoardStatus status={props.arduino} />
            <div className='button_containers'>
                {
                    Object?.entries(buttons||{})?.map(([k,v],idx)=>{
                        return (
                            <SwitchButton 
                                key={idx+1}
                                title={v?.title }
                                buttonNumber={idx+1} 
                                onClick={switchHandler} 
                                buttonStatus={v?.status} 
                            />   
                        )
                    
                    })
                }
            </div>
            <div>
                <div >
                    <RealtimeChart  data ={props.sensors.temp} title='Temperature' max={50}/>
                    <RealtimeChart  data ={props.sensors.humidity} title="Humidity" min={20} max={100} />
                    <RealtimeChart  data ={props.sensors.co} title="Carbon MonoOxide" min={1} />
                    <RealtimeChart  data ={props.sensors.ch*10} title="Methane" min={0.0001} />
                </div>
                <div className='meters'>
                    <Radial data ={props.sensors.temp} name='Temperature'/>
                    <Radial data ={props.sensors.humidity} name='Humidity'/>
                    <Radial data ={props.sensors.co} name='Carbon Monooxide'/>
                    <Radial data ={props.sensors.ch} name='Methane'/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(Dashboard)
