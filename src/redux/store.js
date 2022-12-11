import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/user'
import authReducer from './reducers/auth'
import socketReducer from './reducers/socket'
import buttonReducer from './reducers/buttons'
import sensorsReducer from './reducers/sensors'
import arduinoReducer from './reducers/arduino'
import weatherReducer from './reducers/weather'

const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        sensors:sensorsReducer,
        buttons:buttonReducer,
        socket :socketReducer,
        arduino:arduinoReducer,
        weather:weatherReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ['socket.socket'],
          },
    }),
})

export default store