import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { pokemonsReducer } from "./reducers/pokemons.js";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { logger } from "./middlewares/index.js";
import { thunk } from "redux-thunk";

import "antd/dist/reset.css";

const composedAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const composedEnhancers = composedAlt(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
