import React from "react";
import heroImage from "../../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import logo from "../../assets/icon.png";

import classes from "./AuthSideImage.module.css";

export default function AuthSideImage() {
  return (
    <div className={classes["image-container"]}>
      <img className={classes.image} src={heroImage} alt="" />
      <div className={classes.content}>
        <img src={logo} alt="" />
        <h2>
          Furni<span>Flex</span>
        </h2>
        <p>
          Discover a seamless shopping experience with our curated collection of
          products. From fashion to electronics, we bring quality.
        </p>
      </div>
    </div>
  );
}
