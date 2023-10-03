import React from "react";
import { useGetLoginDataQuery } from "../Services/loginApi";
import loginImage from "../Images/loginImage.webp";
import style from "./login.css";
const LoginPage = () => {
  const { data: login } = useGetLoginDataQuery();
  console.log("data", login);
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
          <form action="">
            <input
              type="text"
              placeholder="+91 | Mobile Number"
              required
              id="submit"
            />{" "}
            <br />
            <br />
            <p>
              {" "}
              By continuing, I agree to the <cite>Terms of Use</cite> &{" "}
              <cite>Privacy Policy</cite>
            </p>{" "}
            <br />
            <h4>
              {" "}
              <button type="reset" id="submit" class="co">
                CONTINUE
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
