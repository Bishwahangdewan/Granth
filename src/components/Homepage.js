import React from "react";
import ModalPage from "./ModalPage";
import Section1 from "./Section1";
import TenthSection from "./TenthSection";
import TwelveSection from "./TwelveSection";

function Homepage(props) {
  return (
    <div style={{ marginTop: 10 }}>
      <Section1 />
      <TenthSection />
      <TwelveSection />
      <ModalPage />
    </div>
  );
}

export default Homepage;
