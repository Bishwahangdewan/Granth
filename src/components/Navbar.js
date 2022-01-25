import React, { useState, useContext, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { UserContext } from "./StateMan";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { HomeS, BusinessS, AboutS } = useContext(UserContext);
  const [Home, setHome] = HomeS;
  const [Business, setBusiness] = BusinessS;
  const [About, setAbout] = AboutS;

  window.addEventListener("resize", () => Resize());
  const Resize = () => {
    if (window.innerWidth < 600) setDropdown(true);
    else setDropdown(false);
  };

  useEffect(() => {
    if (window.innerWidth < 600) setDropdown(true);
    else setDropdown(false);
  }, []);
  return (
    <div>
      <header className="header">
        <div
          style={{
            marginLeft: "5%",
            display: "flex",
            // border: "2px solid red",
          }}
        >
          <img
            src="https://idreamcareer.com/wp-content/uploads/2021/08/small-logo-1.webp"
            height="60px"
            width="80px"
            alt=""
          />
        </div>
        <div
          style={{
            display: dropdown ? "flex" : "none",
            marginRight: "5%",
            marginTop: 10,
          }}
          onClick={() => setClick(!click)}
        >
          <DensityMediumIcon />
        </div>
        <div
          style={{
            display: dropdown ? "none" : "flex",
            flexDirection: "row",
            marginRight: "3%",
            flexWrap: "wrap",
            // border: "2px solid red",
          }}
        >
          <div
            className="h1"
            onClick={() => {
              setBusiness(false);
              setHome(true);
              setAbout(false);
            }}
          >
            <Typography style={{ color: Home ? "blue" : "black" }}>
              Home
            </Typography>
          </div>
          <div
            className="h1"
            onClick={async () => {
              await setBusiness(false);
              await setHome(true);
              await setAbout(false);
              await document.querySelector("#tenthSection").scrollIntoView();
            }}
          >
            <Typography>9th-10th</Typography>
          </div>
          <div
            className="h1"
            onClick={async () => {
              await setBusiness(false);
              await setHome(true);
              await setAbout(false);
              await document.querySelector("#twelveSection").scrollIntoView();
            }}
          >
            <Typography>11th-12th</Typography>
          </div>
          <div className="h1">
            <Typography>Undergraduate</Typography>
          </div>
          <div
            className="h1"
            onClick={() => {
              setBusiness(true);
              setHome(false);
              setAbout(false);
            }}
          >
            <Typography style={{ color: Business ? "blue" : "black" }}>
              Business
            </Typography>
          </div>
          <div
            className="h1"
            onClick={() => {
              setAbout(true);
              setBusiness(false);
              setHome(false);
            }}
          >
            <Typography style={{ color: About ? "blue" : "black" }}>
              About
            </Typography>
          </div>
          <div className="h1">
            <PhoneIcon />
          </div>
          <div style={{ margin: 15 }}>
            <Button variant="contained" size="large">
              Book Now
            </Button>
          </div>
        </div>
      </header>
      <div
        style={{
          display: click ? "flex" : "none",
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <div
          className="h1"
          onClick={() => {
            setBusiness(false);
            setHome(true);
            setAbout(false);
            setClick(false);
          }}
        >
          <Typography style={{ color: Home ? "blue" : "black" }}>
            Home
          </Typography>
        </div>
        <div
          className="h1"
          onClick={async () => {
            await setBusiness(false);
            await setHome(true);
            await setAbout(false);
            await document.querySelector("#tenthSection").scrollIntoView();
            setClick(false);
          }}
        >
          <Typography>9th-10th</Typography>
        </div>
        <div
          className="h1"
          onClick={async () => {
            await setBusiness(false);
            await setHome(true);
            await setAbout(false);
            await document.querySelector("#twelveSection").scrollIntoView();
            setClick(false);
          }}
        >
          <Typography>11th-12th</Typography>
        </div>
        <div className="h1">
          <Typography>Undergraduate</Typography>
        </div>
        <div
          className="h1"
          onClick={() => {
            setBusiness(true);
            setHome(false);
            setAbout(false);
            setClick(false);
          }}
        >
          <Typography style={{ color: Business ? "blue" : "black" }}>
            Business
          </Typography>
        </div>
        <div
          className="h1"
          onClick={() => {
            setAbout(true);
            setBusiness(false);
            setHome(false);
            setClick(false);
          }}
        >
          <Typography style={{ color: About ? "blue" : "black" }}>
            About
          </Typography>
        </div>
        <div style={{ margin: 15 }}>
          <Button variant="contained" size="large">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
