import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { UserContext } from "./StateMan";

function TenthSection(props) {
  const { modalS } = useContext(UserContext);
  const [modal, setModal] = modalS;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // border: "2px solid red",
        margin: 15,
        marginTop: 50,
        flexWrap: "wrap",
        padding: 15,
      }}
      id="tenthSection"
    >
      <div
        style={{
          width: 500,
          margin: 25,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Incididunt sunt ullamco ullamco in amet irure elit sunt tempor velit
          proident qui anim qui.
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          Ullamco aliquip ipsum est id deserunt sint ipsum ea pariatur culpa
          exercitation veniam cupidatat. Ad et tempor excepteur ullamco magna
          dolore aliquip id nulla adipisicing aliqua. Est labore eiusmod aliqua
          mollit. Excepteur nulla ea excepteur pariatur ea elit consectetur. Est
          quis consequat id enim quis voluptate nulla excepteur culpa ullamco
          aliqua.
        </Typography>

        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#fccc14",
            paddingInline: 90,
            paddingBlock: 15,
            margin: 10,
            color: "#5b5c5c",
            // marginLeft: 35,
          }}
          onClick={() => setModal(true)}
        >
          Book Now For 9th-10th
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          src="https://idreamcareer.com/wp-content/uploads/2021/08/career-counselling-for-students.webp"
          height="400px"
          width="400px"
          alt=""
        />
      </div>
      <div style={{ display: "none" }}>{modal}</div>
    </div>
  );
}

export default TenthSection;
