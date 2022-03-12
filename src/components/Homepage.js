import React from "react";
// import ComicStripSection from "./ComicStripSection";
import ModalPage from "./ModalPage";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import TenthSection from "./TenthSection";
import TwelveSection from "./TwelveSection";
import Footer from "./Footer";

function Homepage(props) {
  return (
    <div>
      <Navbar />
      <Section1 />
      {/* <ComicStripSection /> */}
      <TenthSection />
      <TwelveSection />
      <ModalPage />
      <Footer />
    </div>
  );
}

export default Homepage;
