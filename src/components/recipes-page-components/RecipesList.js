import React, { Component } from "react";
import RecipesData from "../recipes-database/RecipesData";
import { Li, Ul } from "../ui";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import s from "./RecipesList.module.css";

export default class RecipesList extends Component {
  recipes = new RecipesData();

  state = {
    recipesList: null,
    loading: true,
    error: false,
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    this.recipes
      .getAllRecipes()
      .then((data) =>
        this.setState({
          recipesList: data,
          loading: false,
          error: false,
        })
      )
      .catch(this.onError);
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
    const { recipesList, loading, error } = this.state;

    if (!recipesList) {
      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }
    }

    const items = this.renderItems(recipesList);

    return <Ul className={s.RecipesList}>{items}</Ul>;
  }
}
