//deps
import React from "react";
import ReactDOM from "react-dom/client";

//app component
import App from "./App.tsx";

//styles
import "./assets/styles/index.css";
import "./assets/styles/_reset.css";

//providers
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

//redux store
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
