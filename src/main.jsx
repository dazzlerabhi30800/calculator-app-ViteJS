import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReducerContextProvider } from "./Context/ReducerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReducerContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReducerContextProvider>
);
