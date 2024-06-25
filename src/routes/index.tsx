import {
  createBrowserRouter,
} from "react-router-dom";

import Home from './Home'

import ScrollToTop from "@/components/scroll-to-top";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollToTop children={<Home />} />,
    errorElement: <ErrorPage />
  },
]);
