import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import Context from "./Context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="dark:bg-gray-950">
      <QueryClientProvider client={queryClient}>
        <Context>
          <HelmetProvider>
            <RouterProvider router={Router}></RouterProvider>
          </HelmetProvider>
        </Context>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
