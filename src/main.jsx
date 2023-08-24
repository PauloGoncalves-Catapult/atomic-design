import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Atom, Molecules, Organisms, Templates, Page } from './components/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Atom />,
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
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
