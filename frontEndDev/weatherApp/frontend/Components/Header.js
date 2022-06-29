import React from "react";
import HeaderStyles from "../cssModules/Header.module.css";

function Header({ children, ...props }) {
  return (
    <React.Fragment>
      <h1 className={HeaderStyles[`page-title`]}>This is a title.</h1>
    </React.Fragment>
  );
}

export default Header;
