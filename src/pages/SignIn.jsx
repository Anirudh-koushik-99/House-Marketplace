import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    passord: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              value={email}
              onChange={onChange}
              id="email"
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                value={password}
                id="password"
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill="white" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
        <Link className="registerLink" to='/sign-up'>Sign Up Instead</Link>
      </div>
    </>
  );
}

export default SignIn;
