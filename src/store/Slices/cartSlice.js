import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id,
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      state.totalCount++
    },
    remove: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id,
      )
      state.totalCount -= itemInCart.quantity
      return state.cartItems.filter((item) => item.id !== action.payload)
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
