import * as React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useContainer5apiDataQuery } from "../Services/commentttApi";
import { addItem } from "../Services/containerSlice";
import { useSelector,useDispatch } from "react-redux";
const Container5 = () => {
  const dispatch = useDispatch()

    //-------------------RTK QueryFetch-------------------------
    const {
      data: containerData,
      isLoading,
      isError,
    } = useContainer5apiDataQuery();
  return (
    <div id="content5"style={{margin:25}}>
      <div className="con1header">
      <h2>TRENDING IN ACCESSORIES</h2>
      </div>
      {isError ? "Somthing Went Wrong" : ""}
      {isLoading ? "Loading..." : ""}

       <div className="p-24 w-full">
        <Grid container spacing={4}>
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

export default Container5
