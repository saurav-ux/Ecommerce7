import React from 'react'
import { Link } from "react-router-dom";
import loginImage from "../Images/loginImage.webp";
import { useGetLoginDataQuery } from "../Services/loginApi";
import style from "./login.css";
import { useFormik } from "formik";
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
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="body">
      <br />
      <br />
      <div class="login">
        <div class="logimg">
          <img src={loginImage} alt="" />
        </div>
        <h3>
          {" "}
          <p>Login</p>
        </h3>
        <br />
        <form action="" onSubmit={handleSubmit}>
      
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          <br />
         
          <p>
            {" "}
            By continuing, I agree to the <cite>Terms of Use</cite> &{" "}
            <cite>Privacy Policy</cite>
          </p>{" "}
          <br />
          <h4>
            {" "}
            <button type="submit" id="submit" class="co">
              LOGIN
            </button>
          </h4>
        </form>
        <br />
        <br />
        <p>
          Not have an account?<cite>
           <Link to='/signin'>
           Sign In
           </Link>
             </cite>
        </p>
        <br />
        <br /> <br />
        <br /> <br />
      </div>
    </div>
  </div>
  )
}

export default LoginPag
