import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Inline, Text, Stack } from '@shopify/polaris'
import { add } from 'store/Slices/cartSlice'

export const Product = ({ product }) => {
  const dispatch = useDispatch()

  const { title, price, description, rating } = product

  const handleAddToCart = useCallback(() => {
    dispatch(add(product))
  }, [dispatch, product])

  return (
    <Stack vertical>
      <Text variant="bodyLg" fontWeight="medium" as="h3">
        {title}
      </Text>
      <Text variant="bodyMd" as="p">
        {description}
      </Text>

      <Inline>
        <Text variant="bodyLg" fontWeight="medium" as="p">
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
