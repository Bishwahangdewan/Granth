import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";
import twelveimg from "../assests/img11-12.png";

function TwelveSection(props) {
  const { modalS, screenSizeS, eleventwelveS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [screenSize] = screenSizeS;
  const [eleventwelve, setEleventwelve] = eleventwelveS;
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
          width: 560,
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
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 10, marginLeft: 6 }}>
              So, have you decided upon your majors?
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 3,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 3, marginLeft: 6 }}>
              Do you know what competitive exams can you give?
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 3,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 3, marginLeft: 6 }}>
              Are you skilled for the university’s admission process?
            </Typography>
          </div>
          <Typography
            style={{
              marginTop: 10,
              fontSize: 26.5,
              fontFamily: ["Caveat", "cursive"],
            }}
          >
            Let’s talk and hear you out…. What is it that you want to do?
          </Typography>

          <Typography
            style={{
              marginTop: 12,
              color: "#fccc14",
              fontSize: 19,
              fontWeight: "bolder",
              marginBottom: 5,
            }}
          >
            Get the right advice from the experts who can guide you make an
            informative decision
          </Typography>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 10,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 10, marginLeft: 6 }}>
              We’ll help you see through the choices that you make
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 3,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 3, marginLeft: 6 }}>
              Know the personality group you fall into in terms of skill sets,
              ambitions and aspirations
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 3,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 3, marginLeft: 6 }}>
              You can consider other vocational courses along with regular
              subjects
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                marginTop: 3,
                marginLeft: 15,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              #
            </Typography>
            <Typography style={{ marginTop: 3, marginLeft: 6 }}>
              There are many parallel courses that can make you college ready
            </Typography>
          </div>
        </div>
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
            onClick={() => {
              setEleventwelve(true);
              setModal(true);
            }}
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
      <div style={{ display: "none" }}>{(modal, eleventwelve)}</div>
    </div>
  );
}

export default TwelveSection;
