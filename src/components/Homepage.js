import React from "react";
// import ComicStripSection from "./ComicStripSection";
import ModalPage from "./ModalPage";
import Navbar from "./Navbar";
import TenthSection from "./TenthSection";
import TwelveSection from "./TwelveSection";
import Testimonial from './Testimonial';
import Footer from "./Footer";
import SectionA from "./SectionA";
import { Typography } from "@mui/material";
import pic1 from "../assests/councellingprocess.jpg";

import Box from '@mui/material/Box';

function Homepage(props) {

  /*
  <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 100,
          flexWrap: "wrap",
        }}
      >
        <Typography style={{ fontSize: 45, color: "black" }}>
          Councelling Process
        </Typography>
        <img src={pic1} height="20%" width="80%" alt="" />
      </div>*/
  return (
    <div>
      <Navbar />
      <SectionA />
      <Box sx={{
        backgroundColor: "#F5F1F0"
      }}>
        <TenthSection />
        <TwelveSection />
      </Box>
      <ModalPage />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Homepage;
