import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";
import HeaderSection from "./Section/HeaderSection";

const Header = () => {
  return (

    <header className={classes.header}>
      <NavBar></NavBar>
      <HeaderSection />
    </header>
  );
};

export default Header;
