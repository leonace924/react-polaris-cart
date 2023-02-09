import { Layout } from 'components/App'
import { CartReview } from 'modules/Cart'

const CartPage = () => {
  return (
    <Layout title="Your Cart" breadcrumbs={[{ content: 'Products', url: '/' }]}>
      <CartReview />
    </Layout>
  )
}

export default CartPage
