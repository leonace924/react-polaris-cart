import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AlphaStack, Box, Card, Inline, Text } from '@shopify/polaris'
import { CartItem } from 'components/Common/CartItem'

export const CartReview = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const { cart } = useSelector((state) => state)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <Card>
      <Box padding="4" borderBlockEnd="dark">
        <AlphaStack>
          {cart.map((item) => (
            <CartItem {...item} key={`cart-${item?.id}`} />
          ))}
        </AlphaStack>
      </Box>

      <Box padding="4">
        <Box borderBlockEnd="dark" paddingBlockEnd="4">
          <Box paddingBlockEnd="2">
            <Inline align="space-between">
              <Text variant="bodyLg" as="p">
                Subtotal
              </Text>
              <Text variant="bodyLg" fontWeight="medium" as="p">
                ${totalAmount}
              </Text>
            </Inline>
          </Box>

          <Inline align="space-between">
            <Text variant="bodyLg" as="p">
              Shipping
            </Text>
            <Text variant="bodyLg" as="p">
              Free Shipping
            </Text>
          </Inline>
        </Box>

        <Box paddingBlockStart="4">
          <Inline align="space-between">
            <Text variant="bodyLg" as="p" fontWeight="normal">
              Total:{' '}
            </Text>
            <Text variant="headingLg" fontWeight="medium" as="p">
              ${totalAmount}
            </Text>
          </Inline>
        </Box>
      </Box>
    </Card>
  )
}
