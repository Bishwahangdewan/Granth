import React, { useContext } from "react";
import { Typography, Button, Box } from "@mui/material";
import { UserContext } from "./StateMan";
import slider1 from "../assests/slider1.jpg";
import { ShowcaseContainer, ShowcaseInner, SubHeading, Heading, PrimaryButton, SecondaryButton } from '../styles/SectionA';

import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

function SectionA(props) {
  const { modalS, eighttenS, eleventwelveS, screenSizeS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [eightten, setEightten] = eighttenS;
  const [eleventwelve, setEleventwelve] = eleventwelveS;
  const [screenSize] = screenSizeS;

  return (
    /*<div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "50%", marginTop: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            marginLeft: 100,
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: 100 }}>
            <hr />
          </div>
          <div style={{ marginLeft: 10 }}>
            <Typography> CAREER COUNSELLING </Typography>
          </div>
        </div>
        {screenSize ? (
          <div
            style={{
              width: 300,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              style={{
                color: " #B3864D",
                fontSize: "16px",
                fontFamily: ["Playfair Display SC", "serif"],
              }}
            >
              LET'S CHANGE HOW AND WHY YOU WORK
            </Typography>
          </div>
        ) : (
          <div
            style={{
              width: 600,
              marginLeft: 200,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              style={{
                color: " #B3864D",
                fontSize: "76px",
                fontFamily: ["Playfair Display SC", "serif"],
              }}
            >
              LET'S CHANGE HOW AND WHY YOU WORK
            </Typography>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "white",
              width: 250,
              paddingBlock: 15,
              margin: 10,
              color: "#fccc14",
              marginLeft: 20,
              border: "1px solid black",
              borderRadius: 30,
              fontWeight: "bold",
            }}
            onClick={() => {
              setEleventwelve(true);
              setModal(true);
            }}
          >
            Book For 11th-12th
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img src={slider1} height="500px" width="600px" alt="" />
      </div>
      <div style={{ display: "none" }}>{(modal, eightten, eleventwelve)}</div>
    </div>
  );*/


    <ShowcaseContainer>
      <ShowcaseInner>
        <Box sx={{ width: '50%', pt: '5%' }}>
          <Box sx={{
            mr: '-20%',
            ml: '20%',
            position: 'relative',
            zIndex: 2
          }}>
            <SubHeading>Career Counselling</SubHeading>
            <Heading>Let's Change How and Why you Work</Heading>

            <Box sx={{
              pt: '10%',
              display: 'flex',
            }}>
              <PrimaryButton>
                <Box component="span">Face to Face Counselling</Box>
                <KeyboardTabIcon sx={{ ml: '10px' }}></KeyboardTabIcon>
              </PrimaryButton>

              <SecondaryButton>
                <Box component="span">Online Counselling</Box>
                <KeyboardTabIcon sx={{ ml: '10px' }}></KeyboardTabIcon>
              </SecondaryButton>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: '50%' }}>
          <Box sx={{
            position: 'relative',
            zIndex: 1
          }}>
            <img src="https://lycka.bold-themes.com/classy/wp-content/uploads/sites/5/2022/01/hero_home_02.jpg"
              alt="showcase" style={{ width: '100%' }} />
          </Box>
        </Box>
      </ShowcaseInner>
    </ShowcaseContainer >
  )
}

export default SectionA;
