import React from 'react'
import { PolarisTestProvider } from '@shopify/polaris'
import { render as rtlRender } from '@testing-library/react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import enTranslations from '@shopify/polaris/locales/en.json'

import cartReducer from 'store/Slices/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
})

const render = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <PolarisTestProvider i18n={enTranslations}>
          {children}
        </PolarisTestProvider>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
// override render method
export { render }
