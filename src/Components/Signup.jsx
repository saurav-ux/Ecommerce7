import React from "react";
import { Link } from "react-router-dom";
import { useGetLoginDataQuery, useSignupMutation } from "../Services/loginApi";
import loginImage from "../Images/loginImage.webp";
import style from "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { DialogContent, TextField } from "@mui/material";
const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your name"),
  password: Yup.string().min(6).required("Please Enter min 6 digit password"),
  repassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

const SignUp = () => {
  const loginStatus = useSelector((state) => state.containerr.logstatus);
  console.log("loginStatus ", loginStatus);

  //--------------RTK Query Fetch------------------
  const { data: login } = useGetLoginDataQuery();
  const [createSignUp] = useSignupMutation();
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
    action.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
    repassword: "",
    name: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: submitHandler,
      //  (values)=>{
      //     console.log("Values",values)
      // }
    });
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
            <p>Signup</p>
          </h3>
          {/* <br /> */}
          <DialogContent classes={{ root: "p-16 pb-0 sm:p-32 sm:pb-0" }}>
            <form action="" onSubmit={handleSubmit}>
              <TextField
                className="textfield"
                type="name"
                placeholder="Enter Your Name"
                required
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              {/* {errors.name && touched.name ? <p className="form-error">{errors.name}</p> : " "} */}
              <br />
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
              <TextField
                className="textfield"
                type="password"
                placeholder="Confirm Password"
                required
                name="repassword"
                id="repassword"
                value={values.repassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.repassword && Boolean(errors.repassword)}
                helperText={touched.repassword && errors.repassword}
              />
              <br /> <br />
              <p>
                {" "}
                By continuing, I agree to the <cite>Terms of Use</cite> &{" "}
                <cite>Privacy Policy</cite>
              </p>{" "}
              <h4>
                {" "}
                <button type="submit" id="submit" class="co">
                {/* <Link to="/login"> */}
                  REGISTRATION
                 {/* </Link> */}
                </button>
              </h4>
            </form>
          </DialogContent>

          <p>
            Already have account?{" "}
            <cite>
              <Link to="/login">Log In</Link>
            </cite>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
