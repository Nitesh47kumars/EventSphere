import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import Events from './Components/Events/Events'

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/events",
      element: <Events/>
    },
  ])
  return <RouterProvider router={Router}/>
}

export default App
