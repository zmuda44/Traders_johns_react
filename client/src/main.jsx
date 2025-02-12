// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/homepage'
import Profile from './pages/profile'
import Checkout from './pages/checkout'
import Login from './pages/login'
import SellerPage from './pages/seller-page'
import SellerDashboard from './pages/seller-dashboard'
import EditProduct from './pages/edit-product.jsx'
import ProductDetails from './pages/product-details.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />
      },
      {
        path: '/user/:userId',
        element: <SellerPage />
      },
      {
        path: '/user/seller-dashboard',
        element: <SellerDashboard />
      },
      {
        path: '/user/seller-dashboard/product/:productId',
        element: <EditProduct />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} /> // Provide the router to the application
);



