import { Typography, Button } from "@mui/material";
import React from "react";

function Aboutpage(props) {
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
            backgroundColor: "#6483e4",
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
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
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
              About xyz
            </Typography>
            <Typography style={{ marginBottom: 10 }}>
              Commodo dolor nisi enim anim non sit ullamco aliqua. Reprehenderit
              elit ex non quis elit elit laborum. Anim laboris quis deserunt
              pariatur mollit ad duis proident culpa nostrud eu enim occaecat
              officia. Lorem eu cillum ad exercitation.
            </Typography>
            <Typography style={{ marginBottom: 10 }}>
              Cupidatat consequat veniam dolore sunt occaecat duis ullamco
              reprehenderit qui in dolor. Reprehenderit in est proident veniam.
              Aute velit eu eu occaecat ex esse reprehenderit in culpa dolor
              sunt duis. Amet sunt enim cillum aliquip mollit qui enim.
              Incididunt commodo id excepteur velit enim nostrud deserunt nisi
              officia eiusmod id incididunt cillum elit. Qui sunt consectetur
              fugiat aliqua qui nisi.
            </Typography>
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
        <div>
          <img
            src="https://edvi.app/static/media/our-model.f0d36a90.webp"
            height="400px"
            width="100%"
            alt=""
          />
        </div>
        <div style={{ width: 600, marginTop: 20 }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", marginBottom: 20 }}
          >
            Our model
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            Ea incididunt commodo laboris irure duis duis sint eu aliquip non.
            Elit eiusmod sit velit aute cupidatat. Aliqua deserunt nulla elit
            dolore cupidatat. Pariatur magna magna amet labore laborum minim
            sunt duis aute nostrud. Pariatur ea ullamco officia adipisicing
            adipisicing excepteur ut.
          </Typography>
          <Typography style={{ marginBottom: 10 }}>
            Est nulla et nostrud do sit deserunt sit pariatur incididunt minim.
            Esse deserunt laboris sunt exercitation nostrud ut id mollit Lorem
            deserunt. Duis id esse nostrud ipsum id esse id adipisicing
            incididunt non sint ad. Do aute nisi id non eu id voluptate. Labore
            ad magna amet non labore occaecat dolore elit nulla consectetur
            tempor aliquip exercitation. Pariatur eu dolore anim anim tempor
            incididunt officia consectetur id anim Lorem ex velit ullamco.
          </Typography>
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
          <Typography variant="h4">
            Not able to find what you are looking for? Contact Us
          </Typography>
          <div
            style={{
              margin: 8,
              //   border: "2px solid black",
              width: 400,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 25,
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: 12,
                paddingInline: 30,
              }}
            >
              Raise a Query
            </Button>
          </div>
        </div>
      </div>
      <div style={{ height: 200 }}></div>
    </div>
  );
}

export default Aboutpage;
