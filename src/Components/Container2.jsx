import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import myntra15 from "../Images/myntra15.webp";
import myntra16 from "../Images/myntra16.webp";
import myntra17 from "../Images/myntra17.webp";
import myntra18 from "../Images/myntra18.webp";
import myntra19 from "../Images/myntra19.jpg";
const Container2 = () => {
  return (
    <div>
      <div className="con1header">
        <h2>BIGGEST DEALS ON TOP BRANDS</h2>
      </div>

      <div className="p-24 w-full">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra15} alt="" />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra16} alt="" />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra17} alt="" />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra18} alt="" />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra19} alt="" />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card className="cardSize">
            <div className="items_img">
                <img src={myntra15} alt="" />
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Container2
