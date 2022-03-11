import { Typography } from "@mui/material";
import React, { useContext } from "react";
// import councelimg from "../assests/brainstorm-meeting.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalPage from "./ModalPage";
import { UserContext } from "./StateMan";

function Counsellingpage(props) {
  const { screenSizeS } = useContext(UserContext);
  const [screenSize] = screenSizeS;
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
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "white",
            fontFamily: "Playfair Display SC",
            fontSize: 50,
          }}
        >
          What are Career Assessments?
        </Typography>
        {/* <Typography style={{ marginTop: 10 }}>
          We make teacher & student’s life simpler, more pleasant and more
          productive.
        </Typography> */}
      </div>
      {/* <div
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
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          // backgroundColor: "#f8f9fe",
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
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 10 }}>
            Career assessments are data and analytics tools that are designed to
            discover the skills, aptitude and talents of an individual.{" "}
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            These assessments help gather information about one’s area of
            strength, their personality, abilities, cognitive ability,
            motivation factor, learning style, temperament and various other
            factors that help in finding employment suitability.
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            These personal attributes play a key role for a person starting
            their career or considering a career change.
          </Typography>
        </div>
        <div style={{ marginTop: 80, padding: 10 }}>
          <Typography variant="h4">
            Different Types of Career Assessment
          </Typography>
        </div>
        <Typography variant="h5" style={{ marginTop: 20 }}>
          Career Aptitude Tests
        </Typography>
        <div style={{ marginTop: 40 }}>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                1. MyPlan.com
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This assessment can help you identify your motivations and
                what's really important to you in your career. MyPlan.com ranks
                different aspects of work, and the results can encourage you to
                look at jobs or industries you may not have considered before.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                2. MyNextMove
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                MyNextMove is a tool that uses information from O*Net, which is
                sponsored by the U.S. Department of Labor, to help determine
                your interests as they relate to work. This test asks you how to
                rate how much you'd enjoy performing very specific work tasks
                like "building kitchen cabinets," "laying brick," and "buying
                and selling stocks and bonds."
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                3. MAPP Test
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                More than 8 million people around the world have taken this
                career quiz. It tells you what you love to do and what you don't
                love to do. It also uses the O*Net job list to identify which
                jobs might be good fits.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                4. Holland Code Career Test
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Holland Code self-assessment examines your suitability with
                different careers based on six occupational themes: Realistic,
                Investigative, Artistic, Social, Enterprising, and Conventional.
                The test identifies your top interest area and how it compares
                to the other areas, and what this means for your career
                interests.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                5. CareerFitter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This 10-minute, 60-question career test highlights personality
                strengths and potential career matches in a free report. A
                premium report, available for purchase, delves into greater
                detail on personality facets, ideal business environment and
                more.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                6. Career Quizzes and Tests (Government of Canada)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The career quizzes assess interests, abilities and work
                activities, as well as personality tests on multiple
                intelligences, learning style and work values. Jobseekers will
                need to create a profile and sign in if they want to save their
                results.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                7. Career Quizzes (WorkBC)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                WorkBC’s Career Compass offers three Career Quizzes: The
                Abilities Quiz assesses the individual’s talents and helps match
                them to careers; the Work Preferences Quiz identifies how the
                individual likes to work; and the Subjects Quiz analyzes the
                test taker’s strongest subjects and aligned careers.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                8. Charity Village Career Assessment Questionnaire
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This multidimensional assessment offers guiding questions for
                clients around job/career satisfaction, career path/options,
                attitude/motivation and the role of their family in career
                change/job search. It also offers definitions for terminology
                used in the assessment, which could be helpful for clients who
                are using it independently.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Typography variant="h5" style={{ marginTop: 80 }}>
          Personality Assessments
        </Typography>
        <div style={{ marginTop: 40 }}>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                1. Keirsey Temperament Sorter
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This personality assessment is based on Keirsey Temperament
                Theory, which divides people into four "temperaments:" guardian,
                idealist, rational, and artisan. The assessment measures how
                people communicate and what their actions tend to be.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                2. Big Five
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Big Five personality assessments divide people into five
                personality traits: openness, conscientiousness, extraversion,
                agreeableness, and neuroticism. The assessment identifies a
                preference out of the five and can help you identify learning
                styles as well as work preferences.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                3. 16personalities
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The test is meant to identify basic preferences for each of four
                dichotomies (such as introvert and extrovert) and describes 16
                distinctive personality traits. 16personalities' assessment
                starts with Myers-Briggs dichotomies and adds archetypes from
                Jungian theory as well as some from the Big Five.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              width: screenSize ? 400 : 1000,
              marginTop: 20,
              padding: 10,
              border: "1px solid #5b5c5c",
              borderRadius: 15,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h5"
                style={{ color: "#fccc14", fontWeight: "bolder" }}
              >
                4. PI Behavioral Assessment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Predictive Index predicts primary personality
                characteristics that describe, explain, and predict day-to-day
                workplace behaviors. This rigorously tested study looks at your
                strongest workplace behaviors and determines your management and
                influence styles.
              </Typography>
              <Typography>
                One of the most well-known self-assessments, the Myers-Briggs
                Type Indicator (MBTI) is less of a career test than it is the
                gold standard of personality tests.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: screenSize ? "90%" : "60%",
            marginTop: 50,
          }}
        >
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 5 }}>
            However, the results of individual career assessments provide
            targeted information that may not address a particular individual's
            needs. In addition, some of the best individual assessment tools
            require the help of a qualified professional to ensure the results
            are interpreted correctly and usefully.
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            Also, many of the tests are based on the person’s view of himself or
            herself. If someone is not self-aware, the results may not be
            accurate. Many times they do not take into account that people have
            natural blind spots. The test is only as good as its user and
            individuals are often not clearly aware of their own strengths and
            weaknesses.
          </Typography>
          <Typography variant="h6" style={{ color: "#5b5c5c", marginTop: 3 }}>
            It is the job of a counsellor to analyze whether the right fit of
            career assessment for an individual as well as its reliability and
            validity.
          </Typography>
        </div>
      </div>

      <ModalPage />
    </div>
  );
}

export default Counsellingpage;
