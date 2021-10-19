import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { BiCartAlt } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className={classes.appNavbar}>
        <div className={classes.navbarContainer}>
          <div className={classes.navbarLogo}>Logo</div>
          <ul className={classes.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
          <div className={classes.navbarOtherIcons}>
            <BiLogOut className={classes.icon} />

            <BiCartAlt className={classes.icon} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
