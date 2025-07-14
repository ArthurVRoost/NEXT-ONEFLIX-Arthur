import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:['persist/PERSIST'],
            },
        }),
})

