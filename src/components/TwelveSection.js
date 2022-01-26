import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";

function TwelveSection(props) {
  const { modalS } = useContext(UserContext);
  const [modal, setModal] = modalS;
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
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
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
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#fccc14",
            paddingInline: 87,
            paddingBlock: 15,
            margin: 10,
            color: "#5b5c5c",
          }}
          onClick={() => setModal(true)}
        >
          Book Now For 11th-12th
        </Button>
      </div>
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default TwelveSection;
