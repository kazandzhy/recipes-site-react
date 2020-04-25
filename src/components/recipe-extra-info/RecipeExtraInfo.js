import React from "react";
import s from "./RecipeExtraInfo.module.css";
import { Card, Link } from "../ui";

export default function RecipeExtraInfo() {
  return (
    <div className={s.RecipeExtraInfo}>
      <Card
        headText="Looking for recipes?"
        headSize="2"
        text="Discover more than a thousand fantastic recipes with Sousmate. You will love them!"
        className={s.ExtraInfo}
      />
      <Card
        headText="Recipes by Ingredient"
        headSize="2"
        text="Narrow your search by main ingredient to find recipes and meal ideas quickly:"
        link={
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.myrecipes.com/ingredients"
            text="myrecipes.com"
          />
        }
        className={s.ExtraLink}
      />
      <Card
        headText="Who we are?"
        headSize="2"
        text="Sousmate has existed for 10 years. We have 1 million subscribers and more than 100 employees."
        className={s.ImportantInfo}
      />
    </div>
  );
}
