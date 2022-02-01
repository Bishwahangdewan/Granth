import React from "react";
import { Typography } from "@mui/material";
import comic1 from "../assests/Comic 1-a.jpg";
import comic2 from "../assests/comic 1-b.jpg";
import comic3 from "../assests/comic 1-c.jpg";
import comic4 from "../assests/comic 1-d.jpg";

function ComicStripSection(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // border: "2px solid red",
        // margin: 15,
        marginTop: 80,
        flexWrap: "wrap",
        // padding: 15,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={comic1} height="280px" width="380px" alt="" />
        <img src={comic3} height="280px" width="380px" alt="" />
      </div>
      <div
        style={{
          width: 500,
          margin: 25,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography style={{ fontSize: 30 }}>
          Granth offers plethora of career opportunities to choose from.
          However, before choosing a career goal one must understand their
          strengths and weaknesses, employment suitability, whether one holds
          the required skills, nature and behaviour and many more such aspects.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={comic2} height="280px" width="380px" alt="" />
        <img src={comic4} height="280px" width="380px" alt="" />
      </div>
    </div>
  );
}

export default ComicStripSection;
