import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import Awakening from "./assets/components/Awakening.tsx";
import Tempering from "./assets/components/Tempering.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/awakening",
    element: <Awakening />,
  },
  {
    path: "/tempering",
    element: <Tempering />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
