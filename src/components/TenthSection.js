import React from "react";
import { Typography } from "@mui/material";

function TenthSection(props) {
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
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Incididunt sunt ullamco ullamco in amet irure elit sunt tempor velit
          proident qui anim qui.
        </Typography>

        <ul>
          <li>
            <Typography>Reprehenderit tempor eiusmod mollit magna.</Typography>
          </li>
          <li>
            <Typography>
              Proident nostrud exercitation cupidatat exercitation elit dolore
              consectetur magna ad commodo.
            </Typography>
          </li>
          <li>
            <Typography>Velit nisi ut commodo magna.</Typography>
          </li>
          <li>
            <Typography>
              Ad duis ullamco elit eiusmod ea nulla tempor mollit cillum ex
              velit.
            </Typography>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          src="https://idreamcareer.com/wp-content/uploads/2021/08/career-counselling-for-students.webp"
          height="400px"
          width="400px"
          alt=""
        />
      </div>
    </div>
  );
}

export default TenthSection;
