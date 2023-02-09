import reducer, { add, remove } from './cartSlice'

const expectedItem = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
}

describe('Cart Slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      cartItems: [],
      totalCount: 0,
    })
  })

  it('should handle a item being added to empty cart', () => {
    const prevState = { cartItems: [], totalCount: 0 }

    expect(reducer(prevState, add(expectedItem))).toEqual({
      cartItems: [{ ...expectedItem, quantity: 1 }],
      totalCount: 1,
    })
  })

  it('should handle a item remove from the cart', () => {
    const prevState = {
      cartItems: [{ ...expectedItem, quantity: 1 }],
      totalCount: 1,
    }

    expect(reducer(prevState, remove(expectedItem))).toEqual({
      cartItems: [],
      totalCount: 0,
    })
  })
})
