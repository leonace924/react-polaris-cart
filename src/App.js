import React from 'react'
import { Frame, Loading } from '@shopify/polaris'
import { AppRoutes } from 'routes'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
import '@shopify/polaris/build/esm/styles.css'
import 'styles/index.css'

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <React.Suspense
        fallback={
          <Frame>
            <Loading />
          </Frame>
        }
      >
        <AppRoutes />
      </React.Suspense>
    </AppProvider>
  )
}

export default App
