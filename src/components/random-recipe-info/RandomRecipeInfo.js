import React from "react";
import s from "./RandomRecipeInfo.module.css";
import { Button, Card } from "../ui";

export default function RandomRecipeInfo({ id, name, synopsis, history }) {
  const routeChange = () => {
    history.push(`recipes/${id}`);
  };
  return (
    <div className={s.RandomRecipeInfo}>
      <Card headText={name} headSize="1" text={synopsis} />
      <Button id="goToRecipe" text="Go to recipe!" onClick={routeChange} />
    </div>
  );
}
