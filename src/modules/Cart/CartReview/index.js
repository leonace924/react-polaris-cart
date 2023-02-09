import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  AlphaStack,
  Box,
  Card,
  EmptyState,
  Inline,
  Text,
} from '@shopify/polaris'
import { CartItem } from 'components/Common'

export const CartReview = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const { cart } = useSelector((state) => state)

  useEffect(() => {
    setTotalAmount(
      cart.cartItems.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
        0,
      ),
    )
  }, [cart])

  if (!cart.totalCount) {
    return (
      <Card>
        <EmptyState
          heading="Your cart is empty"
          action={{ content: 'Add products', url: '/' }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Looks like you have not added anything to your cart.</p>
        </EmptyState>
      </Card>
    )
  }

  return (
    <Card>
      <Box padding="4" borderBlockEnd="dark">
        <AlphaStack>
          {cart.cartItems?.map((item) => (
            <CartItem item={item} key={`cart-${item?.id}`} />
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
