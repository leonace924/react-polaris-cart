import { useSelector } from 'react-redux'
import { Badge, Button, Icon, Inline, TopBar, Text } from '@shopify/polaris'
import { CartMajor } from '@shopify/polaris-icons'

export const Header = () => {
  const { cart } = useSelector((state) => state)

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <Button
          url="/cart"
          plain
          removeUnderline
          accessibilityLabel="Cart Button"
        >
          <Inline wrap={false} gap={0} align="start">
            <Icon source={CartMajor} />
            {!!cart.length && <Badge status="success">{cart.length}</Badge>}
          </Inline>
          <Text variant="bodySm" as="span" visuallyHidden>
            Secondary menu
          </Text>
        </Button>
      }
    />
  )

  return <TopBar secondaryMenu={secondaryMenuMarkup} />
}
