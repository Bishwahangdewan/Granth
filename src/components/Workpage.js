import React, { useContext, useState } from "react";
import ModalPage from "./ModalPage";
import { UserContext } from "./StateMan";
import {
  Button,
  InputLabel,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
// import scene1 from "../assests/scene1.png";
// import scene2 from "../assests/scene2.png";
// import scene3 from "../assests/scene3.png";
// import scene4 from "../assests/scene4.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import firebase from "../Firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Workpage(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;
  const [openAlert, setopenAlert] = useState(false);

  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [school, setSchool] = useState("");
  const [board, setBoard] = useState("");
  const [Vname, setVName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("none");
  // const [Vage, setVAge] = useState("");
  const [Vgender, setVGender] = useState("none");
  const [email, setEmail] = useState("");
  const [Vemail, setVEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Vnumber, setVNumber] = useState("");
  const [classx, setClassx] = useState("none");
  const [Vclassx, setVClassx] = useState("none");
  const [cmnt, setCmnt] = useState("");

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
    if (name === "") {
      setVName("Enter your first name");
    }
    // if (age === "") {
    //   setVAge("Enter your age");
    // }
    if (email === "") {
      setVEmail("Enter your email id");
    }
    if (number === "") {
      setVNumber("Enter your mobile number");
    }
    if (gender === "none") {
      setVGender("Enter your gender");
    }
    if (
      name !== "" &&
      // age !== "" &&
      email !== "" &&
      number !== "" &&
      gender !== "none" &&
      // Vage === "" &&
      Vnumber === ""
    ) {
      await db.collection("workPage_data").add({
        name,
        Lname,
        age,
        email,
        number,
        school,
        board,
        gender,
        classx,
        cmnt,
      });

      setopenAlert(true);
      setName("");
      setAge("");
      setEmail("");
      setNumber("");
      setClassx("none");
      setCmnt("");
      setLName("");
      setSchool("");
      setBoard("");
      setGender("none");
      setVNumber("");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(
            "https://d33wubrfki0l68.cloudfront.net/static/media/18ffdfbe225ba547a6fcd93cba102639a48ccbe4/dots.68433c53.png"
          )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor: "#fccc14",
          marginTop: 20,
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexWrap: "wrap",
          padding: 15,
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "white",
            fontFamily: "Playfair Display SC",
            fontSize: 50,
          }}
        >
          How Does Granth Work?
        </Typography>
        {/* <Typography style={{ marginTop: 10 }}>
          We make teacher & student’s life simpler, more pleasant and more
          productive.
        </Typography> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingInline: 15,
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 10,
              fontSize: 40,
              fontFamily: ["Caveat", "cursive"],
            }}
          >
            Get your doubts cleared by us through a Pre-counselling session.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 10,
              fontSize: 40,
              fontFamily: ["Caveat", "cursive"],
            }}
          >
            Book a call with our career advisor to help you attain your desired
            goals.
          </Typography>
        </div>
        {/* <div style={{ marginTop: 30 }}>
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
        </div> */}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <div
          style={{
            padding: 10,
            paddingInline: screenSize ? 40 : 10,
            // border: "2px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "55%",
            borderRadius: 30,
            backgroundColor: "#f8f9fe",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "2px solid red",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  First Name
                </InputLabel>
              </div>
              <TextField
                placeholder="First Name"
                variant="outlined"
                value={name}
                error={Vname}
                helperText={Vname}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "") {
                    setVName("Enter your correct name");
                  } else {
                    setVName("");
                  }
                  setName(t.target.value);
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  style={{ marginBottom: 0, color: "red" }}
                ></InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 12 }}
                >
                  Last Name
                </InputLabel>
              </div>
              <TextField
                placeholder="Last Name"
                variant="outlined"
                // helperText={Vage}
                // error={Vage}
                value={Lname}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  setLName(t.target.value);
                }}
              />
            </div>
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
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Gender
                </InputLabel>
              </div>
              <TextField
                placeholder="Gender"
                variant="outlined"
                value={gender}
                error={Vgender === "none" ? "" : Vgender}
                helperText={Vgender === "none" ? "" : Vgender}
                style={{ margin: 10, width: "90%" }}
                select
                onChange={(v) => {
                  if (v.target.value === "none") {
                    setVGender("Enter your gender");
                  } else {
                    setVGender("none");
                  }
                  setGender(v.target.value);
                }}
                InputProps={{
                  style: {
                    color: classx === "none" ? "#aaaaaa" : "black",
                  },
                }}
              >
                <MenuItem value="none" disabled style={{ color: "red" }}>
                  Gender
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </div>
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  style={{ marginBottom: 0, color: "red" }}
                ></InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 12 }}
                >
                  Age
                </InputLabel>
              </div>
              <TextField
                placeholder="Age"
                variant="outlined"
                // helperText={Vage}
                // error={Vage}
                value={age}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  // if (t.target.value === "" || isNaN(t.target.value)) {
                  //   setVAge("Enter your correct age");
                  // } else {
                  //   setVAge("");
                  // }
                  setAge(t.target.value);
                }}
              />
            </div>
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
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  {" "}
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  School
                </InputLabel>
              </div>
              <TextField
                placeholder="School"
                value={school}
                variant="outlined"
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  // if (t.target.value === "" || isNaN(t.target.value)) {
                  //   setVAge("Enter your correct age");
                  // } else {
                  //   setVAge("");
                  // }
                  setSchool(t.target.value);
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "40%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  style={{ marginBottom: 0, color: "red" }}
                ></InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 12 }}
                >
                  Board
                </InputLabel>
              </div>
              <TextField
                placeholder="Board"
                variant="outlined"
                value={board}
                onChange={(t) => {
                  setBoard(t.target.value);
                }}
                style={{ margin: 10, width: "90%" }}
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
            <div
              style={{
                width: screenSize ? "100%" : "40%",
                // border: "2px solid red",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Email id
                </InputLabel>
              </div>
              <TextField
                placeholder="Enter Email Id"
                variant="outlined"
                value={email}
                helperText={Vemail}
                error={Vemail}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "") {
                    setVEmail("Enter your correct email id");
                  } else {
                    setVEmail("");
                  }
                  setEmail(t.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: screenSize ? "100%" : "40%",
                // border: "2px solid red",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel style={{ marginBottom: 0, color: "red" }}>
                  *
                </InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Phone number
                </InputLabel>
              </div>
              <TextField
                placeholder="Phone Number"
                variant="outlined"
                value={number}
                helperText={Vnumber}
                error={Vnumber}
                inputProps={{ inputMode: "numeric" }}
                style={{ margin: 10, width: "90%" }}
                onChange={(t) => {
                  if (t.target.value === "" || isNaN(t.target.value)) {
                    setVNumber("Enter your correct mobile number");
                  } else {
                    setVNumber("");
                  }
                  setNumber(t.target.value);
                }}
              />
            </div>
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
            <div
              style={{
                // border: "2px solid red",
                width: screenSize ? "100%" : "81%",
              }}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  style={{ marginBottom: 0, color: "red" }}
                ></InputLabel>
                <InputLabel
                  style={{ margin: 10, marginBottom: 0, marginLeft: 4 }}
                >
                  Class
                </InputLabel>
              </div>
              <TextField
                select
                error={Vclassx === "none" ? "" : Vclassx}
                helperText={Vclassx === "none" ? "" : Vclassx}
                value={classx}
                onChange={(v) => {
                  if (v.target.value === "none") {
                    setVClassx("Enter your class");
                  } else {
                    setVClassx("none");
                  }
                  setClassx(v.target.value);
                }}
                InputProps={{
                  style: {
                    color: classx === "none" ? "#aaaaaa" : "black",
                  },
                }}
                style={{
                  margin: 10,
                  width: screenSize ? "90%" : "95%",
                }}
              >
                <MenuItem value="none" disabled style={{ color: "red" }}>
                  Enter your class
                </MenuItem>
                <MenuItem value={6}>6th</MenuItem>
                <MenuItem value={7}>7th</MenuItem>
                <MenuItem value={8}>8th</MenuItem>
                <MenuItem value={9}>9th</MenuItem>
                <MenuItem value={10}>10th</MenuItem>
                <MenuItem value={11}>11th</MenuItem>
                <MenuItem value={12}>12th</MenuItem>
                <MenuItem value={"UG"}>UG</MenuItem>
                <MenuItem value={"PG"}>PG</MenuItem>
              </TextField>
            </div>
          </div>
          <div
            style={{
              // border: "2px solid red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: screenSize ? "100%" : "81%" }}>
              <InputLabel style={{ margin: 10, marginBottom: 0 }}>
                Message
              </InputLabel>
              <TextField
                placeholder="Enter Your Message"
                variant="outlined"
                value={cmnt}
                multiline
                rows={4}
                style={{ margin: 10, width: screenSize ? "90%" : "95%" }}
                onChange={(t) => setCmnt(t.target.value)}
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
              style={{
                width: "40%",
                backgroundColor: "#fccc14",
                padding: 10,
                color: "black",
              }}
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
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
      <ModalPage />
      <Footer />
    </div>
  );
}

export default Workpage;
