import React, { useState } from "react";
export const UserContext = React.createContext("");

const StateMan = ({ subPages }) => {
  const [Home, setHome] = useState(true);
  const [Counselling, setCounselling] = useState(false);
  const [Planning, setPlanning] = useState(false);
  const [Hwork, setHwork] = useState(false);
  const [Business, setBusiness] = useState(false);
  const [About, setAbout] = useState(false);
  const [modal, setModal] = useState(false);
  const [screenSize, setScreenSize] = useState(false);
  const [eightten, setEightten] = useState(false);
  const [eleventwelve, setEleventwelve] = useState(false);
  return (
    <UserContext.Provider
      value={{
        HomeS: [Home, setHome],
        BusinessS: [Business, setBusiness],
        AboutS: [About, setAbout],
        modalS: [modal, setModal],
        CounsellingS: [Counselling, setCounselling],
        PlanningS: [Planning, setPlanning],
        HworkS: [Hwork, setHwork],
        screenSizeS: [screenSize, setScreenSize],
        eighttenS: [eightten, setEightten],
        eleventwelveS: [eleventwelve, setEleventwelve],
      }}
    >
      {subPages}
    </UserContext.Provider>
  );
};

export default StateMan;
