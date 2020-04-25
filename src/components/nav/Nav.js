import React from "react";

import "./Nav.css";
import ImgLogo from "../img-logo";
import PagesList from "../pages-list";

export default function Nav() {
  return (
    <nav id="navContainer" className="Nav">
      <ImgLogo />
      <PagesList />
    </nav>
  );
}
