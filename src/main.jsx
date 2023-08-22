import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Earth } from './components/ecosystem/earth';
import { Organisms } from './components/organisms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Earth />,
  },
  {
    path: "/organisms",
    element: <Organisms />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
