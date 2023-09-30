import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import myntra25 from "../Images/myntra25.webp";
import myntra26 from "../Images/myntra26.webp";
import myntra27 from "../Images/myntra27.webp";
import myntra28 from "../Images/myntra28.webp";
import myntra29 from "../Images/myntra29.webp";
import myntra30 from "../Images/myntra30.webp";
import myntra31 from "../Images/myntra31.webp";
import myntra32 from "../Images/myntra32.webp";
import myntra33 from "../Images/myntra33.webp";
import myntra34 from "../Images/myntra34.webp";

const Container3 = () => {
    return (
        <div  id="content3">
          <div className="con1header">
            <h2>CATEGORIES TO BAG</h2>
          </div>
    
          <div className="p-24 w-full">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra25} alt="" />
                  <br />
                  <img src={myntra26} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra27} alt="" />
                  <br />
                  <img src={myntra28} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra29} alt="" />
                  <br />
                  <img src={myntra30} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra31} alt="" />
                  <br />
                  <img src={myntra32} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra33} alt="" />
                  <br />
                  <img src={myntra34} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className="cardSize">
                <div className="items_img">
                <div class="images">
                  <img src={myntra28} alt="" />
                  <br />
                  <img src={myntra29} alt="" />
                </div>
              </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      );
}

export default Container3
