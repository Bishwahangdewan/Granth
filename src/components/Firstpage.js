import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { UserContext } from "./StateMan";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Businesspage from "./Businesspage";
import Aboutpage from "./Aboutpage";
import Counsellingpage from "./Counsellingpage";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 14,
    h4: {
      color: "#fccc14",
    },
    body1: {
      color: "#5b5c5c",
    },
    body2: {
      color: "#5b5c5c",
    },
  },
  // palette: {
  //   primary: "red",
  // },
});

const Firstpage = (props) => {
  const { HomeS, BusinessS, AboutS, CounsellingS } = useContext(UserContext);
  const [Home] = HomeS;
  const [Counselling] = CounsellingS;
  const [Business] = BusinessS;
  const [About] = AboutS;

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {Home ? <Homepage /> : null}
      {Counselling ? <Counsellingpage /> : null}
      {Business ? <Businesspage /> : null}
      {About ? <Aboutpage /> : null}
    </ThemeProvider>
  );
};

export default Firstpage;
