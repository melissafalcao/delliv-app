import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import orderReducer from './slices/orderSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
