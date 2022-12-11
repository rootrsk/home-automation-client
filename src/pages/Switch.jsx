import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwitchButton from '../components/SwitchButton'
function Switches(props) {
    // const switchHandler = (switch_no,status,user) =>{
    //     if(props.socket){
    //         if(props.user){
    //             props.socket.emit('switch-trigger',{switch_no,status,username:props.user.user.username})  
    //         } else{
    //             props.socket.emit('switch-trigger',{switch_no,status,username:'unknown'})
    //         }
    //     }
    //     props.dispatch({
    //         type: 'SET_SWITCH_STATUS',
    //         buttonStatus: {switch_no,status}
    //     })
    // }
    const switchHandler = ()=>{
    
    }
    const dispatch = useDispatch()
    const switches = useSelector(state=>state?.switches)
    return (
        <div>
            <div className='button_containerss'>
                <div className="third">
                    <SwitchButton 
                        buttonHandler={switchHandler} 
                        buttonStatus={props.buttons.switch_1} 
                        buttonNumber={1} 
                        title='Button 1'
                    />
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_2} buttonNumber={2} title='Button 2'/>
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_3} buttonNumber={3} title='Button 3'/>
                </div>
                <div className="third">
                     <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_4} buttonNumber={4} title='Button 4'/>
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_5} buttonNumber={5} title='Button 5'/>
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_6} buttonNumber={6} title='Button 6'/>
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_7} buttonNumber={7} title='Button 7'/>
                </div>
                <div className="third">
                    <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_8} buttonNumber={8} title='Button 8'/>
                </div> 
            </div>
            
        </div>
    )
}
export default  Switches
