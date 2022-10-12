import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

import { Home } from "./Pages/Home";
import { ErrorPage } from "./Pages/ErrorPage";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Hunches } from "./Pages/Hunches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />
  }
  ,
  {
    path: '/hunches',
    element: <Hunches />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);