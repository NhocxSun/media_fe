import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "src/index.css";
import "src/grid.css";
import { App } from "src/App";
import reportWebVitals from "src/reportWebVitals";
import { persistor, store } from "src/redux";
import { ThemeProvider } from "styled-components";
import { theme } from "src/utils";

ReactDOM.render(
 // <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>,
  //</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
