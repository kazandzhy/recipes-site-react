import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./RandomRecipe.module.css";
import { Image } from "../ui";
import RandomRecipeInfo from "../random-recipe-info";
import Images from "../../assets";
import RecipesData from "../recipes-database/RecipesData";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { withRouter } from "react-router-dom";

class RandomRecipe extends Component {
  static defaultProps = {
    updateInterval: 8000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  recipes = new RecipesData();

  state = {
    recipe: null,
    loading: true,
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateRecipe();
    this.interval = setInterval(this.updateRecipe, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

  updateRecipe = () => {
    const id = Math.floor(Math.random() * 10 + 1);
    const recipe = this.recipes.getRecipe(id);
    try {
      this.onRecipeLoaded(recipe);
    } catch (error) {
      this.onError(error);
    }
  };

  render() {
    const { recipe, loading, error } = this.state;
    const { history } = this.props;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;

    const content = hasData ? (
      <RecipeView recipe={recipe} history={history} />
    ) : null;

    return (
      <div className={s.RandomRecipe}>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const RecipeView = ({ recipe, history }) => {
  const [{ name, synopsis, id }] = recipe;

  return (
    <React.Fragment>
      <Image id="randomRecipeImg" src={Images[id]} alt="" />
      <RandomRecipeInfo
        name={name}
        synopsis={synopsis}
        id={id}
        history={history}
      />
    </React.Fragment>
  );
};

export default withRouter(RandomRecipe);
