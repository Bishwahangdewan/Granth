import { Typography } from "@mui/material";
import React, { useContext } from "react";
import ModalPage from "./ModalPage";
import { UserContext } from "./StateMan";
import about1 from "../assests/about1.png";
import about2 from "../assests/about2.png";
import about3 from "../assests/about3.png";
import about4 from "../assests/about4.png";

function Aboutpage(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;
  return (
    <div>
      <div>
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
            style={{ fontWeight: "bold", color: "white" }}
          >
            About Granth
          </Typography>
          {/* <Typography style={{ marginTop: 10 }}>
            We make teacher & student’s life simpler, more pleasant and more
            productive.
          </Typography> */}
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
              About Granth
            </Typography>
            <Typography style={{ marginBottom: 10 }}>
              By the time children reach Class 8, they are talking about
              choosing subjects and how to attain their career goal. Some start
              way early and some are still figuring out. They start discussing
              their goals with parents, friends, peers, teachers and other
              elders who can guide them to the right path.
            </Typography>
            <Typography style={{ marginBottom: 10 }}>
              We have seen a major drop out of students from Indian colleges and
              starting their own venture. Although it’s a separate debate
              altogether, it shows that children are just unaware about
              themselves till they reach college and figure out that this is not
              their calling. You see students taking science in Class 11 & 12,
              as a safer choice of subject to pursue a wide range of career
              options in case engineering doesn’t work out for them. There are
              also some students who change their stream of subjects in class 12
              because they could not score well in class 11. There are some who
              take entrance tests multiple times in order to prove something to
              others.
            </Typography>
          </div>
          <div>
            <img src={about1} height="400px" width="100%" alt="" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fef9f2",
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
            <img src={about2} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600, marginTop: 20 }}>
          {/* <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Our model
          </Typography> */}
          <Typography style={{ marginBottom: 20 }}>
            We have a high probability of such cases where an individual just
            does not know what they should pursue? What career option will have
            them content?
          </Typography>
          <Typography style={{ marginBottom: 10 }}>
            With just 3 streams and more than hundreds of graduation courses and
            thousands of multiple career options, it’s difficult to choose just
            the right career option for the next 30-40 years, that’ll keep you
            going.
          </Typography>
        </div>
        {screenSize ? (
          <div>
            <img src={about2} height="400px" width="100%" alt="" />
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
          {/* <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            About xyz
          </Typography> */}
          <Typography style={{ marginBottom: 10 }}>
            That’s what Granth is all about. It is an education platform that
            offers career counselling and guidance. It consists of all the
            curated options for careers that can be explored by any individual.
            These options are elucidated to personnel seeking career advice
            based on their interests or merits or even when they feel they are
            unclear. Granth has counselors who are well versed in guiding and
            understanding the students’ personality.
          </Typography>
          <Typography style={{ marginBottom: 10 }}>
            A famous German-born scientist Albert Einstein said that – Everybody
            is a genius but if you judge a fish by its ability to climb a tree,
            people will believe that the fish is incapable. The fish’s best
            ability is to swim in the water. The value here is that each person
            or a child possesses a unique character and to pull out that unique
            character the concerned person needs to be mentored.
          </Typography>
        </div>
        <div>
          <img src={about3} height="400px" width="100%" alt="" />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fef9f2",
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
            <img src={about4} height="400px" width="100%" alt="" />
          </div>
        )}
        <div style={{ width: 600, marginTop: 20 }}>
          {/* <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Our model
          </Typography> */}
          <Typography style={{ marginBottom: 20 }}>
            So, that’s where Granth comes into place.The guidance is based on 5
            key dimensions which are:
          </Typography>
          <ol>
            <li>
              <Typography>Skills and Abilities</Typography>
            </li>
            <li>
              <Typography>Career Interest</Typography>
            </li>
            <li>
              <Typography>Learning Style</Typography>
            </li>
            <li>
              <Typography>Career Motivator</Typography>
            </li>
            <li>
              <Typography>Personality</Typography>
            </li>
          </ol>
        </div>
        {screenSize ? (
          <div>
            <img src={about4} height="400px" width="100%" alt="" />
          </div>
        ) : null}
      </div>
      <ModalPage />
    </div>
  );
}

export default Aboutpage;
