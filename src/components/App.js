import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "../assests/styles.css";
import Firstpage from "./Firstpage";
import { UserContext } from "./StateMan";

function App(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize, setScreenSize] = screenSizeS;
  useEffect(() => {
    chkScreenSize();
  });

  const chkScreenSize = () => {
    if (window.innerWidth < 600) {
      setScreenSize(true);
    } else {
      setScreenSize(false);
    }
  };
  window.addEventListener("resize", () => Resize());
  const Resize = () => {
    if (window.innerWidth < 600) setScreenSize(true);
    else setScreenSize(false);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <Firstpage />;<div style={{ display: "none" }}>{screenSize}</div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
