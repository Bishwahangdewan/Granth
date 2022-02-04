import { Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import ModalPage from "./ModalPage";
import buisness1 from "../assests/buisness1.jpg";
import { UserContext } from "./StateMan";

function Businesspage(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;
  return (
    <div style={{ marginTop: 35 }}>
      <div
        style={{
          width: "100%",
          // height: "400px",
          backgroundImage: `url(${buisness1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundPosition: "center",
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
        <Typography variant="h4" style={{ fontWeight: "bold", color: "white" }}>
          We are xyz
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          We make teacher & student’s life simpler, more pleasant and more
          productive.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 15,
          marginTop: 100,
        }}
      >
        <div style={{ width: "70%" }}>
          <Typography
            variant="h5"
            style={{
              // fontWeight: "bold",
              color: "#fccc14",
            }}
          >
            Career counseling at educational institutes is a lot more than just
            choosing subjects and giving entrance exams aimlessly. It’s about
            discovering oneself and understanding their strengths. It is about
            reflecting on oneself and self-evaluation.
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            To understand, let’s divide the group of counselees in two groups:
          </Typography>
          <ol>
            <li>
              <Typography>Adolescents (Approximate age 13-20 years)</Typography>
            </li>
            <li>
              <Typography>
                Young Adults (Approximate ages 21-39 years)
              </Typography>
            </li>
          </ol>
          <div style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              style={{ color: "#fccc14", marginBottom: 20 }}
            >
              In order to counsel these two set of groups it’s important to
              understand their growth and development psychie.
            </Typography>
            {screenSize ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #fccc14 ",
                  }}
                >
                  <div
                    style={{
                      padding: 10,
                    }}
                  >
                    <Typography>
                      Adolescents (Approximate age 13-20 years)
                    </Typography>
                  </div>

                  <div
                    style={{
                      padding: 10,
                      borderTop: "2px solid #fccc14 ",
                    }}
                  >
                    <Typography>
                      This group of people are in a transitional phase. They are
                      undergoing physical, emotional, social and mental changes.
                      From a psychological point of view, adolescents are trying
                      to develop their own identity, trying to build close
                      relationships, balancing desire to be part of a peer group
                      with family interests, are generally concerned about
                      appearances, and challenge authority. At this age, they
                      may also set career goals and choose a lifestyle, like to
                      feel in control of themselves and trying to unlearn to
                      learn something new.
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #fccc14 ",
                    marginTop: 40,
                  }}
                >
                  <div style={{ padding: 10 }}>
                    <Typography>
                      Young Adults (Approximate ages 21-39 years)
                    </Typography>
                  </div>

                  <div
                    style={{
                      borderTop: "2px solid #fccc14 ",
                      padding: 10,
                    }}
                  >
                    <Typography>
                      People at this age group are trying to build connections,
                      develop new skills, hobbies, and adult interests. They
                      have moved into adult roles and responsibilities and may
                      learn a trade, work, and/or pursue higher education. They
                      are assumed to fully understand abstract concepts and be
                      aware of consequences and personal limitations and see the
                      peer group as less important. They are able to identify
                      career goals and prepare to achieve them. They secure
                      their autonomy and build and test their decision making
                      skills.
                    </Typography>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid #fccc14 ",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      borderRight: "2px solid #fccc14 ",
                      width: "50%",
                      padding: 10,
                    }}
                  >
                    <Typography>
                      Adolescents (Approximate age 13-20 years)
                    </Typography>
                  </div>
                  <div
                    style={{
                      // borderRight: "2px solid #fccc14 ",
                      width: "50%",
                      padding: 10,
                    }}
                  >
                    <Typography>
                      Young Adults (Approximate ages 21-39 years)
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-evenly",
                    borderTop: "2px solid #fccc14 ",
                  }}
                >
                  <div
                    style={{
                      // width: "50%",
                      borderRight: "2px solid #fccc14 ",
                      padding: 10,
                    }}
                  >
                    <Typography>
                      This group of people are in a transitional phase. They are
                      undergoing physical, emotional, social and mental changes.
                      From a psychological point of view, adolescents are trying
                      to develop their own identity, trying to build close
                      relationships, balancing desire to be part of a peer group
                      with family interests, are generally concerned about
                      appearances, and challenge authority. At this age, they
                      may also set career goals and choose a lifestyle, like to
                      feel in control of themselves and trying to unlearn to
                      learn something new.
                    </Typography>
                  </div>
                  <div
                    style={{
                      // width: "50%",
                      // borderRight: "2px solid #fccc14 ",
                      padding: 10,
                    }}
                  >
                    <Typography>
                      People at this age group are trying to build connections,
                      develop new skills, hobbies, and adult interests. They
                      have moved into adult roles and responsibilities and may
                      learn a trade, work, and/or pursue higher education. They
                      are assumed to fully understand abstract concepts and be
                      aware of consequences and personal limitations and see the
                      peer group as less important. They are able to identify
                      career goals and prepare to achieve them. They secure
                      their autonomy and build and test their decision making
                      skills.
                    </Typography>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div style={{ marginTop: 50 }}>
            <Typography>
              The role of career counsellor is to personalize the process of
              career selection after understanding each individual separately
              and being empathetic. In order to make right career choice they
              must understand the following aspects of career choice process:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Self-awareness of their interests, abilities, aptitude,
                  skills, behaviour, emotional intelligence and social-personal
                  development.
                </Typography>
              </li>
              <li>
                <Typography>
                  Knowledge of the diversity of careers and awareness of the
                  opportunities open to them
                </Typography>
              </li>
              <li>
                <Typography>
                  Developing the skills to follow career goals
                </Typography>
              </li>
              <li>
                <Typography>Networking and Decision-making skills</Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(234, 232, 233)", marginTop: 50 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Typography variant="h4">Join The #CareerReady Movement</Typography>
          <Typography>
            Invite us over for a meeting and we’ll be happy to take you through
            the Mentoria Solution and how it will benefit your organisation.
          </Typography>
        </div>
        <div
          style={{
            padding: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              // border: "2px solid red",
              width: "50%",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <div style={{ width: "45%" }}>
              <InputLabel>Full Name</InputLabel>
              <TextField
                placeholder="Full Name"
                style={{ width: "100%", marginTop: 5 }}
              />
            </div>
            <div style={{ width: "45%" }}>
              <InputLabel>City</InputLabel>
              <TextField
                placeholder="City"
                style={{ width: "100%", marginTop: 5 }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // border: "2px solid red",
              width: "50%",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <div style={{ width: "45%" }}>
              <InputLabel>Email Id</InputLabel>
              <TextField
                placeholder="Email Id"
                style={{ width: "100%", marginTop: 5 }}
              />
            </div>
            <div style={{ width: "45%" }}>
              <InputLabel>Phone Number</InputLabel>
              <TextField
                placeholder="Phone Number"
                style={{ width: "100%", marginTop: 5 }}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              width: "50%",
            }}
          >
            <InputLabel>Purpose</InputLabel>
            <TextField
              placeholder="Comment"
              multiline
              rows={3}
              style={{ width: "100%", marginTop: 5 }}
            />
          </div>
          <div style={{ width: "15%", marginTop: 40 }}>
            <Button
              variant="contained"
              style={{
                width: "100%",
                backgroundColor: "#fccc14",
                padding: 10,
                color: "black",
              }}
            >
              Let's Meet
            </Button>
          </div>
        </div>
      </div>
      <ModalPage />
    </div>
  );
}

export default Businesspage;
