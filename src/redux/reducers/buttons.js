import { createSlice } from '@reduxjs/toolkit'
const initialState={
    button_1:{status:false,title:'Fan'},
    button_2:{status:false,title:'Strip Light'},
    button_3:{status:false,title:'Main Light'},
    button_4:{status:false,title:'Laptop Charger'},
    button_5:{status:false,title:'Night Light'},
    button_6:{status:false,title:'Button'},
    button_7:{status:false,title:'Button'},
    button_8:{status:false,title:'Button'},
}


const authSlice = createSlice({
    name:'buttons',
    initialState,
    reducers:{
        changeButtonStatus(state,{payload}){
            console.log(payload,state)
            state[`button_${payload?.switch_no}`].status = payload?.status
            // state.isAuthenticating = false
            // state.user = payload?.user ?? state.user
            // state.error = payload.error ?? state.error
            // state.isAuthenticated = payload?.isAuthenticated ?? state.isAuthenticated
        }

    }
})
export default authSlice.reducer
export const { 
    changeButtonStatus
} = authSlice.actions