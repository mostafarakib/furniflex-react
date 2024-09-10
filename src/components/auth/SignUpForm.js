import React, { useState } from "react";

import AuthSideImage from "../UI/AuthSideImage";
import GoogleSignIn from "./GoogleSignIn";
import AppleSignIn from "./AppleSignIn";
import { Link } from "react-router-dom";

import classes from "./Auth.module.css";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes["auth-container"]}>
      <div className={classes["left-container"]}>
        <div className={classes["form-container"]}>
          <h4>Welcome To</h4>
          <h2>
            Furni<span>Flex</span>
          </h2>
          <p className={classes["form-instructions"]}>
            Sign up for purchasing your desire products
          </p>
          <form>
            <div className="d-flex gap-0 gap-md-3 flex-column flex-md-row">
              <div className={classes["form-group"]}>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={firstName.length > 0 ? classes["has-value"] : ""}
                />
                <label
                  htmlFor="firstName"
                  className={classes["form-group--label"]}
                >
                  First name (optional)
                </label>
              </div>
              <div className={classes["form-group"]}>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={lastName.length > 0 ? classes["has-value"] : ""}
                />
                <label htmlFor="lastName">Last name (optional)</label>
              </div>
            </div>
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
              Sign Up
            </button>
          </form>
          <div className="d-flex gap-3 flex-column flex-md-row mt-3">
            <GoogleSignIn />
            <AppleSignIn />
          </div>
          <p className="mt-2">
            Have an account?{" "}
            <Link className="text-decoration-none" to={"/login"}>
              Sign In
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
