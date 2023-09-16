import * as React from "react";
// import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import myntra10 from "../Images/myntra10.webp";
import myntra11 from "../Images/myntra11.webp";
import myntra12 from "../Images/myntra12.webp";
import myntra13 from "../Images/myntra13.webp";
import myntra14 from "../Images/myntra14.webp";
const Container1 = () => {
  var off = 0,
    cutprice = 0,
    price = 9;
  return (
    <div>
      <div className="con1header">
        <h2>MEDAL WORTHY BRANDS TO BAG</h2>
      </div>

      <div className="p-24 w-full">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra11} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra12} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra12} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra10} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra13} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
              <div class="wishimg items_img">
                <img src={myntra14} alt="" />
              </div>

              <p>
                Rs.{price} <del> Rs.{cutprice} </del>
                <cite> (Rs. {off} OFF)</cite>
              </p>
              <div class="move">
                <h4>MOVE TO BAG</h4>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Container1;
