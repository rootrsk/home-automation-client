import { createSlice } from '@reduxjs/toolkit'
const initialState={
    connected: false,
}

const arduinoReducer = createSlice({
    name:'arduino',
    initialState,
    reducers:{
        changeArduinoStatus(state,{payload}){
            state.connected = payload?.connected
        }
    }
})
export default arduinoReducer.reducer
export const { 
    changeArduinoStatus
} = arduinoReducer.actions