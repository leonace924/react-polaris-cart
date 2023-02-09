## PLP and Cart page using Shopify Polaris components

- PLP page including sort (ASC/DESC) and filter by categories
- Cart Page with cart items and total price, also empty state

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Setup Guide

- Clone the repo on your local:
  `git clone https://github.com/leonace924/react-polaris-cart.git`

- Go to the resulting folder and install all dependencies: `cd react-polaris-cart && yarn`

- Create a file named `.env.local`, copy data from `.env.example` and update the API URL in that file

- Start the local build script: `yarn develop`

### Used Tech Stacks

- React
- Redux, Redux-Toolkit, [Redux-Persist](https://www.npmjs.com/package/redux-persist)
- Axios
- [Shopify Polaris](https://polaris.shopify.com/components)
- React Testing Library (added in two files - store/slice/cartSlice.test.js, components/Common/CartItem/CartItem.test.js)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
