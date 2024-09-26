import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import {
  LockOutlined,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const [passwordType, setPasswordType] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
    setPasswordType(!passwordType);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="main-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "-10vw",
      }}
    >
      <p style={{ color: "white", fontSize: "8vw", marginInline: "4%" }}>
        Sign
      </p>
      <div className="login-container">
        <h2 className="form-title">Sign up with</h2>
        <SocialLogin />
        <p className="separator">
          <span>or</span>
        </p>
        <form className="login-form">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBlock: "5%",
            }}
          >
            <MailOutline />
            <TextField
              required
              onChange={handleChange}
              name="email"
              type="email"
              label="Email"
              style={{ width: "100%", margin: "2%" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <LockOutlined />
            <TextField
              required
              onChange={handleChange}
              name="password"
              variant="outlined"
              type={passwordType ? "text" : "password"}
              label="Password"
              style={{ width: "100%", margin: "2%" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={createAccount}
          >
            Sign Up
          </button>
        </form>
        <p className="signup-prompt">
          Already have an account?{" "}
          <a href="/login" className="signup-link">
            Log in
          </a>
        </p>
      </div>
      <p
        style={{
          color: "white",
          fontSize: "8vw",
          marginInline: "4%",
        }}
      >
        Up
      </p>
    </div>
  );
}

export default Signup;
