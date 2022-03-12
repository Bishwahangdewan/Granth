import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assests/styles.css";
import Aboutpage from "./Aboutpage";
import Businesspage from "./Businesspage";
import Homepage from "./Homepage";
import Planningpage from "./Planningpage";
import { UserContext } from "./StateMan";
import Workpage from "./Workpage";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

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

  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 14,
      h4: {
        color: "#fccc14",
      },
      h5: {
        color: "#5b5c5c",
      },
      body1: {
        color: "#5b5c5c",
      },
      body2: {
        color: "#5b5c5c",
      },
      h6: {
        color: "black",
        fontWeight: "bolder",
      },
    },
    // palette: {
    //   primary: "red",
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Homepage} />
          <Route path="/CareerPlanning" component={Planningpage} />
          <Route path="/HowItWorks" component={Workpage} />
          <Route path="/Buisness" component={Businesspage} />
          <Route path="/About" component={Aboutpage} />
          <div style={{ display: "none" }}>{screenSize}</div>
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
