import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import {
  LockOutlined,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
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
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
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
            variant="outlined"
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
        <a href="/" className="forgot-password-link">
          Forgot password?
        </a>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account?{" "}
        <a href="/register" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Login;
