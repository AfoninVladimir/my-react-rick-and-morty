import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import '@/styles/scss/main.scss';
import Layout from "./components/layouts/layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import ErrorPage from "./pages/error/error.tsx";
import { CookiesProvider } from 'react-cookie';
import Personage from "@/pages/personage/personage.tsx";
import Favorites from "@/pages/favorites/favorites.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/personage",
        element: <Personage />,
    },
    {
        path: "/favorites",
        element: <Favorites />,
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <Layout>
              <RouterProvider router={router} />
          </Layout>
      </CookiesProvider>
  </React.StrictMode>,
)
