import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="dark:bg-gray-950">
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
