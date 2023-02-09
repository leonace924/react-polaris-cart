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
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.cartItems.splice(index, 1)
      state.totalCount = state.cartItems.reduce(
        (acc, cur) => acc + cur.quantity,
        0,
      )
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
