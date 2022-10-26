import React, { useEffect } from "react";
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
import { User } from "./Pages/User";
import { Username } from "./Pages/User/Username";
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
