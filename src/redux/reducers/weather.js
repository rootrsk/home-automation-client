import { createSlice } from '@reduxjs/toolkit'
import socketIoClient from "socket.io-client";
// const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
const END_POINT = 'https://mammoth-galvanized-fiber.glitch.me'
// const END_POINT = 'http://localhost:3001'

const initialState = { 
    isLoading:false,
    isLoaded:false,
    room:null,
    city:null
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        initiateConnection(state){
            state.isInitiated = true
            state.isConnecting = true



        },
        terminateConnection(state){
            state = initialState
        },
        changeConnectionStatus(state,{payload}){
            console.log(payload)
            state.isConnected = payload?.isConnected ?? state.isConnected
            state.isConnecting = payload?.isConnecting ?? state.isConnecting
            state.isReconnectig = payload?.isReconnectig ?? state.isReconnectig
        },
        emitEvent(state,{payload:{eventName,data,response}}){
            console.log({eventName,data,response})
            state?.socket.emit(eventName,data,response)
        }
    },
})

export default weatherSlice.reducer

export const {
    initiateConnection, changeConnectionStatus, terminateConnection, emitEvent
} = weatherSlice.actions
