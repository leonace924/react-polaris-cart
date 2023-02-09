import React from 'react'
import { render, screen, cleanup } from 'helpers/test-utils'
import { CartItem } from 'components/Common'

import '@testing-library/jest-dom'

describe('Cart item', () => {
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
    quantity: 3,
  }
  const setup = () => render(<CartItem item={expectedItem} />)

  afterEach(() => {
    cleanup()
  })

  it('should render', () => {
    setup()
    const component = screen.getByTestId('CartItem')
    expect(component).toBeInTheDocument()
  })

  it('renders product title', () => {
    setup()
    const component = screen.getByRole('heading', { name: expectedItem.title })
    expect(component).toBeInTheDocument()
  })

  it('renders product price', () => {
    setup()
    expect(screen.getByText(`$${expectedItem.price}`)).toBeInTheDocument()
  })

  it('renders quantity', () => {
    setup()
    expect(screen.getByText(expectedItem.quantity)).toBeInTheDocument()
  })

  it('renders product image', () => {
    setup()
    expect(screen.getByRole('presentation')).toHaveAttribute(
      'src',
      expectedItem.image,
    )
    // expect(screen.getByRole('img')).toHaveAttribute('src', expectedItem.image)
  })
})
