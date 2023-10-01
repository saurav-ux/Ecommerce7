import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useContainer2apiDataQuery } from "../Services/commentttApi";

const Container2 = () => {
  //-------------------RTK QueryFetch-------------------------
  const {
    data: containerData,
    isLoading,
    isError,
  } = useContainer2apiDataQuery();

  return (
    <div id="content2">
      <div className="con1header">
        <h2>BIGGEST DEALS ON TOP BRANDS</h2>
      </div>
      {isError ? "Somthing Went Wrong" : ""}
      {isLoading ? "Loading..." : ""}

      <div className="p-24 w-full">
        <Grid container spacing={3}>
          {containerData?.map((row) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={row.id}>
                <Card className="cardSize">
                  <div class="wishimg items_img">
                    <img src={row.imgName} alt="" />
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

export default Container2;
