import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Box, Button, Inline, Text } from '@shopify/polaris'
import { remove } from 'store/Slices/cartSlice'

export const CartItem = ({ item }) => {
  const { title, price, image: imageUrl, quantity } = item
  const dispatch = useDispatch()

  const handleRemoveItem = useCallback(() => {
    dispatch(remove(item))
  }, [dispatch, item])

  const media = <Avatar customer size="medium" name={title} source={imageUrl} />

  return (
    <Box width="100%" data-testid="CartItem">
      <Inline blockAlign="center">
        {media}
        <Box style={{ flex: 1 }}>
          <Inline blockAlign="center" align="space-between">
            <Box>
              <Box paddingBlockEnd="1">
                <Text variant="bodyLg" fontWeight="medium" as="h3">
                  {title}
                </Text>
              </Box>

              <Text variant="bodyLg" fontWeight="medium" as="p">
                ${price}
              </Text>
              <Button plain destructive onClick={handleRemoveItem}>
                Remove
              </Button>
            </Box>

            <Box width={'25%'}>
              <Inline align="space-between">
                <Text variant="bodyLg" fontWeight="medium" as="p">
                  {quantity}
                </Text>

                <Text variant="bodyLg" fontWeight="medium" as="p">
                  ${price * quantity}
                </Text>
              </Inline>
            </Box>
          </Inline>
        </Box>
      </Inline>
    </Box>
  )
}
