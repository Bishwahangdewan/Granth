import React from "react";
import { Typography } from "@mui/material";

function TwelveSection(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        margin: 15,
        marginTop: 30,
        padding: 15,
      }}
      id="twelveSection"
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          src="https://idreamcareer.com/wp-content/uploads/2021/08/career-counselling.webp"
          height="400px"
          width="400px"
          alt=""
        />
      </div>
      <div
        style={{
          width: 500,
          margin: 25,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Do pariatur irure commodo aliqua labore in mollit nulla voluptate
          commodo proident.
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          Deserunt ut enim eu voluptate enim in eu elit sint magna laborum
          mollit eu ipsum. Laboris ipsum amet veniam pariatur consectetur nulla
          id consequat aute Lorem proident. Laborum velit incididunt aute
          exercitation deserunt esse. Lorem elit est eiusmod non eiusmod laborum
          adipisicing. Quis dolor dolor et id excepteur aute esse cillum qui.
          Proident aute excepteur do sit Lorem consequat laborum.
        </Typography>
      </div>
    </div>
  );
}

export default TwelveSection;
