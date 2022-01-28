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
          Class 11 - Class 12
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          So Kids, are you set to take the correct group of subjects? How do you
          plan to select your optional subjects? Do you need some extra aid to
          pursue your passion/hobbies?
        </Typography>
        <Typography>
          Let’s talk and hear you out.... What is it that you want to do?
        </Typography>
        <Typography>
          Get the right advice from the experts who can guide you make an
          informative decision
        </Typography>
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
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#fccc14",
            width: 350,
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
