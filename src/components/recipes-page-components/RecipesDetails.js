import React, { Component } from "react";
import Images from "../../assets";
import { Image, Li, Ol } from "../ui";
import RecipesData from "../recipes-database/RecipesData";
import CookTime from "../cook-time";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import s from "./RecipesDetails.module.css";

export default class RecipesDetails extends Component {
  recipes = new RecipesData();
  ingrKey = 0;
  instrKey = 0;

  state = {
    recipe: null,
    loading: true,
    error: false,
    imageLoading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onLoadImage = () => {
    this.setState({
      imageLoading: false,
    });
  };

  onRecipeLoaded = (recipe) => {
    this.setState({
      recipe,
      loading: false,
      error: false,
    });
  };

  onError = (error) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onLoad = () => {
    this.setState({
      loading: true,
      error: false,
    });
  };

  updateItem() {
    this.onLoad();
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    const recipe = this.recipes.getRecipe(itemId);
    try {
      this.onRecipeLoaded(recipe);
    } catch (error) {
      this.onError(error);
    }
  }

  renderIngredients(ingrs) {
    return ingrs.map((ingr) => {
      this.ingrKey++;
      return <Li key={this.ingrKey}>{ingr}</Li>;
    });
  }

  renderInstructions(instrs) {
    return instrs.map((instr) => {
      this.instrKey++;
      return <Li key={this.instrKey}>{instr}</Li>;
    });
  }

  render() {
    const { recipe, loading, error, imageLoading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const [{ name, id, yields, cookTime, ingredients, instructions }] = recipe;
    const ingrs = this.renderIngredients(ingredients);
    const instrs = this.renderInstructions(instructions);

    return (
      <div className={s.RecipesDetails}>
        <div className={s.RecipeContent}>
          <h1>{name}</h1>
          <Image
            src={Images[id]}
            alt="Recipe Image"
            onLoad={this.onLoadImage}
          />
          <p>Yield: {yields} servings</p>
          <CookTime cookTime={cookTime} />
          <Ol headText="Ingredients">{ingrs}</Ol>
          <Ol headText="Instructions">{instrs}</Ol>
        </div>
      </div>
    );
  }
}
