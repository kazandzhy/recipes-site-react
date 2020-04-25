import React from "react";
import { Ul, Li, Link as RLink } from "../ui";
import { Link } from "react-router-dom";

import s from "./PagesList.module.css";

export default function PagesList() {
  return (
    <div className={s.PagesList}>
      <Ul>
        <Li>
          <Link to="/">Sousmate</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/recipes/">Recipes</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
        <Li>
          <RLink
            text="Home"
            target="_blank"
            rel="noopener noreferrer"
            href="http://w3playground.com/"
          />
        </Li>
      </Ul>
    </div>
  );
}
