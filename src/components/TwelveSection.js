import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";
import twelveimg from "../assests/img11-12.png";

import Class10Img from '../assests/class10-11section.png';

import Box from '@mui/material/Box';
import { ClassSubHeading, ClassText, ClassButton } from '../styles/TenthSection.styles';

import CheckboxText from './SectionParts/CheckboxText';

function TwelveSection(props) {
  const { modalS, eleventwelveS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  const [eleventwelve, setEleventwelve] = eleventwelveS;
  return (

    /* <div
       style={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-evenly",
         alignItems: "center",
         flexWrap: "wrap",
         margin: 15,
         // marginTop: 0,
         padding: 8,
         // border: "2px solid red",
       }}
       id="twelveSection"
     >
       <div
         style={{
           width: 560,
           margin: 25,
           display: "flex",
           flexDirection: "column",
           flexWrap: "wrap",
         }}
       >
         <div
           style={{
             display: "flex",
             alignItems: "center",
             // justifyContent: "center",
             marginLeft: 0,
             flexWrap: "wrap",
           }}
         >
           <div style={{ width: 100 }}>
             <hr />
           </div>
           <div style={{ marginLeft: 10 }}>
             <Typography style={{ color: "black" }}>
               {" "}
               Class 11th-12th{" "}
             </Typography>
           </div>
         </div>
         <div>
           <div style={{ display: "flex", marginTop: 30 }}>
             <Typography
               style={{
                 marginTop: 10,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 10, marginLeft: 6 }}>
               So, have you decided upon your majors?
             </Typography>
           </div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 3,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 3, marginLeft: 6 }}>
               Do you know what competitive exams can you give?
             </Typography>
           </div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 3,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 3, marginLeft: 6 }}>
               Are you skilled for the university???s admission process?
             </Typography>
           </div>
           <Typography
             style={{
               marginTop: 10,
               fontSize: 26.5,
               fontFamily: ["Caveat", "cursive"],
             }}
           >
             Let???s talk and hear you out???. What is it that you want to do?
           </Typography>

           <Typography
             style={{
               marginTop: 12,
               color: "#fccc14",
               fontSize: 19,
               fontWeight: "bolder",
               marginBottom: 5,
             }}
           >
             Get the right advice from the experts who can guide you make an
             informative decision
           </Typography>
         </div>
         <div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 10,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 10, marginLeft: 6 }}>
               We???ll help you see through the choices that you make
             </Typography>
           </div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 3,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 3, marginLeft: 6 }}>
               Know the personality group you fall into in terms of skill sets,
               ambitions and aspirations
             </Typography>
           </div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 3,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 3, marginLeft: 6 }}>
               You can consider other vocational courses along with regular
               subjects
             </Typography>
           </div>
           <div style={{ display: "flex" }}>
             <Typography
               style={{
                 marginTop: 3,
                 marginLeft: 15,
                 color: "black",
                 fontWeight: "bolder",
               }}
             >
               #
             </Typography>
             <Typography style={{ marginTop: 3, marginLeft: 6 }}>
               There are many parallel courses that can make you college ready
             </Typography>
           </div>
         </div>
         <div style={{ display: "flex", justifyContent: "center" }}>
           <Button
             variant="contained"
             size="large"
             style={{
               backgroundColor: "white",
               width: 250,
               paddingBlock: 15,
               margin: 10,
               color: "#fccc14",
               marginLeft: 20,
               border: "1px solid black",
               borderRadius: 30,
               fontWeight: "bold",
             }}
             onClick={() => {
               setEleventwelve(true);
               setModal(true);
             }}
           >
             Book For 11th-12th
           </Button>
         </div>
       </div>

       <div style={{ display: "flex", flexWrap: "wrap" }}>
         <img src={twelveimg} height="500px" width="500px" alt="" />
       </div>

       <div style={{ display: "none" }}>{(modal, eleventwelve)}</div>
     </div>*/

    <Box sx={{
      width: '80%',
      margin: 'auto',
      marginTop: '10%',
      paddingBottom: '5%'
    }}>
      <ClassSubHeading>Class 11th - 12th</ClassSubHeading>

      <Box sx={{
        display: "flex",
        paddingTop: "5%"
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '50%',
          order: '2'
        }}>
          <img src={Class10Img} alt="class10-11" style={{ width: '80%' }} />
        </Box>

        <Box sx={{ width: '50%', order: '1' }}>
          <ClassText>So, have you decided upon your majors ?</ClassText>
          <ClassText>Do you know what competitive exams can you give ?</ClassText>
          <ClassText>Are you skilled for the university admission process ?</ClassText>
          <ClassText>Let's talk and hear you out. What is it that you want to do?</ClassText>

          <ClassText style={{
            color: '#FFC812',
            fontWeight: 'bold'
          }}>
            Get the right advice from the experts who can guide you make an informative decision.
          </ClassText>

          <CheckboxText>We???ll help you see through the choices that you make.</CheckboxText>
          <CheckboxText>Know the personality group you fall into in terms of skill sets, ambitions and aspirations.</CheckboxText>
          <CheckboxText>You can consider other vocational courses along with regular subjects.</CheckboxText>
          <CheckboxText>There are many parallel courses that can make you college ready.</CheckboxText>

          <ClassButton onClick={() => {
            setEleventwelve(true);
            setModal(true);
          }}>
            BOOK NOW FOR 11TH - 12TH
          </ClassButton>
        </Box>
      </Box>
    </Box>
  )
}

export default TwelveSection;
