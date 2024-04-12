import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Product_show from './pages/Product_show.jsx'
import Admins from './pages/admin/Admins.jsx'
import View from "./pages/admin/View.jsx"
import Insert from './pages/admin/Insert.jsx'
import Update from './pages/admin/Update.jsx'
import Cart from './components/Cart.jsx'
import ContactUs from './components/ContactUs.jsx'
import Customize from './components/Customize.jsx'



const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "productInfo/:id",
        element: <Product_show />
      },
      {
        path: "contactus",
        element: <ContactUs />
      },
      {
        path: "customize",
        element: <Customize />
      },
      {
        path: "adminpanel",
        element: <Admins />
      },
      {
        path: "admin/view",
        element: <View />
      },
      {
        path: "admin/insert",
        element: <Insert />
      },
      {
        path: "admin/update/:id",
        element: <Update />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
