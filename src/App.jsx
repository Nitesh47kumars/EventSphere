import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import AuthPage from "./Components/AuthPage/AuthPage";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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

  return <RouterProvider router={Router} />;
};

export default App;
