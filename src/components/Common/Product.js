import React, { useCallback } from 'react'
import { Button, Inline, Text, Stack } from '@shopify/polaris'
import { useSelector, useDispatch } from 'react-redux'
import { add } from 'store/Slices/cartSlice'

export const Product = ({ product }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state)

  const { title, price, description, rating } = product
  console.log(cart)

  const handleAddToCart = useCallback(() => {
    dispatch(add(product))
  }, [dispatch, product])

  return (
    <Stack vertical>
      <Text variant="bodyLg" fontWeight="bold" as="h3">
        {title}
      </Text>
      <Text variant="bodyMd" as="p">
        {description}
      </Text>

      <Inline>
        <Text variant="bodyLg" fontWeight="bold" as="p">
          ${price}
        </Text>
        <Text variant="bodyMd" as="p">
          Rating {rating?.rate}
        </Text>
        <Button primary onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Inline>
    </Stack>
  )
}
