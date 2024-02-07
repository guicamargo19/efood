import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import deliveryReducer from './reducers/delivery'
import orderReducer from './reducers/order'
import paymentReducer from './reducers/payment'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    order: orderReducer,
    payment: paymentReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
