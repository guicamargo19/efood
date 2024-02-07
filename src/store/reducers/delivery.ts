import { createSlice } from '@reduxjs/toolkit'

type DeliveryState = {
  deliveryOpen: boolean
}

const initialState: DeliveryState = {
  deliveryOpen: false
}

const DeliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.deliveryOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryOpen = false
    }
  }
})

export const { openDelivery, closeDelivery } = DeliverySlice.actions
export default DeliverySlice.reducer
