import React from "react";
// import ComicStripSection from "./ComicStripSection";
import ModalPage from "./ModalPage";
import Navbar from "./Navbar";
import TenthSection from "./TenthSection";
import TwelveSection from "./TwelveSection";
import Footer from "./Footer";
import SectionA from "./SectionA";
import { Typography } from "@mui/material";
import pic1 from "../assests/councellingprocess.jpg";

function Homepage(props) {
  return (
    <div>
      <Navbar />
      <SectionA />
      <TenthSection />
      <TwelveSection />
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
      </div>
      <ModalPage />
      <Footer />
    </div>
  );
}

export default Homepage;
