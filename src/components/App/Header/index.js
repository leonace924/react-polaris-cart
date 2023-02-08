import { TopBar, Icon, Link, Text } from '@shopify/polaris'
import { CartMajor } from '@shopify/polaris-icons'

export const Header = () => {
  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <Link url="/cart">
          <Icon source={CartMajor} />
          <Text variant="bodySm" as="span" visuallyHidden>
            Secondary menu
          </Text>
        </Link>
      }
    />
  )

  return <TopBar secondaryMenu={secondaryMenuMarkup} />
}
