import { Button, MenuItem, TextField, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState, useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { UserContext } from "./StateMan";
import firebase from "../Firebase";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Footer(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Interest, setInterest] = useState("none");

  const [openAlert, setopenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopenAlert(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const db = firebase.firestore();

  const handleSubmit = async () => {
    await db.collection("contact").add({
      email,
      number,
      Interest,
    });
    setopenAlert(true);
    setEmail("");
    setNumber("");
    setInterest("none");
  };

  return (
    <div style={{ backgroundColor: "#ffde5e", marginTop: 60 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 15,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 420,
            // border: "2px solid red",
            // padding: 10,
            textAlign: "justify",
          }}
        >
          <Typography variant="h6" style={{ textAlign: "center" }}>
            About Us
          </Typography>
          <Typography>
            Granth is a career counselling and guidance platform that helps you
            reflect on your abilities before making a career choice. With all
            the career options available it becomes overwhelming to choose the
            right career path without getting pressurised or anxious. These
            options are elucidated to personnel seeking career advice based on
            their interests or merits
          </Typography>
        </div>
        {screenSize ? (
          <div
            style={{
              width: 400,
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Typography variant="h6">Contact Us</Typography>
            <div style={{ padding: 5 }}>
              <div
                style={{
                  display: "flex",
                  padding: 5,
                  justifyContent: "center",
                }}
              >
                <PhoneEnabledIcon />
                <Typography style={{ marginLeft: 5 }}>
                  {" "}
                  +91-9389600390
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: 5,
                  justifyContent: "center",
                }}
              >
                <MailIcon />
                <Typography style={{ marginLeft: 5 }}>
                  {" "}
                  support@granth.com
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  placeholder="Email"
                  style={{ width: "100%", marginTop: 5, color: "red" }}
                  value={email}
                  onChange={(t) => {
                    setEmail(t.target.value);
                  }}
                />
                <TextField
                  placeholder="Phone number"
                  style={{ width: "100%", marginTop: 5 }}
                  value={number}
                  onChange={(t) => {
                    setNumber(t.target.value);
                  }}
                />
                <TextField
                  select
                  value={Interest}
                  onChange={(v) => setInterest(v.target.value)}
                  InputProps={{
                    style: {
                      color: Interest === "none" ? "#b18d27" : "black",
                      width: "100%",
                      marginTop: 5,
                    },
                  }}
                >
                  <MenuItem value="none" disabled style={{ color: "red" }}>
                    Interested in
                  </MenuItem>
                  <MenuItem value="Career Counselling">
                    Career Assessment
                  </MenuItem>
                  <MenuItem value="Career Planning">Career Planning</MenuItem>
                  <MenuItem value="Study Abroad">Study Abroad</MenuItem>
                  <MenuItem value="Business Collaboration">
                    Business Collaboration
                  </MenuItem>
                </TextField>
                <Button
                  variant="contained"
                  style={{
                    width: "30%",
                    backgroundColor: "#fccc14",
                    color: "#5b5c5c",
                    padding: 10,
                    marginTop: 5,
                    marginLeft: "35%",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: 400,
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              // marginLeft: 70,
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Contact Us</Typography>
            <div style={{ padding: 5 }}>
              <div
                style={{
                  display: "flex",
                  padding: 5,
                  justifyContent: "center",
                }}
              >
                <PhoneEnabledIcon />
                <Typography style={{ marginLeft: 5 }}>
                  {" "}
                  +91-9389600390
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: 5,
                  justifyContent: "center",
                }}
              >
                <MailIcon />
                <Typography style={{ marginLeft: 5 }}>
                  {" "}
                  support@granth.com
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // border: "2px solid red",
                }}
              >
                <TextField
                  placeholder="Email"
                  style={{ width: "100%", marginTop: 5, color: "red" }}
                  value={email}
                  onChange={(t) => {
                    setEmail(t.target.value);
                  }}
                />
                <TextField
                  placeholder="Phone number"
                  style={{ width: "100%", marginTop: 5 }}
                  value={number}
                  onChange={(t) => {
                    setNumber(t.target.value);
                  }}
                />
                <TextField
                  select
                  value={Interest}
                  onChange={(v) => setInterest(v.target.value)}
                  InputProps={{
                    style: {
                      color: Interest === "none" ? "#b18d27" : "black",
                      width: "100%",
                      marginTop: 5,
                    },
                  }}
                >
                  <MenuItem value="none" disabled style={{ color: "red" }}>
                    Interested in
                  </MenuItem>
                  <MenuItem value="Career Counselling">
                    Career Assessment
                  </MenuItem>
                  <MenuItem value="Career Planning">Career Planning</MenuItem>
                  <MenuItem value="Study Abroad">Study Abroad</MenuItem>
                  <MenuItem value="Business Collaboration">
                    Business Collaboration
                  </MenuItem>
                </TextField>
                <Button
                  variant="contained"
                  style={{
                    width: "40%",
                    backgroundColor: "#fccc14",
                    color: "#5b5c5c",
                    padding: 10,
                    marginTop: 5,
                    marginLeft: "30%",
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            width: 400,
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Typography variant="h6">Connect Socially</Typography>
          <div style={{ display: "flex", padding: 10 }}>
            <FacebookIcon style={{ marginLeft: 15, fontSize: 45 }} />
            <TwitterIcon style={{ marginLeft: 15, fontSize: 45 }} />
            <LinkedInIcon style={{ marginLeft: 15, fontSize: 45 }} />
            <InstagramIcon style={{ marginLeft: 15, fontSize: 45 }} />
          </div>
        </div>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Submitted Successfully"
        action={action}
      />
    </div>
  );
}

export default Footer;
