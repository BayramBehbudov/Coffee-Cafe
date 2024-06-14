import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "./OrderContext.jsx";
import router from "./router";

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider >
    <RouterProvider router={routes} />
  </ContextProvider>
);
