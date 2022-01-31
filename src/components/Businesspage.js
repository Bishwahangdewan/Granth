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
      <div
        style={{
          backgroundImage: `url(
            "https://d33wubrfki0l68.cloudfront.net/9fdd75375aebec15f50bbc3240dab3f5b3782e2f/0e955/static/media/bottom.7da81cb8.svg"
          )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          position: "relative",
          marginTop: 100,
          height: 220,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
            color: "white",
            padding: 15,
            // border: "2px solid black",
          }}
        >
          <Typography variant="h4" style={{ color: "white" }}>
            To know more, contact us at
          </Typography>
          <div
            style={{
              margin: 8,
              //   border: "2px solid black",
              width: 400,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginTop: 25,
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "#5b5c5c",
                padding: 12,
                paddingInline: 30,
              }}
            >
              9892152606
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "#5b5c5c",
                padding: 12,
                paddingInline: 30,
              }}
            >
              cascas@xyz
            </Button>
          </div>
        </div>
      </div>
      {/* <div style={{ height: 200 }}></div> */}
      <ModalPage />
    </div>
  );
}

export default Businesspage;
