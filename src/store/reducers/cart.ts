import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItensType } from '../../pages/Perfil'

type CartState = {
  items: MenuItensType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItensType>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemMenu = action.payload
      state.items = state.items.filter((item) => item.id !== itemMenu)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = CartSlice.actions
export default CartSlice.reducer
