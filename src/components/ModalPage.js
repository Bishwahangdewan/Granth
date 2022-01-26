import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "./StateMan";

function ModalPage(props) {
  const { modalS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [classx, setClassx] = useState("");
  return (
    <div>
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
            padding: 10,
            paddingInline: 10,
            // border: "2px solid red",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // flexWrap: "wrap",
            width: "55%",
            borderRadius: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              // border: "2px solid red",
              padding: 10,
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bolder",
                color: "#5b5c5c",
              }}
            >
              Book a Free Session
            </Typography>
            <Button
              onClick={() => setModal(false)}
              style={{
                color: "black",
                position: "absolute",
                left: "70%",
                // border: "2px solid red",
              }}
            >
              <CloseIcon />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Full Name
              </InputLabel>
              <TextField
                placeholder="Full Name"
                variant="outlined"
                style={{ margin: 10 }}
              />
            </div>
            <div>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Age
              </InputLabel>
              <TextField
                placeholder="Age"
                variant="outlined"
                style={{ margin: 10 }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
            }}
          >
            <div>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Email Id
              </InputLabel>
              <TextField
                placeholder="Enter Email Id"
                variant="outlined"
                style={{ margin: 10 }}
              />
            </div>
            <div>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Phone Number
              </InputLabel>
              <TextField
                placeholder="Phone Number"
                variant="outlined"
                inputProps={{ inputMode: "numeric" }}
                style={{ margin: 10 }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10%",
              // border: "2px solid red",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                width: "82%",
              }}
            >
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Class
              </InputLabel>
              <Select
                value={classx}
                onChange={(v) => setClassx(v.target.value)}
                style={{ margin: 10, width: "83%" }}
              >
                <MenuItem value={6}>6th</MenuItem>
                <MenuItem value={7}>7th</MenuItem>
                <MenuItem value={8}>8th</MenuItem>
                <MenuItem value={9}>9th</MenuItem>
                <MenuItem value={10}>10th</MenuItem>
                <MenuItem value={11}>11th</MenuItem>
                <MenuItem value={12}>12th</MenuItem>
              </Select>
            </div>
          </div>
          <div
            style={{
              // border: "2px solid red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "64%" }}>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Comment
              </InputLabel>
              <TextField
                placeholder="Comment"
                variant="outlined"
                multiline
                rows={4}
                style={{ margin: 10, width: "96%" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              variant="contained"
              style={{ width: "40%", backgroundColor: "#fccc14", padding: 10 }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPage;
