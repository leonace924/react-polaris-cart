import { Frame, Page } from '@shopify/polaris'
import { Header } from 'components/App'

export const Layout = ({ title, children }) => {
  const logo = {
    width: 124,
    topBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
    url: '/',
    accessibilityLabel: 'Logo',
  }

  return (
    <Frame topBar={<Header />} logo={logo}>
      <Page title={title}>{children}</Page>
    </Frame>
  )
}
