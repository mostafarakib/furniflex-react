import React, { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import AppleSignIn from "./AppleSignIn";
import { Link } from "react-router-dom";
import AuthSideImage from "../UI/AuthSideImage";

import classes from "./Auth.module.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes["auth-container"]}>
      <div className={classes["left-container"]}>
        <div className={classes["form-container"]}>
          <h4>Welcome Back!</h4>
          <p className={classes["form-instructions"]}>
            Enter your credentials to access your account
          </p>
          <form>
            <div className={classes["form-group"]}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email.length > 0 ? classes["has-value"] : ""}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className={classes["form-group"]}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={password.length > 0 ? classes["has-value"] : ""}
              />
              <label htmlFor="password">Password</label>
              <p className={classes["forgot-password-button"]}>
                Forgot Password?
              </p>
            </div>
            <div className="d-flex align-items-center gap-1">
              <input type="checkbox" id="termsCheckbox" />
              <label htmlFor="termCheckbox">
                I agree to the{" "}
                <span className="text-decoration-underline">
                  Terms & Policy
                </span>
              </label>
            </div>
            <button className={classes["submit-button"]} type="submit">
              Sign In
            </button>
          </form>
          <div className="d-flex gap-3 flex-column flex-md-row mt-3">
            <GoogleSignIn />
            <AppleSignIn />
          </div>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div>
        <AuthSideImage />
      </div>
    </div>
  );
}
