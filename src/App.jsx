import React from 'react'
import LandingPage from './components/LandingPage'
import { RouterProvider } from 'react-router-dom'
import { router } from './Approuter/AppRouter'
import AppLoader from './components/AppLoader'

const App = () => {
  return (
    <AppLoader>
      <RouterProvider router={router}>
        <LandingPage />
      </RouterProvider>
    </AppLoader>
  )
}

export default App