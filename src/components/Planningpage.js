import React from "react";
import { Typography } from "@mui/material";
import ModalPage from "./ModalPage";

function Planningpage(props) {
  return (
    <div style={{ marginTop: 35 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            India’s Most Reliable Career Assessment
          </Typography>
          <Typography variant="h5">
            Take the Mentoria assessment to get started.
          </Typography>
        </div>
        <div style={{ marginTop: 30 }}>
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            height="500px"
            width="100%"
            alt=""
          />
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
          <img
            src="https://edvi.app/static/media/blog.febe592a.svg"
            height="400px"
            width="100%"
            alt=""
          />
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
        <div>
          <img
            src="https://edvi.app/static/media/blog.febe592a.svg"
            height="400px"
            width="100%"
            alt=""
          />
        </div>
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
          <img
            src="https://edvi.app/static/media/blog.febe592a.svg"
            height="400px"
            width="100%"
            alt=""
          />
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
        <div>
          <img
            src="https://edvi.app/static/media/blog.febe592a.svg"
            height="400px"
            width="100%"
            alt=""
          />
        </div>
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
      </div>
      <ModalPage />
    </div>
  );
}

export default Planningpage;
