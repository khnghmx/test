import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider, createStore } from "jotai";
import "./index.css";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
