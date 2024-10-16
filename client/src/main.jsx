import { StrictMode } from 'react'
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
        path: '/user/:userId',
        element: <SellerPage />
      },
      {
        path: '/user/seller-dashboard',
        element: <SellerDashboard />
      },
      {
        path: '/users/product/:productId',
        element: <EditProduct />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);



// {
//   path: 'admin/:user',
//   element: <Admin />
// },
// {
//   path: 'projects/:projectId',
//   element: <IndividualProject />
// },
// {
//   path: '/contact-us',
//   element: <ContactUs />
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
