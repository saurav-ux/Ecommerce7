import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useContainer1apiDataQuery } from "../Services/commentttApi";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Services/containerSlice";
import { useNavigate } from "react-router-dom";
const Container1 = () => {
  const count = useSelector((state) => state.containerr.addproduct);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log("count", count);   //For testing

  //-------------------RTK QueryFetch-------------------------
  const {
    data: containerData,
    isLoading,
    isError,
  } = useContainer1apiDataQuery();
 // console.log("data",containerData)

  return (
    <div id="content1" style={{margin:25}}>
      <div className="con1header">
        <h2>MEDAL WORTHY BRANDS TO BAG </h2>
      </div>
      {isError ? "Somthing Went Wrong" : ""}
      {isLoading ? "Loading..." : ""}
      <div className="p-24 w-full">
        <Grid container spacing={4}>
          {containerData!== undefined  && containerData?.map((row) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={row._id}>
                <Card className="cardSize">
                  <div class="wishimg items_img">
                    <img src={row.imgName} alt="" />
                  </div>
                  {/* <p>
                    Rs.{row.price} <del> Rs.{row.cutprice} </del>
                    <cite> (Rs. {row.off} OFF)</cite>
                  </p> */}
                  {/* <div
                    class="move"
                    onClick={() =>
                      dispatch(
                        addItem({
                          id:row.id,
                          price: row.price,
                          imgName: row.imgName,
                          cutprice: row.cutprice,
                          off: row.off,
                        })
                      )
                    }
                  >
                    <h4>MOVE TO BAG</h4>
                  </div> */}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Container1;
