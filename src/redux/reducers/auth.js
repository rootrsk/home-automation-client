import { createSlice } from '@reduxjs/toolkit'
const initialState={
    user:null,
    error:null,
    isAuthenticated:false,
    isAuthenticating:false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        initiateAuthentication(state){
            state.error = null
            state.isAuthenticating = true
        },
        changeAuthenticationStatus(state,{payload}){
            state.isAuthenticating = false
            state.user = payload?.user ?? state.user
            state.error = payload.error ?? state.error
            state.isAuthenticated = payload?.isAuthenticated ?? state.isAuthenticated
        },
        terminateAuthentication(state,{payload}){
            Object.assign(state,initialState)
        }
    }
})
export default authSlice.reducer
export const { 
    initiateAuthentication, 
    changeAuthenticationStatus, 
    terminateAuthentication
} = authSlice.actions