import React from "react";
import { useLocation } from "react-router-dom";
import style from "./detailBox.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import { addItem } from "../Services/containerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetLoginDataQuery } from "../Services/loginApi";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShowDetail = () => {

  //-----handling States
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [message, setMessage] = useState("Login Successfully");
  const [snakcolor, setSnackColor] = useState("success");
  const { vertical, horizontal, open } = state;
  const location = useLocation();
  const dispatch = useDispatch();

  //--------------fetching RTK Query---------------
  const{isError: loginIsError} = useGetLoginDataQuery()

  const handleClose = () => {
    setState({ ...state, open: false });
  };

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

  // console.log("location",location.state)
  const row = location.state;
  return (
    <div>
        {/* <br/><br/><br/><br/><br/> */}
      <div className="detailBox">
        {/* Container1 */}
        <div className="viewContainer1">
          <div className="viewImage">
            <img src={row.imgName} alt="imagedetails" />
          </div>
        </div>
        <div className="viewContainer2">
          <div>
            <p> <b>PRICE</b></p>
            <p>
             <b> Rs.{row.price}</b> <del> Rs.{row.cutprice} </del>
              <cite> (Rs. {row.off} OFF)</cite>
            </p>
          </div>
          <div>
            <p><b>SELECT SIZE</b></p>
            <div className="itemSize">
              <div className="iSize"> <div className="isSize2"> S </div> </div>
              <div className="iSize"> <div className="isSize2"> M </div> </div>
              <div className="iSize"> <div className="isSize2"> L </div> </div>
              <div className="iSize"> <div className="isSize2"> XL </div> </div>
              <div className="iSize"> <div className="isSize2"> XXL</div>  </div>
            </div>
          </div>
          <br/>
          <div>
            <div class="move" onClick={() => handleClick(row)}>
              <h4>MOVE TO BAG</h4>
            </div>
          </div>
        </div>
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

export default ShowDetail;
