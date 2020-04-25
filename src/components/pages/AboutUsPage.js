import React from "react";
import s from "./AboutUsPage.module.css";
import Logo from "../../assets/images/sousmate.png";
import Team from "../../assets/images/team.jpg";
import { Image, Card } from "../ui";

export default function AboutUsPage() {
  return (
    <div className={s.AboutUsPage}>
      <div className={s.AboutUsContent}>
        <h1>About Us</h1>

        <Image src={Logo} alt="Sousmate Logo" className={s.Logo} />

        <Card
          text="Sousmate has existed for more than 10 years, and we have over 1 million
        subscribers. We like to cook like you, and we are glad to help you make
        your favorite recipes and simplify this process."
          className={s.AboutUsMsg}
        />

        <Image src={Team} alt="Sousmate team" className={s.Team} />

        <Card
          text="Sousmate has about 100 employees, and our site is constantly being
        improved and updated. Here you can easily find the recipes that suit
        your whole family according to the time you have to cook it."
          spanText="Enjoy cooking even more with us!"
          className={s.AboutUsMsg2}
        />
      </div>
    </div>
  );
}
