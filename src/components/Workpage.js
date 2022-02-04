import React, { useContext } from "react";
import { Typography } from "@mui/material";
import ModalPage from "./ModalPage";
import { UserContext } from "./StateMan";
import scene1 from "../assests/scene1.png";
import scene2 from "../assests/scene2.png";
import scene3 from "../assests/scene3.png";
import scene4 from "../assests/scene4.png";

function Workpage(props) {
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
          marginTop: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          {/* <Typography variant="h4">How Does Granth Work?</Typography> */}
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 10 }}>
            Career planning is a 4 stage process at Granth. Each stage
            constructs a framework to understand individuals' passion, interest,
            personality, aptitude, culture, and career-related goals.
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
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Pre counselling
          </Typography>
          <Typography>
            Pre-counselling is vital. It helps to understand a candidate, their
            needs and the desired goal that they are looking for. It also aids
            in setting up a platform to explain what benefits are they going to
            reap and how can they go about with various stages of career
            planning.
          </Typography>
        </div>
        <div>
          <img src={scene1} height="400px" width="100%" alt="" />
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
            <img src={scene2} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Career Assessment
          </Typography>
          <Typography>
            In order to know what career path best fits a candidate, we ask them
            to take a career assessment. It must be noted that career assessment
            is not the ultimate. It is one of the factors in the career planning
            process. These tests are like the diagnostic tool to analyse more
            hidden traits of an individual, which formal education and past
            experiences are unable to provide. There are around 50+ career
            assessments available, however, a candidate is asked to take the
            test as per their current stage of life or need. These tests are
            scientific and statistically proven.
          </Typography>
          <Typography>Things to know before taking an assessment</Typography>
          <ol>
            <li>
              <Typography>
                The assessment can be taken both online as well as offline.
                (Request for an offline assessment here)
              </Typography>
            </li>
            <li>
              <Typography>
                Have a suitable browser, platform and internet connectivity
              </Typography>
            </li>
            <li>
              <Typography>
                Understand that there is no wrong or right answer
              </Typography>
            </li>
            <li>
              <Typography>
                The assessment may take 30-45 minutes. Set aside enough time
              </Typography>
            </li>
            <li>
              <Typography>
                If possible, take the test in an elder’s presence (if you are 18
                or below)
              </Typography>
            </li>
            <li>
              <Typography>Be honest with your answers</Typography>
            </li>
          </ol>
        </div>
        {screenSize ? (
          <div>
            <img src={scene2} height="400px" width="100%" alt="" />
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
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            On-On-One Guidance
          </Typography>

          <Typography>This is the most important part.</Typography>
          <Typography style={{ marginBottom: 10 }}>
            There are innumerable career options available online with their
            eligibility criteria, courses and college offerings. However, an
            information directory is not the same as counselling.
          </Typography>
          <Typography style={{ marginBottom: 10 }}>
            Career counsellors not only identify the career options but also,
            help individuals in discovering unrealized passion and more hidden
            traits. They help you discover courses and skills that are needed
            for the chosen field. They help you get connected with industry
            stalwarts to understand what their daily life schedule looks like
            and what challenges they face.
          </Typography>
          <Typography>
            The one-on-one guidance is a pertinent and focussed conversation to
            bridge the gap between the current state and desired goals.
          </Typography>
        </div>
        <div>
          <img src={scene3} height="400px" width="100%" alt="" />
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
            <img src={scene4} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Generating and Sharing a Report
          </Typography>
          <Typography>
            The assessments taken are converted into a report through AI
            (Artificial Intelligence) based on the overall interest profile. The
            report consists of career recommendations, work interests
            preferences, abilities and work style. The report also recommends
            the career path to attain the ultimate career goal.
          </Typography>
        </div>
        {screenSize ? (
          <div>
            <img src={scene4} height="400px" width="100%" alt="" />
          </div>
        ) : null}
      </div>
      <ModalPage />
    </div>
  );
}

export default Workpage;
