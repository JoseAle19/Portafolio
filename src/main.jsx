import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { NotFound } from "./pages/NotFound";
import { HashRouter, Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
    {/* <NotFound/> */}
  </React.StrictMode>
);
