import { createSlice } from '@reduxjs/toolkit'

type OrderState = {
  orderOpen: boolean
}

const initialState: OrderState = {
  orderOpen: false
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openOrder: (state) => {
      state.orderOpen = true
    },
    closeOrder: (state) => {
      state.orderOpen = false
    }
  }
})

export const { openOrder, closeOrder } = orderSlice.actions

export default orderSlice.reducer
