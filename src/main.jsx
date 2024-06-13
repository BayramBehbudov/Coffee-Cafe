import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import router from "./router";

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
