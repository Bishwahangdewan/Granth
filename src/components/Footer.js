import { Button, MenuItem, TextField, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer(props) {
  const [Interest, setInterest] = useState("none");
  return (
    <div style={{ backgroundColor: "#ffde5e" }}>
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
            width: 400,
            // , border: "2px solid red"
          }}
        >
          <Typography variant="h6">About Us</Typography>
          <Typography>
            Ad exercitation et adipisicing excepteur esse sunt veniam voluptate
            labore sint.
          </Typography>
        </div>
        <div
          style={{
            width: 400,
            //  border: "2px solid red"
          }}
        >
          <Typography variant="h6">Contact Us</Typography>
          <div style={{ padding: 5 }}>
            <div style={{ display: "flex", padding: 5 }}>
              <PhoneEnabledIcon />
              <Typography style={{ marginLeft: 5 }}> +91-9895125225</Typography>
            </div>
            <div style={{ display: "flex", padding: 5 }}>
              <MailIcon />
              <Typography style={{ marginLeft: 5 }}>
                {" "}
                support@granth.com
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                placeholder="Email"
                style={{ width: "60%", marginTop: 5, color: "red" }}
              />
              <TextField
                placeholder="Phone number"
                style={{ width: "60%", marginTop: 5 }}
              />
              <TextField
                select
                value={Interest}
                onChange={(v) => setInterest(v.target.value)}
                InputProps={{
                  style: {
                    color: Interest === "none" ? "#b18d27" : "black",
                    width: "60%",
                    marginTop: 5,
                  },
                }}
              >
                <MenuItem value="none" disabled style={{ color: "red" }}>
                  Interested in
                </MenuItem>
                <MenuItem value="Career Counselling">
                  Career Counselling
                </MenuItem>
                <MenuItem value="Career Planning">Career Planning</MenuItem>
                <MenuItem value="Study Abroad">Study Abroad</MenuItem>
              </TextField>
              <Button
                variant="contained"
                style={{
                  width: "30%",
                  backgroundColor: "#fccc14",
                  color: "#5b5c5c",
                  padding: 10,
                  marginTop: 5,
                  marginLeft: "15%",
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 400,
            // border: "2px solid red"
          }}
        >
          <Typography variant="h6">Social | Partners | Carrers in</Typography>
          <div style={{ display: "flex", padding: 10 }}>
            <FacebookIcon style={{ marginLeft: 8, fontSize: 40 }} />
            <TwitterIcon style={{ marginLeft: 8, fontSize: 40 }} />
            <InstagramIcon style={{ marginLeft: 8, fontSize: 40 }} />
            <YouTubeIcon style={{ marginLeft: 8, fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
