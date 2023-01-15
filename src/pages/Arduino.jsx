import { useSelector } from 'react-redux';
function Arduino() {
    const buttons = useSelector(state=>state.buttons)
    const arduino = useSelector(state=>state.arduino)
    const sensors = useSelector(state=>state.sensors)
    
    return (
        <div className='arduino-page'>
            <h1>Arduino</h1>
            <div className='arduino_header'>
                <div className="led">
                    <div className={arduino.connected?'led-green':'led-off'}></div>
                    <p>{arduino.connected?'Connected':'Disconnected'} </p>
                </div>
                {console.log(arduino.connected)}
                <div className='relay'>
                    {
                        Object?.entries(buttons||{})?.map(([k,v],idx)=>{
                            return (
                                <div className='switch_container' key={idx+1}>
                                    <div className={v?.status?'led-green':'led-off'}></div>
                                    <p>{v?.title }</p>
                                </div> 
                            )
                        })
                    }
                </div>

                <div className='buzzer'>
                    <div className={true?'led-green':'led-off'}></div>
                    <p>Alarm </p>
                </div>

            </div>
            
            <div className='sensors'>
                <p>Temp : {sensors.temp}℃</p>
                <p>Humidity : {sensors.humidity}</p>
                <p>CO : {sensors.co}</p>
                <p>CH4 : {sensors.ch}</p>
                <p>Time: {new Date(sensors.time).toLocaleTimeString()}</p>
            </div>
            
            
        </div>
    )
}

export default Arduino