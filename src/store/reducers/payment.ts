import { createSlice } from '@reduxjs/toolkit'

type PaymentState = {
  paymentOpen: boolean
}

const initialState: PaymentState = {
  paymentOpen: false
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    openPayment: (state) => {
      state.paymentOpen = true
    },
    closePayment: (state) => {
      state.paymentOpen = false
    }
  }
})

export const { openPayment, closePayment } = paymentSlice.actions

export default paymentSlice.reducer
