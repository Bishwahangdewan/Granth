import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import UserContext from "./components/StateMan";

ReactDom.render(
  <React.StrictMode>
    <UserContext subPages={<App />} />
  </React.StrictMode>,
  document.getElementById("root")
);
