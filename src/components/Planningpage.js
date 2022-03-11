import React, { useContext } from "react";
import { Typography } from "@mui/material";
import ModalPage from "./ModalPage";
import { UserContext } from "./StateMan";
import plan1 from "../assests/plan1.png";
import plan2 from "../assests/plan2.png";
import plan3 from "../assests/plan3.png";
import plan4 from "../assests/plan4.png";

function Planningpage(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;
  return (
    <div style={{ marginTop: 35 }}>
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
          Carrer Planning
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
          marginTop: 70,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            padding: 10,
            width: screenSize ? "90%" : "70%",
          }}
        >
          {/* <Typography variant="h4">
            India’s Most Reliable Career Assessment
          </Typography> */}
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 5,
              fontFamily: ["Caveat", "cursive"],
              fontSize: 28,
            }}
          >
            It will be about time when the infamous question starts popping in
            front of you - “Beta, bade hoke kya banoge?”
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 3,
              fontFamily: ["Caveat", "cursive"],
              fontSize: 28,
            }}
          >
            And the answers either baffle the others or come as a reality check
            to oneself.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 3,
              fontFamily: ["Caveat", "cursive"],
              fontSize: 28,
            }}
          >
            It’s seen that less than 5% of children know exactly about their
            career, their modus operandi, strategy, path, skills required and
            all about it. They have it all figured out, while the others are
            puzzled.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 3,
              fontFamily: ["Caveat", "cursive"],
              fontSize: 28,
            }}
          >
            Well it might sound like a tight ropewalk but it isn’t.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#5b5c5c",
              marginTop: 3,
              fontFamily: ["Caveat", "cursive"],
              fontSize: 28,
            }}
          >
            Granth career counselling is a platform that will help you with your
            quest and help you lay a plan for yourself that you’ll be interested
            in working towards. Our foundation is based on 4 career planning
            tools.
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
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 30,
          flexWrap: "wrap",
          padding: 15,
          // border: "2px solid red",
        }}
      >
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20, marginLeft: 20 }}
          >
            Reflect
          </Typography>
          <ul>
            <li>
              <Typography>
                It’s important to know whether you’ll be able to dedicate for
                longer duration of hours as required in Medicine, or do you set
                your mind free to be as creative as possible or are you driven
                by rules and regulation.
              </Typography>
            </li>
            <li>
              <Typography>Hence, self-evaluation is the key.</Typography>
            </li>
            <li>
              <Typography>
                We understand and garner your interest, passion, motivation,
                values, personality, and ability through various psychometric
                assessments.
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <img src={plan1} height="400px" width="100%" alt="" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 30,
          flexWrap: "wrap",
          padding: 15,
          // border: "2px solid red",
        }}
      >
        {screenSize ? null : (
          <div>
            <img src={plan2} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20, marginLeft: 20 }}
          >
            Discover
          </Typography>
          <ul>
            <li>
              <Typography>
                After your interests, aptitude and strengths are analysed
                through career assessment tools; it’s time to dig in for
                different career options.
              </Typography>
            </li>
            <li>
              <Typography>
                You can research for each job separately and gather information
                about its educational qualifications, skills, training,
                experience, salary levels and benefits on assuming that role.
              </Typography>
            </li>
            <li>
              <Typography>
                It’s also important to perform market research for the viability
                of career option
              </Typography>
            </li>
          </ul>
        </div>
        {screenSize ? (
          <div>
            <img src={plan2} height="400px" width="100%" alt="" />
          </div>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 30,
          flexWrap: "wrap",
          padding: 15,
          // border: "2px solid red",
        }}
      >
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20, marginLeft: 20 }}
          >
            Facilitate
          </Typography>
          <ul>
            <li>
              <Typography>
                Once you have discovered the jobs, trim down your list to most
                suitable options.
              </Typography>
            </li>
            <li>
              <Typography>
                Prepare a roadmap for the same. Compile a list of educational
                qualifications, experience and skills that are essential for
                that career.
              </Typography>
            </li>
            <li>
              <Typography>
                Aid yourself with the requisite training/skills, education,
                fellowship, internship and whatever required.
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <img src={plan3} height="400px" width="100%" alt="" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 30,
          flexWrap: "wrap",
          padding: 15,
          // border: "2px solid red",
        }}
      >
        {screenSize ? null : (
          <div>
            <img src={plan4} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20, marginLeft: 20 }}
          >
            Network
          </Typography>
          <ul>
            <li>
              <Typography>
                It’s always good to ask your near and dear ones who are already
                pursuing the same career path.
              </Typography>
            </li>
            <li>
              <Typography>
                But make sure that they are aware of your abilities, aptitude,
                subject, and your sore point.
              </Typography>
            </li>
            <li>
              <Typography>
                It’s relevant to connect with experienced professionals and get
                their first-hand perspectives on what the work involves. This
                will guide your way through the day of work that you are aiming
                at.
              </Typography>
            </li>
          </ul>
        </div>
        {screenSize ? (
          <div>
            <img src={plan4} height="400px" width="100%" alt="" />
          </div>
        ) : null}
      </div>
      <ModalPage />
    </div>
  );
}

export default Planningpage;
