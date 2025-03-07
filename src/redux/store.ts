import { configureStore } from '@reduxjs/toolkit'
import authReducer from "@/redux/features/authSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from './storage';


// persist configure for auth
const persistConfig = {
    key: "auth",
    storage
}

// persist reducer for auth
const persistedAuthReducer = persistReducer(persistConfig, authReducer)



export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: persistedAuthReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']