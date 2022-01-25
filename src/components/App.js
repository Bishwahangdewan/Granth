import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../assests/styles.css";
import Firstpage from "./Firstpage";

function App(props) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Firstpage />;
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
