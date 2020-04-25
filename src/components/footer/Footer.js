import React from "react";
import s from "./Footer.module.css";
import PagesList from "../pages-list";
import Copyright from "../copyright";

export default function Footer() {
  return (
    <div className={s.Footer}>
      <div className={s.FooterContent}>
        <div className={s.VerticalPagesList}>
          <PagesList />
        </div>
        <Copyright />
      </div>
    </div>
  );
}
