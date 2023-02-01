import { Fragment } from "react";
import logo from "./../../assets/images/logo.svg";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <img src={logo}></img>
        <button>Try It Free</button>  
      </nav>
    </Fragment>
  );
};

export default NavBar;
