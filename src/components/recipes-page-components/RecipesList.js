import React, { Component } from "react";
import RecipesData from "../recipes-database/RecipesData";
import { Li, Ul } from "../ui";

import s from "./RecipesList.module.css";

export default class RecipesList extends Component {
  recipes = new RecipesData();

  state = {
    recipesList: null,
  };

  componentDidMount() {
    const recipesList = this.recipes.getAllRecipes();
    this.setState({ recipesList });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <Li
          className={s.ListGroupItem}
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </Li>
      );
    });
  }

  render() {
    const { recipesList } = this.state;

    if (!recipesList) {
      return <div></div>;
    }

    const items = this.renderItems(recipesList);

    return <Ul className={s.RecipesList}>{items}</Ul>;
  }
}
