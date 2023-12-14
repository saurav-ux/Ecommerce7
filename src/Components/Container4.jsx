import * as React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useContainer4apiDataQuery } from "../Services/commentttApi";
import { useGetLoginDataQuery } from "../Services/loginApi";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Services/containerSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container4 = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [message, setMessage] = useState("Login Successfully");
  const [snakcolor, setSnackColor] = useState("success");
  const { vertical, horizontal, open } = state;

    //-------------------RTK QueryFetch-------------------------
    const {
      data: containerData,
      isLoading,
      isError,
    } = useContainer4apiDataQuery();
    const{isError: loginIsError} = useGetLoginDataQuery()

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // const updatedArray = useSelector((state) => state.containerr.addproduct);
  const dispatch = useDispatch();
  const loginName = useSelector((state) => state.containerr.logstatus);
  const handleClick = (row) => {
    if (loginName === "" || loginName === undefined ||loginIsError) {
      setState({ vertical: "top", horizontal: "center", open: true });
      setSnackColor("error");
      setMessage("Please Login First");
      
    } else {
      dispatch(
        addItem({
          id: row._id,
          price: row.price,
          imgName: row.imgName,
          cutprice: row.cutprice,
          off: row.off,
        })
      );
    }
  };
  


  return (
    <div id="content4" style={{ margin: 25 }}>
      <div className="con1header">
        <h2>TRENDING IN INDIAN WEAR</h2>
      </div>
      {isError ? "Somthing Went Wrong" : ""}
      {isLoading ? "Loading..." : ""}

      <div className="p-24 w-full">
        <Grid container spacing={4}>
          {containerData?.map((row) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={2} key={row._id}>
                <Card className="cardSize">
                  <div class="wishimg items_img">
                    <img src={row.imgName} alt="" />
                  </div>
                  <p>
                    Rs.{row.price} <del> Rs.{row.cutprice} </del>
                    <cite> (Rs. {row.off} OFF)</cite>
                  </p>
                  <div class="move" onClick={() => handleClick(row)}>
                    <h4>MOVE TO BAG</h4>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* alert snakbar start */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snakcolor}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {/* alert snakbar end */}
    </div>
  );
};

export default Container4;
