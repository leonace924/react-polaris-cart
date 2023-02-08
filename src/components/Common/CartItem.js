import { Avatar, Box, Inline, Text } from '@shopify/polaris'

export const CartItem = ({ id, title, price, image: imageUrl }) => {
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
            <Text variant="bodyLg" fontWeight="medium" as="p">
              ${price}
            </Text>
          </Inline>
        </Box>
      </Inline>
    </Box>
  )
}
