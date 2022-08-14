const initialState = {
    temp:0,
    humidity:0,
    co:0,
    ch:0,
    time: Date.now()
}

export default function sensorsReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_SENSORS_DATA':
            return action.sensorsData
        case 'GET_SENSORS_DATA':
            return state
        default:
            return state
    }
}
