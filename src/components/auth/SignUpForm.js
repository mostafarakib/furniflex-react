import React, { useState } from "react";

import classes from "./Auth.module.css";
import AuthSideImage from "../UI/AuthSideImage";

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
          <p>Sign up for purchase your desire products</p>
          <form>
            <div className="d-flex gap-0 gap-md-3 flex-column flex-md-row">
              <div className={classes["form-group"]}>
                <label htmlFor="firstName">First name (optional)</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={firstName.length > 0 ? classes["has-value"] : ""}
                />
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="lastName">Last name (optional)</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={lastName.length > 0 ? classes["has-value"] : ""}
                />
              </div>
            </div>
            <div className={classes["form-group"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email.length > 0 ? classes["has-value"] : ""}
              />
            </div>
            <div className={classes["form-group"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={password.length > 0 ? classes["has-value"] : ""}
              />
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
        </div>
      </div>
      <div>
        <AuthSideImage />
      </div>
    </div>
  );
}
