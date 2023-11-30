import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Awakening from "./assets/components/Awakening.tsx";
import Tempering from "./assets/components/Tempering.tsx";
import Regrading from "./assets/components/Regrading.tsx";

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
  {
    path: "/regrading",
    element: <Regrading />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
