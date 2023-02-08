import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Box, Button, Inline, Text } from '@shopify/polaris'
import { remove } from 'store/Slices/cartSlice'

export const CartItem = ({ item }) => {
  const { title, price, image: imageUrl } = item
  const dispatch = useDispatch()

  const handleRemoveItem = useCallback(() => {
    dispatch(remove(item))
  }, [dispatch, item])

  const media = <Avatar customer size="medium" name={title} source={imageUrl} />

  return (
    <Box width="100%">
      <Inline blockAlign="center">
        {media}
        <Box style={{ flex: 1 }}>
          <Inline blockAlign="center" align="space-between">
            <Text variant="bodyLg" fontWeight="medium" as="h3">
              {title}
            </Text>
            <Inline>
              <Text variant="bodyLg" fontWeight="medium" as="p">
                ${price}
              </Text>
              <Button plain monochrome onClick={handleRemoveItem}>
                Remove
              </Button>
            </Inline>
          </Inline>
        </Box>
      </Inline>
    </Box>
  )
}
