import React from 'react'
import { Frame, Loading } from '@shopify/polaris'
import { AppRoutes } from 'routes'
import '@shopify/polaris/build/esm/styles.css'
import 'styles/index.css'

function App() {
  return (
    <React.Suspense
      fallback={
        <Frame>
          <Loading />
        </Frame>
      }
    >
      <AppRoutes />
    </React.Suspense>
  )
}

export default App
