import { Button, Typography } from "@mui/material";
import React from "react";
import ModalPage from "./ModalPage";

function Businesspage(props) {
  return (
    <div style={{ marginTop: 35 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: 15,
        }}
      >
        <div style={{ width: 500 }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Sit cillum qui ex proident nisi est nostrud anim excepteur nostrud
            eu consequat quis consectetur.
          </Typography>
          <Typography style={{ marginTop: 15 }}>
            Consequat ea ipsum ut veniam non veniam laborum ad. Officia aute qui
            cupidatat magna eiusmod ea enim et occaecat. Amet commodo tempor
            esse et velit sunt esse.
          </Typography>
          <Button
            variant="contained"
            style={{
              marginTop: 30,
              backgroundColor: "#fccc14",
              color: "#5b5c5c",
            }}
          >
            Contact Us
          </Button>
        </div>
        <div>
          <img
            src="https://edvi.app/static/media/business-bg.8f5622b2.webp"
            height="370px"
            width="400px"
            alt=""
          />
        </div>
      </div>
      <div style={{ marginTop: 80 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: 15,
          }}
        >
          <div style={{ width: 800 }}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginTop: 10 }}
            >
              Aliquip culpa deserunt tempor ullamco dolore cupidatat culpa
              occaecat eiusmod.
            </Typography>
          </div>
          <div style={{ width: 200 }}></div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: 500 }}>
            <ul>
              <li>
                <Typography>
                  Amet exercitation quis nisi laboris non occaecat sunt
                  consectetur non veniam.
                </Typography>
              </li>
              <li>
                <Typography>
                  Et nulla excepteur cillum mollit id amet qui.
                </Typography>
              </li>
              <li>
                <Typography>
                  In ad magna aute ipsum dolore do pariatur velit nisi et est.
                </Typography>
              </li>
              <li>
                <Typography>
                  Sit exercitation ea est commodo consectetur consequat
                  excepteur anim ea eiusmod duis cillum fugiat velit.
                </Typography>
              </li>
              <li>
                <Typography>
                  Tempor anim aliqua aliquip aliquip nisi nisi enim officia
                  velit velit dolor.
                </Typography>
              </li>
            </ul>
          </div>
          <div style={{ width: 500 }}>
            <ul>
              <li>
                <Typography>
                  Fugiat id labore id commodo aute adipisicing.
                </Typography>
              </li>
              <li>
                <Typography>
                  Nulla reprehenderit in nostrud voluptate exercitation anim
                  irure cillum.
                </Typography>
              </li>
              <li>
                <Typography>
                  Minim ea qui eiusmod consequat sit sit ea velit nulla id
                  pariatur voluptate non deserunt.
                </Typography>
              </li>
              <li>
                <Typography>
                  Ut pariatur ex occaecat ad incididunt excepteur non.
                </Typography>
              </li>
              <li>
                <Typography>Adipisicing eiusmod mollit id mollit.</Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ModalPage />
    </div>
  );
}

export default Businesspage;
