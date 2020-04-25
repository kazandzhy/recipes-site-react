import React from "react";
import logo from "../../assets/images/sousmate.png";
import { Image } from "../ui";

import "./ImgLogo.css";
export default function ImgLogo() {
  return <Image id="logo" src={logo} alt="Sousmate Logo" />;
}
