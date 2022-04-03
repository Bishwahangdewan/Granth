import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";
import tenthimg from "../assests/img9-10.png";

function TenthSection(props) {
  const { modalS, screenSizeS, eighttenS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [screenSize] = screenSizeS;
  const [eightten, setEightten] = eighttenS;

  return (
    <div style={{ marginTop: 100 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          marginLeft: 150,
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: 100 }}>
          <hr />
        </div>
        <div style={{ marginLeft: 10 }}>
          <Typography style={{ color: "black" }}> Class 9th-10th </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          // border: "2px solid red",
          margin: 15,

          flexWrap: "wrap",
          padding: 8,
        }}
        id="tenthSection"
      >
        {screenSize ? null : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src={tenthimg} height="400px" width="500px" alt="" />
          </div>
        )}
        <div
          style={{
            width: 550,
            margin: 25,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex", marginTop: 10 }}>
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
                Are you geared up to choose the right subject?
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
                Do you know the right skill set for you?
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
                Can you create the right concoction of subjects?
              </Typography>
            </div>
            <Typography
              style={{
                marginTop: 10,
                fontSize: 26.5,
                fontFamily: ["Caveat", "cursive"],
              }}
            >
              Don’t worry it’s not mind-boggling.... Leave it to us
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
                We’ll help you understand your interests, skills, abilities
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
                Guide you through various career opportunities that can be
                pursued
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
                Lay the foundation of picking up the right goals according to
                your personality
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
                Answer all your inquisitiveness
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "white",
                width: 250,
                paddingBlock: 15,
                margin: 10,
                color: "#fccc14",
                marginLeft: 0,
                border: "1px solid black",
                borderRadius: 30,
                fontWeight: "bold",
              }}
              onClick={() => {
                setEightten(true);
                setModal(true);
              }}
            >
              Book Now For 9th-10th
            </Button>
          </div>
        </div>
        {screenSize ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src={tenthimg} height="500px" width="500px" alt="" />
          </div>
        ) : null}
        <div style={{ display: "none" }}>{(modal, eightten)}</div>
      </div>
    </div>
  );
}

export default TenthSection;
