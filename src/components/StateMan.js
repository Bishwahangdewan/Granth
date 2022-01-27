import React, { useState } from "react";
export const UserContext = React.createContext("");

const StateMan = ({ subPages }) => {
  const [Home, setHome] = useState(true);
  const [Counselling, setCounselling] = useState(false);
  const [Business, setBusiness] = useState(false);
  const [About, setAbout] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <UserContext.Provider
      value={{
        HomeS: [Home, setHome],
        BusinessS: [Business, setBusiness],
        AboutS: [About, setAbout],
        modalS: [modal, setModal],
        CounsellingS: [Counselling, setCounselling],
      }}
    >
      {subPages}
    </UserContext.Provider>
  );
};

export default StateMan;
