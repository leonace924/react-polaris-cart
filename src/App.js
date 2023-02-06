import React from 'react'
import { Loading } from 'components/Common'
import { AppRoutes } from 'routes'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
import '@shopify/polaris/build/esm/styles.css'
import 'styles/index.css'

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <AppProvider i18n={enTranslations}>
        <AppRoutes />
      </AppProvider>
    </React.Suspense>
  )
}

export default App
