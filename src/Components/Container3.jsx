import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useContainer3apiDataQuery } from "../Services/commentttApi";
const Container3 = () => {
  //-------------------RTK QueryFetch-------------------------
  const {
    data: containerData,
    isLoading,
    isError,
  } = useContainer3apiDataQuery();
  return (
    <div id="content3">
      <div className="con1header">
        <h2>CATEGORIES TO BAG</h2>
      </div>
      {isError ? "Somthing Went Wrong" : ""}
      {isLoading ? "Loading..." : ""}
      <div className="p-24 w-full">
        <Grid container spacing={3}>
          {containerData?.map((row) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={row.id}>
                <Card className="cardSize">
                  <div className="items_img">
                    <div class="images">
                      <img src={row.imgName1} alt="" />
                      <br />
                      <img src={row.imgName2} alt="" />
                    </div>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Container3;
