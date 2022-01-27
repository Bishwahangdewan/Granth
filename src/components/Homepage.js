import React from "react";
import ComicStripSection from "./ComicStripSection";
import ModalPage from "./ModalPage";
import Section1 from "./Section1";

function Homepage(props) {
  return (
    <div style={{ marginTop: 10 }}>
      <Section1 />
      {/* <TenthSection />
      <TwelveSection /> */}
      <ComicStripSection />
      <ModalPage />
    </div>
  );
}

export default Homepage;
