import React, { Component } from "react";
import RandomRecipe from "../random-recipe";
import MailingList from "../mailing-list";
import RecipeExtraInfo from "../recipe-extra-info";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <RandomRecipe />
        <RecipeExtraInfo />
        <MailingList />
      </div>
    );
  }
}
