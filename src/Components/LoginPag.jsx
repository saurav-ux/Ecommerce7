import React from 'react'
import { Link } from "react-router-dom";
import loginImage from "../Images/loginImage.webp";
import { useGetLoginDataQuery } from "../Services/loginApi";
import style from "./login.css";
import { useFormik } from "formik";
import {
  DialogContent,
  TextField,
} from "@mui/material";
import * as Yup from 'yup'

const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your name"),
  password: Yup.string().min(6).required("Please Enter min 6 digit password"),
})


const LoginPag = () => {
  const { data: login } = useGetLoginDataQuery();
  
  const submitHandler = (values)=>{
    const foundUser = login?.find((user)=> user.email ===values.email)
    
    if (foundUser) {
      alert("Login Successfully")
      console.log("User found:");
    } else {
      console.log("User not found");
    }
}
  const initialValues = {
    email:"",
    password: "",
  }
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: 
    submitHandler
    //  (values)=>{
    //     console.log("Values",values)
    // }
  })


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
              <button type="submit" id="submit" class="co">
                LOGIN
              </button>
            </h4>
          </form>
          </DialogContent>
         
        
          <p>
            Already have account? <cite>
              <Link to="/signin">          
               Log In
               </Link>
               </cite>
          </p>
          <br />
    
        </div>
      </div>
    </div>
  );
}

export default LoginPag
