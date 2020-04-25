import React from "react";
// eslint-disable-next-line
import s from "./RecipesPage.module.css";
import { RecipesList } from "../recipes-page-components";
import { withRouter } from "react-router-dom";

const RecipesPage = ({ history }) => {
  return (
    <RecipesList
      onItemSelected={(id) => {
        history.push(`${id}`);
      }}
    />
  );
};

export default withRouter(RecipesPage);
