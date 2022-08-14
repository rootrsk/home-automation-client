const initialState = null

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WEATHER':
            return action.weather

            case 'GET_WEATHER':
                return state

            case 'REMOVE_WEATHER':
                return initialState

            default:
                return state

    }
}
