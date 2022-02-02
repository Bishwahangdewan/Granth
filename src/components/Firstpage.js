import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { UserContext } from "./StateMan";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Businesspage from "./Businesspage";
import Aboutpage from "./Aboutpage";
import Counsellingpage from "./Counsellingpage";
import Planningpage from "./Planningpage";
import Footer from "./Footer";
import Workpage from "./Workpage";

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

const Firstpage = (props) => {
  const { HomeS, BusinessS, AboutS, CounsellingS, PlanningS, HworkS } =
    useContext(UserContext);
  const [Home] = HomeS;
  const [Counselling] = CounsellingS;
  const [Planning] = PlanningS;
  const [Hwork] = HworkS;
  const [Business] = BusinessS;
  const [About] = AboutS;

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {Home ? <Homepage /> : null}
      {Counselling ? <Counsellingpage /> : null}
      {Planning ? <Planningpage /> : null}
      {Hwork ? <Workpage /> : null}
      {Business ? <Businesspage /> : null}
      {About ? <Aboutpage /> : null}
      <Footer />
    </ThemeProvider>
  );
};

export default Firstpage;
