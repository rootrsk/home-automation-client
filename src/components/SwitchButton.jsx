import React from 'react'
import { IconButton } from '@material-ui/core';
import { PowerSettingsNew } from '@material-ui/icons';
function SwitchButton({buttonHandler,buttonStatus,buttonNumber,title}) {
    return (
        <div>
            <div className='button_div'>
                <div className='led-container'>
                    <div className={buttonStatus?'led-green' : 'led-off'}></div>
                </div>
                <IconButton className={buttonStatus?'button2':'button'} onClick={()=>buttonHandler(buttonNumber,!buttonStatus)}>
                    <PowerSettingsNew className={buttonStatus?'icon_button':'icon_button2'} />  
                </IconButton>
                <p className={buttonStatus ?'button_text':'button_text2'}>{title}</p>
            </div>
        </div>
    )
}

export default SwitchButton
