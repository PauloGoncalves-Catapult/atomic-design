import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Intro, Atoms, Molecules, Organisms, Templates, Pages } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/atoms",
    element: <Atoms />,
  },
  {
    path: "/molecules",
    element: <Molecules />,
  },
  {
    path: "/organisms",
    element: <Organisms />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
