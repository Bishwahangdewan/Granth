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
        <Typography variant="h4" style={{ fontWeight: "bold", color: "white" }}>
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
            alignItems: "center",
            padding: 10,
            width: screenSize ? "90%" : "70%",
          }}
        >
          {/* <Typography variant="h4">
            India’s Most Reliable Career Assessment
          </Typography> */}
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 5 }}>
            Whether your goal is to become a CEO or be an entrepreneur or you
            just don’t know where you stand right now; It’s important to make an
            aware choice.
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            Granth offers you a platform to voice out your dreams and lay a plan
            for yourself that you’ll be interested in working towards.
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            Our foundation is based on 4 career planning tools, which are
            considered to impact the activities of a candidate's life cycle. It
            also helps gain insight into a person’s nature and the ability for
            employment suitability. (A smart art type of diagram on right-hand
            side)
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
                It involves performing a self-evaluation to test the suitability
                for the right career choice.
              </Typography>
            </li>
            <li>
              <Typography>
                It is done through certain career assessments. These assessments
                are designed to understand their
              </Typography>
              <ul>
                <li>
                  <Typography>Interest & Passion</Typography>
                </li>
                <li>
                  <Typography>Motivation & Values</Typography>
                </li>
                <li>
                  <Typography>Personality & Behaviour</Typography>
                </li>
                <li>
                  <Typography>
                    Learning Styles, Skills, Aptitude & Abilities
                  </Typography>
                </li>
                <li>
                  <Typography>Work Styles</Typography>
                </li>
              </ul>
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
                After you have figured your interests, aptitude and strengths
                through career assessment tools; it’s time to find out about
                different career options.
              </Typography>
            </li>
            <li>
              <Typography>
                You can research each job separately and gather information
                about its educational qualifications, skills, training,
                experience, salary levels and benefits for assuming that role
              </Typography>
            </li>
            <li>
              <Typography>Perform market research for the viability</Typography>
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
                Once you have researched the jobs , trim down your list to most
                suitable options.
              </Typography>
            </li>
            <li>
              <Typography>
                Compile a list of educational qualifications, experience and
                skills that are essential for that career
              </Typography>
            </li>
            <li>
              <Typography>Develop the requisite training or skills.</Typography>
            </li>
            <li>
              <Typography>
                Develop the requisite training or skills.Take continuous
                education courses and learn new skills
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
                Once you have decided upon the career option, it’s important to
                connect with experienced professionals and get their first-hand
                perspectives on what the work involves.
              </Typography>
            </li>
            <li>
              <Typography>
                You can connect with people and opportunities at conferences,
                personal associations, and network sites.
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
