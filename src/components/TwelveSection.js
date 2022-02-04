import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";
import twelveimg from "../assests/img11-12.png";

function TwelveSection(props) {
  const { modalS, screenSizeS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [screenSize] = screenSizeS;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        margin: 15,
        // marginTop: 0,
        padding: 8,
        // border: "2px solid red",
      }}
      id="twelveSection"
    >
      {screenSize ? null : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img src={twelveimg} height="400px" width="500px" alt="" />
        </div>
      )}
      <div
        style={{
          width: 500,
          margin: 25,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Class 11 - Class 12
        </Typography>
        <div>
          <Typography style={{ marginTop: 10 }}>
            So Kids, are you set to take the correct group of subjects?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            How do you plan to select your optional subjects?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            Do you need some extra aid to pursue your passion/hobbies?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            Let’s talk and hear you out....
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            What is it that you want to do?
          </Typography>
          <Typography
            style={{
              marginTop: 5,
              color: "#fccc14",
              fontSize: 19,
              fontWeight: "bolder",
            }}
          >
            Get the right advice from the experts who can guide you make an
            informative decision
          </Typography>
        </div>
        <ul>
          <li>
            <Typography>
              We’ll help you see through the choices that you make
            </Typography>
          </li>
          <li>
            <Typography>
              Know the personality group you fall into in terms of skill sets,
              ambitions and aspirations
            </Typography>
          </li>
          <li>
            <Typography>
              You can consider other vocational courses along with regular
              subjects
            </Typography>
          </li>
          <li>
            <Typography>
              You can consider other vocational courses along with regular
              subjects
            </Typography>
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#fccc14",
              width: 350,
              paddingBlock: 15,
              margin: 10,
              color: "#5b5c5c",
              marginLeft: 0,
            }}
            onClick={() => setModal(true)}
          >
            Book Now For 11th-12th
          </Button>
        </div>
      </div>
      {screenSize ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img src={twelveimg} height="500px" width="500px" alt="" />
        </div>
      ) : null}
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default TwelveSection;
