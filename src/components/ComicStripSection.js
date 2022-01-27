import React from "react";
import { Typography } from "@mui/material";
import comicImage from "../assests/comicImage.JPG";

function ComicStripSection(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // border: "2px solid red",
        margin: 15,
        marginTop: 50,
        flexWrap: "wrap",
        padding: 15,
      }}
      id="tenthSection"
    >
      <div
        style={{
          width: 500,
          margin: 25,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography style={{ marginTop: 10 }}>
          Granth offers plethora of career opportunities to choose from.
          However, before choosing a career goal one must understand their
          strengths and weaknesses, employment suitability, whether one holds
          the required skills, nature and behaviour and many more such aspects.
        </Typography>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img src={comicImage} height="400px" width="400px" alt="" />
      </div>
    </div>
  );
}

export default ComicStripSection;
