import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";
import tenthimg from "../assests/img9-10.png";

function TenthSection(props) {
  const { modalS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // border: "2px solid red",
        margin: 15,
        marginTop: 60,
        flexWrap: "wrap",
        padding: 8,
      }}
      id="tenthSection"
    >
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
          Class 9 - Class 10
        </Typography>
        <div>
          <Typography style={{ marginTop: 10 }}>
            Are you geared up to choose the right subject?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            Do you know the right skill set for you?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            Can you create the right concoction of subjects?
          </Typography>
          <Typography style={{ marginTop: 3 }}>
            Don’t worry it’s not mind-boggling
          </Typography>
          <Typography style={{ marginTop: 3 }}>Leave it to us......</Typography>
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
              We’ll help you understand your area of interest
            </Typography>
          </li>
          <li>
            <Typography>
              Guide you through various career opportunities that can be pursued
            </Typography>
          </li>
          <li>
            <Typography>
              Lay the foundation of picking up the right goals according to your
              personality
            </Typography>
          </li>
          <li>
            <Typography>Answer all your inquisitiveness</Typography>
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
            Book Now For 9th-10th
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img src={tenthimg} height="400px" width="500px" alt="" />
      </div>
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default TenthSection;
