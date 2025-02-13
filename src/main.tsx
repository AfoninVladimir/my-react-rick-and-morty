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
import {Toaster} from "@/components/ui/toaster.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/personage/:id",
        element: <Personage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <Layout>
              <RouterProvider router={router} />
              <Toaster />
          </Layout>
      </CookiesProvider>
  </React.StrictMode>,
)
