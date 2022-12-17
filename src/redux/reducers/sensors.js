import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    temp:0,
    humidity:0,
    co:0,
    ch:0,
    time: Date.now()
}
const authSlice = createSlice({
    name:'sensors',
    initialState,
    reducers:{

        updateSensorData(state,{payload}){
            console.log(payload)
            state.temp = payload.temp ?? state.temp
            state.humidity = payload.humidity ?? state.humidity
            state.co = payload.co ?? state.co
            state.ch = payload.ch ?? state.ch
            state.time = payload.time ?? state.time
        }
    }
})
export default authSlice.reducer
export const { 
    updateSensorData
} = authSlice.actions