import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
      const menuItem = state.items.find((item) => item.id === action.payload.id)
      if (!menuItem) {
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado ao carrinho!')
      }
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
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = CartSlice.actions
export default CartSlice.reducer
