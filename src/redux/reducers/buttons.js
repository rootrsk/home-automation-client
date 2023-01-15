import { createSlice } from '@reduxjs/toolkit'
const initialState={
    button_1:{status:false,title:'Button'},
    button_2:{status:false,title:'Strip Light'},
    button_3:{status:false,title:'Button'},
    button_4:{status:false,title:'Button'},
    button_5:{status:false,title:'Main Light'},
    button_6:{status:false,title:'Party Light'},
    button_7:{status:false,title:'Fan'},
    button_8:{status:false,title:'Left Power'},
}

const authSlice = createSlice({
    name:'buttons',
    initialState,
    reducers:{
        changeButtonStatus(state,{payload}){
            state[`button_${payload?.switch_no}`].status = payload?.status
        },
        changeButtonTitle(state,{payload}){
            state[`button_${payload?.switch_no}`].title = payload?.title
        }
    }
})
export default authSlice.reducer
export const { 
    changeButtonStatus
} = authSlice.actions