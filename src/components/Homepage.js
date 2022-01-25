import React, { useState } from "react";
import Section1 from "./Section1";
import TenthSection from "./TenthSection";
import TwelveSection from "./TwelveSection";
import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
function Homepage(props) {
  const [modal, setModal] = useState(false);
  const [classx, setClassx] = useState("");
  return (
    <div style={{ marginTop: 10 }}>
      <Section1 />
      <TenthSection />
      <TwelveSection />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 50,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          size="large"
          style={{ margin: 20 }}
          onClick={() => setModal(true)}
        >
          Book Now
        </Button>
        <Button variant="contained" size="large" style={{ margin: 20 }}>
          Book Now
        </Button>
      </div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: 50,
            paddingInline: 80,
            // border: "2px solid red",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            width: "30%",
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            style={{ margin: 10 }}
          />
          <TextField label="Age" variant="outlined" style={{ margin: 10 }} />
          <InputLabel style={{ margin: 10, marginBottom: 0 }}>Class</InputLabel>
          <Select
            label="Class"
            value={classx}
            onChange={(v) => setClassx(v.target.value)}
            style={{ margin: 10, marginTop: 0 }}
          >
            <MenuItem value={6}>6th</MenuItem>
            <MenuItem value={7}>7th</MenuItem>
            <MenuItem value={8}>8th</MenuItem>
            <MenuItem value={9}>9th</MenuItem>
            <MenuItem value={10}>10th</MenuItem>
            <MenuItem value={11}>11th</MenuItem>
            <MenuItem value={12}>12th</MenuItem>
          </Select>

          <TextField
            label="Email ID"
            variant="outlined"
            style={{ margin: 10 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            inputProps={{ inputMode: "numeric" }}
            style={{ margin: 10 }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            style={{ margin: 10 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button variant="contained" style={{ width: "50%" }}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Homepage;
