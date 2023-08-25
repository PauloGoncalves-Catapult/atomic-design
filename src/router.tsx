import {
  createBrowserRouter,
} from "react-router-dom";
import { Intro, Atoms, Molecules, Organisms, Templates, Pages } from './pages';

export const router = createBrowserRouter([
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