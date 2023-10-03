import React from "react";
import { useGetLoginDataQuery,useSignupMutation } from "../Services/loginApi";
import loginImage from "../Images/loginImage.webp";
import style from "./login.css";
import { useFormik } from "formik";
const LoginPage = () => {

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
 const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
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
            <p>Login or Signup</p>
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
            />{" "}
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
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="repassword"
              id="repassword"
              value={values.repassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
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
            Have trouble logging in?<cite> Get help</cite>
          </p>
          <br />
          <br /> <br />
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
