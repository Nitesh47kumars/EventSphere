import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    }
  ])
  return <RouterProvider router={Router}/>
}

export default App
