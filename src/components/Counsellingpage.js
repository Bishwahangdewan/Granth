import { Typography } from "@mui/material";
import React from "react";
import councelimg from "../assests/brainstorm-meeting.jpg";

import ModalPage from "./ModalPage";

function Counsellingpage(props) {
  return (
    <div style={{ marginTop: 30 }}>
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
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: 100,
        }}
      >
        <div
          style={{
            width: 270,
            border: "2px solid #fccc14",
            height: 350,
            margin: 5,
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #fccc14 ",
              display: "flex",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Typography style={{ fontWeight: "bolder" }}>Reflect</Typography>
          </div>
          <div style={{ padding: 5 }}>
            <ul>
              <li>
                <Typography variant="body2">
                  It involves performing a self-evaluation to test the
                  suitability for the right career choice.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  It is done through certain career assessments. These
                  assessments are designed to understand their
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">Interest & Passion</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Motivation & Values</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Personality & Behaviour
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Learning Styles, Skills, Aptitude & Abilities
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Work Styles</Typography>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: 270,
            border: "2px solid #fccc14",
            height: 350,
            margin: 5,
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #fccc14 ",
              display: "flex",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Typography style={{ fontWeight: "bolder" }}>Discover</Typography>
          </div>
          <div style={{ padding: 5 }}>
            <ul>
              <li>
                <Typography variant="body2">
                  After you have figured your interests, aptitude and strengths
                  through career assessment tools; it’s time to find out about
                  different career options.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  You can research each job separately and gather information
                  about its educational qualifications, skills, training,
                  experience, salary levels and benefits for assuming that role
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Perform market research for the viability
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: 270,
            border: "2px solid #fccc14",
            height: 350,
            margin: 5,
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #fccc14 ",
              display: "flex",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Typography style={{ fontWeight: "bolder" }}>Facilitate</Typography>
          </div>
          <div style={{ padding: 5 }}>
            <ul>
              <li>
                <Typography variant="body2">
                  Once you have researched the jobs , trim down your list to
                  most suitable options.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Compile a list of educational qualifications, experience and
                  skills that are essential for that career
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Develop the requisite training or skills.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Develop the requisite training or skills.Take continuous
                  education courses and learn new skills
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: 270,
            border: "2px solid #fccc14",
            height: 350,
            margin: 5,
          }}
        >
          <div
            style={{
              borderBottom: "2px solid #fccc14 ",
              display: "flex",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Typography style={{ fontWeight: "bolder" }}>Network</Typography>
          </div>
          <div style={{ padding: 5 }}>
            <ul>
              <li>
                <Typography variant="body2">
                  Once you have decided upon the career option, it’s important
                  to connect with experienced professionals and get their
                  first-hand perspectives on what the work involves.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  You can connect with people and opportunities at conferences,
                  personal associations, and network sites.
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: 90,
          padding: 15,
          margin: 15,
        }}
      >
        <div style={{ width: 500 }}>
          <Typography>
            Whether your goal is to become a CEO or be an entrepreneur or you
            just don’t know where you stand right now; It’s important to make an
            aware choice.
          </Typography>
          <Typography>
            Granth offers you a platform to voice out your dreams and lay a plan
            for yourself that you’ll be interested in working towards.
          </Typography>
          <Typography>
            Our foundation is based on 4 career planning tools, which are
            considered to impact the activities of a candidate's life cycle. It
            also helps gain insight into a person’s nature and the ability for
            employment suitability.
          </Typography>
        </div>
        <div>
          <img
            src={councelimg}
            height="350px"
            width="400px"
            style={{ margin: 25 }}
            alt=""
          />
        </div>
      </div>
      <ModalPage />
    </div>
  );
}

export default Counsellingpage;
