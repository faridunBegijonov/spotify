import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, MusicDetailPage } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/music/:id",
    element: <MusicDetailPage />,
  },
]);
