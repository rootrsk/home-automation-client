import { createSlice } from '@reduxjs/toolkit'
import socketIoClient from "socket.io-client";
// const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
const END_POINT = 'https://mammoth-galvanized-fiber.glitch.me'
// const END_POINT = 'http://localhost:3001'

const initialState = { 
    socket:null,
    isInitiated:false,
    isConnected: false,
    isConnecting:false,
    isReconnectig:false,
}

const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        initiateConnection(state){
            state.isInitiated = true
            state.isConnecting = true
            state.socket = socketIoClient(END_POINT)
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

export default socketSlice.reducer

export const {
    initiateConnection, changeConnectionStatus, terminateConnection, emitEvent
} = socketSlice.actions
