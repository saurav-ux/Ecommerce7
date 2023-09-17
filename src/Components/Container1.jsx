import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useContainer1apiDataQuery } from "../Services/commentttApi";

const Container1 = () => {
  var off = 0,
    cutprice = 0,
    price = 9;

    //-------------------RTK QueryFetch-------------------------
    const {data:containerData} = useContainer1apiDataQuery()
    // console.log("data",containerData[0].imgName)
  return (
    <div>
      <div className="con1header">
        <h2>MEDAL WORTHY BRANDS TO BAG </h2>
      </div>

      <div className="p-24 w-full">

        <Grid container spacing={3}>

          {containerData?.map((row)=>{
            return(
              <Grid item xs={12} sm={6} md={4} lg={2}>
              <Card className="cardSize">
                <div class="wishimg items_img">
                  <img src={row.imgName} alt="" />
                </div>
                <p>
                  Rs.{row.price} <del> Rs.{row.cutprice} </del>
                  <cite> (Rs. {row.off} OFF)</cite>
                </p>
                <div class="move">
                  <h4>MOVE TO BAG</h4>
                </div>
              </Card>
            </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Container1;
