import React from 'react'
import { connect } from 'react-redux';
import BoardStatus from './BoardStatus';
import Radial from './charts/Radial';
import RealtimeChart from './charts/RealtimeChart';
import SwitchButton from './SwitchButton';
// const END_POINT = 'http://localhost:3002'
function Dashboard(props) {
    const switchHandler = (switch_no,status,user) =>{
        if(props.socket){
            if(props.user){
                props.socket.emit('switch-trigger',{switch_no,status,username:props.user.user.username})  
            } else{
                props.socket.emit('switch-trigger',{switch_no,status,username:'unknown'})
            }
        }
        props.dispatch({
            type: 'SET_SWITCH_STATUS',
            buttonStatus: {
                switch_no,
                status
            }
        })
    }
    return (
        <div className='dashboard'>
            <BoardStatus status={props.arduino} />
            <div className='button_containers'>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_1} buttonNumber={1} title='Button 1'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_2} buttonNumber={2} title='Button 2'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_3} buttonNumber={3} title='Button 3'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_4} buttonNumber={4} title='Button 4'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_5} buttonNumber={5} title='Button 5'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_6} buttonNumber={6} title='Button 6'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_7} buttonNumber={7} title='Button 7'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_8} buttonNumber={8} title='Button 8'/>
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
