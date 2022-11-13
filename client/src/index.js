import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";
import AddFavProvider from "./AuthContext/Fav";

const rootDOM = document.getElementById("root");
const root = ReactDOM.createRoot(rootDOM);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <AddFavProvider>
          <App />
        </AddFavProvider>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
