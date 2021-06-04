const initialState = {
    user:null,
    isLoadgin: false,
    isAuthenticated: false,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {...action}
            
        case 'GET_USER':
            return state
            
        case 'REMOVE_USER':
            return initialState
            
        default:
            return state
            
    } 
}
