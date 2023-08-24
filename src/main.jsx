import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Atom } from './atom';
import { Molecules } from './molecules';
import { Organisms } from './organisms';
import { QA } from './components/pages';

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
    path: "/pages",
    element: <QA />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
