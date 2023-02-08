import { Layout } from 'components/App'

const CartPage = () => {
  return (
    <Layout title="Cart" breadcrumbs={[{ content: 'Products', url: '/' }]}>
      <div>Cart Page</div>
    </Layout>
  )
}

export default CartPage
