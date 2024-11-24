  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './login'


const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login />,
    },
  ]
)
export default function Router() {
  return <RouterProvider router={router} />;
}