import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import Accessories from "./Accessories/Accessories";
import classes from "./Home.module.css";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <>
      <div className={classes.homepage}>
        <div className={classes.homepageContainer}>
          <Slider></Slider>
          <Accessories></Accessories>
        </div>
      </div>
    </>
  );
};

export default Home;
