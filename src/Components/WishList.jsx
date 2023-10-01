import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../Services/containerSlice";
const WishList = () => {
  const dispatch = useDispatch();
  const containerData = useSelector((state) => state.containerr.addproduct);
  return (
    <div className="checkout">
      <br /> <br /> <br /> <br />
      <br />
      <div className="p-24 w-full">
        <Grid container spacing={3}>
          {containerData?.map((row) => {
            return (
              <>
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
                      class="remove"
                      onClick={() => dispatch(removeItem(row.id))}
                    >
                      <h4>REMOVE ITEM</h4>
                    </div>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default WishList;
