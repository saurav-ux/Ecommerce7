import React from "react";
import { Link } from "react-router-dom";
import { useGetLoginDataQuery,useSignupMutation } from "../Services/loginApi";
import loginImage from "../Images/loginImage.webp";
import style from "./login.css";
import { useFormik } from "formik";
import * as Yup from 'yup'

const signUpSchema = Yup.object({
  name:Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your name"),
  password: Yup.string().min(6).required("Please Enter min 6 digit password"),
  repassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
})

const SignUp = () => {

 //--------------RTK Query Fetch------------------
  const { data: login } = useGetLoginDataQuery();
  const [createSignUp] = useSignupMutation()
//   console.log("data", login);

const submitHandler = async (values, action) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
  
    try {
      const response = await createSignUp(data);
      console.log(response);
    } catch (error) {
      console.error("Error creating the user:", error);
    }
    action.resetForm()
  };
  

  const initialValues = {
    email:"",
    password: "",
    repassword: "",
    name: ''
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
            {" "}
            <p>Signup</p>
          </h3>
          <br />
          <form action="" onSubmit={handleSubmit}>
          <input
              type="name"
              placeholder="Enter Your Name"
              required
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />{errors.name && touched.name ? <p className="form-error">{errors.name}</p> : " "}
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
            />{errors.email && touched.email ? <p className="form-error">{errors.email}</p> : " "}
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
            />{errors.password && touched.password ? <p className="form-error">{errors.password}</p> : " "}
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="repassword"
              id="repassword"
              value={values.repassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />{errors.repassword && touched.repassword ? <p className="form-error">{errors.repassword}</p> : " "}
            <p>
              {" "}
              By continuing, I agree to the <cite>Terms of Use</cite> &{" "}
              <cite>Privacy Policy</cite>
            </p>{" "}
            <br />
            <h4>
              {" "}
              <button type="submit" id="submit" class="co">
                REGISTRATION
              </button>
            </h4>
          </form>
          <br />
          <br />
          <p>
            Already have account?<cite>
              <Link to="/login">          
               Log In
               </Link>
               </cite>
          </p>
          <br />
    
        </div>
      </div>
    </div>
  );
};

export default SignUp;
