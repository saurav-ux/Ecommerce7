import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import myntra36 from "../Images/myntra36.webp";
import myntra37 from "../Images/myntra37.webp";
import myntra38 from "../Images/myntra38.webp";
import myntra39 from "../Images/myntra39.webp";
import myntra40 from "../Images/myntra40.webp";
import myntra41 from "../Images/myntra41.webp";
import myntra42 from "../Images/myntra42.webp";
import myntra43 from "../Images/myntra43.webp";
import myntra44 from "../Images/myntra44.webp";
import myntra45 from "../Images/myntra45.webp";
import { useContainer4apiDataQuery } from "../Services/commentttApi";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Services/containerSlice";
const Container4 = () => {
  // const updatedArray = useSelector((state) => state.containerr.addproduct);
  const dispatch = useDispatch();

  //-------------------RTK QueryFetch-------------------------
  const {
    data: containerData,
    isLoading,
    isError,
  } = useContainer4apiDataQuery();

  return (
    <div id="content4">
      <div className="con1header">
      <h2>TRENDING IN INDIAN WEAR</h2>
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
                  <p>
                    Rs.{row.price} <del> Rs.{row.cutprice} </del>
                    <cite> (Rs. {row.off} OFF)</cite>
                  </p>
                  <div
                    class="move"
                    onClick={() =>
                      dispatch(
                        addItem({
                          price: row.price,
                          imgName: row.imgName,
                          cutprice: row.cutprice,
                          off: row.off,
                        })
                      )
                    }
                  >
                    <h4>MOVE TO BAG</h4>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <br/><br/>

    </div>
  );
}

export default Container4
