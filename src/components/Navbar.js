import React, { useState, useContext, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { UserContext } from "./StateMan";
import TsptPNG from "../assests/TsptPNG.png";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { HomeS, CounsellingS, BusinessS, AboutS, modalS } =
    useContext(UserContext);
  const [Home, setHome] = HomeS;
  const [Counselling, setCounselling] = CounsellingS;
  const [Business, setBusiness] = BusinessS;
  const [About, setAbout] = AboutS;
  const [modal, setModal] = modalS;

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
            marginLeft: "2%",
            display: "flex",
            // border: "2px solid red",
          }}
        >
          <img src={TsptPNG} height="60px" width="100%" alt="" />
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
              setCounselling(false);
            }}
          >
            <Typography
              className="h2"
              style={{ color: Home ? "#fccc14" : "#5b5c5c" }}
            >
              Home
            </Typography>
          </div>
          {/* <div
            className="h1"
            onClick={async () => {
              await setBusiness(false);
              await setHome(true);
              await setAbout(false);
              await document.querySelector("#tenthSection").scrollIntoView();
            }}
          >
            <Typography className="h2">9th-10th</Typography>
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
            <Typography className="h2">11th-12th</Typography>
          </div> */}
          <div
            className="h1"
            onClick={() => {
              setBusiness(false);
              setHome(false);
              setAbout(false);
              setCounselling(true);
            }}
          >
            <Typography
              className="h2"
              style={{ color: Counselling ? "#fccc14" : "#5b5c5c" }}
            >
              Career Counselling
            </Typography>
          </div>
          <div
            className="h1"
            onClick={() => {
              setBusiness(true);
              setHome(false);
              setAbout(false);
              setCounselling(false);
            }}
          >
            <Typography
              className="h2"
              style={{ color: Business ? "#fccc14" : "#5b5c5c" }}
            >
              Business
            </Typography>
          </div>
          <div
            className="h1"
            onClick={() => {
              setAbout(true);
              setBusiness(false);
              setHome(false);
              setCounselling(false);
            }}
          >
            <Typography
              className="h2"
              style={{
                color: About ? "#fccc14" : "#5b5c5c",
              }}
            >
              About
            </Typography>
          </div>
          <div className="h1">
            <PhoneIcon />
          </div>
          <div style={{ margin: 15 }}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#fccc14", color: "#5b5c5c" }}
              onClick={() => setModal(true)}
            >
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
            setCounselling(false);
          }}
        >
          <Typography
            className="h2"
            style={{ color: Home ? "#fccc14" : "#5b5c5c" }}
          >
            Home
          </Typography>
        </div>
        {/* <div
          className="h1"
          onClick={async () => {
            await setBusiness(false);
            await setHome(true);
            await setAbout(false);
            await document.querySelector("#tenthSection").scrollIntoView();
            setClick(false);
          }}
        >
          <Typography className="h2">9th-10th</Typography>
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
          <Typography className="h2">11th-12th</Typography>
        </div> */}
        <div
          className="h1"
          onClick={() => {
            setBusiness(false);
            setHome(false);
            setAbout(false);
            setCounselling(true);
            setClick(false);
          }}
        >
          <Typography
            className="h2"
            style={{ color: Counselling ? "#fccc14" : "#5b5c5c" }}
          >
            Career Counselling
          </Typography>
        </div>
        <div
          className="h1"
          onClick={() => {
            setBusiness(true);
            setHome(false);
            setAbout(false);
            setClick(false);
            setCounselling(false);
          }}
        >
          <Typography
            className="h2"
            style={{ color: Business ? "#fccc14" : "#5b5c5c" }}
          >
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
            setCounselling(false);
          }}
        >
          <Typography
            className="h2"
            style={{ color: About ? "#fccc14" : "#5b5c5c" }}
          >
            About
          </Typography>
        </div>
        <div style={{ margin: 15 }}>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: "#fccc14", color: "#5b5c5c" }}
            onClick={() => {
              setModal(true);
              setClick(false);
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default Navbar;
