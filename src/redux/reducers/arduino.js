const initialState = false

export default function arduinoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ARDUINO_STATUS':
            return action.status
            
        case 'GET_ARDUINO_STATUS':
            return state
            
        default:
            return state
            
    }
}
