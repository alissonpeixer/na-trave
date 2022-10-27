import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./index.css";

import { Home } from "./page/Home";
import { ErrorPage } from "./page/ErrorPage";
import { SignIn } from "./page/SignIn";
import { SignUp } from "./page/SignUp";
import { Hunches } from "./page/Hunches";
import { User } from "./page/User";
import { Username } from "./page/User/Username";
import { SnackbarProvider } from "notistack";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/hunches',
    element: <Hunches />
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/user/:username',
    element: <Username />,
  }
]);




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={1400}>
      {
        <RouterProvider router={router} />
      }
    </SnackbarProvider>
  </React.StrictMode>
)
