import React,{useState} from "react";
import { Link } from "react-router-dom";
import loginImage from "../Images/loginImage.webp";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useValidateLoginMutation ,useGetLoginDataQuery} from "../Services/loginApi";
import style from "./login.css";
import { useFormik } from "formik";
import { DialogContent, TextField } from "@mui/material";
import * as Yup from "yup";
import { loginStatus } from "../Services/containerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your name"),
  password: Yup.string().min(6).required("Please Enter min 6 digit password"),
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPag = () => {

 //handle snakvar
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [message,setMessage] = useState("Login Successfully")
  const [snakcolor,setSnackColor]= useState("success")
  const { vertical, horizontal, open } = state;

  const dispatch = useDispatch();
  const navigate = useNavigate()
  //--------------------RTK Query--------------------
  const {refetch:refetchLogin}= useGetLoginDataQuery()
  const [validate] = useValidateLoginMutation();

  const submitHandler = async (values, action) => {
    try {
      const response = await validate(values);
      refetchLogin()
      if(response.error){
        setState({ vertical: 'top',
        horizontal: 'center',
         open: true });
         setSnackColor("error")
        setMessage("Incorrect Password or Email")
      }
      // console.log("response", response);
      if (response?.data.status) {
        dispatch(loginStatus(response?.data.name));
        setState({ vertical: 'top',
        horizontal: 'center',
         open: true });
         setSnackColor("success")
         setMessage("Login Successfully")
        // alert("Login Successfully");
        // console.log("User found"); 
        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        setState({ vertical: 'top',
        horizontal: 'center',
         open: true });
         setSnackColor("error")
        setMessage(response?.data.name)
        // console.log(response?.data.name);
      }
    } catch (error) {
      console.error("Error creating the user:", error);
    }
    action.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: submitHandler,
    });
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };
  
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="body">
        <br />
        <br />
        <div class="login">
          <div class="logimg">
            <img src={loginImage} alt="" />
          </div>
          <h3>
            <br />
            <p>Login</p>
          </h3>
          {/* <br /> */}
          <DialogContent classes={{ root: "p-16 pb-0 sm:p-32 sm:pb-0" }}>
            <form action="" onSubmit={handleSubmit}>
              <TextField
                className="textfield"
                type="email"
                placeholder="Enter Your Email"
                required
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <br />
              <TextField
                className="textfield"
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <br />
              <br /> <br />
              <p>
                {" "}
                By continuing, I agree to the <cite>Terms of Use</cite> &{" "}
                <cite>Privacy Policy</cite>
              </p>{" "}
              <h4>
                {" "}
                <button type="submit" id="submit" class="co" variant="outlined"
                className="loginButton"
                //  onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
                 >
                  LOGIN
                </button>
              </h4>
            </form>
          </DialogContent>

          <p>
            Don't have account?{" "}
            <cite>
              <Link to="/signin">Signin</Link>
            </cite>
          </p>
          <br />
        </div>
      </div>
          {/* alert snakbar start */}
          <Snackbar 
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snakcolor}  sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
            {/* alert snakbar end */}
    </div>
  );
};

export default LoginPag;
