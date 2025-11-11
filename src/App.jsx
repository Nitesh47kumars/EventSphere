import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Events from "./Components/Events/EventPage/Events";
import Contact from "./Components/Contact/Contact";
import AuthPage from "./Components/AuthPage/AuthPage";
import EventDetail from "./Components/Events/EventDetails/EventDetail";
import ErrorPage from "./ErrorPage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage/> ,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "events/:id",
          element: <EventDetail />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "authpage",
          element: <AuthPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
