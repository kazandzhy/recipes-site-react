import React from "react";
import "./App.css";
import Nav from "../nav";
import Footer from "../footer";
import { HomePage, AboutUsPage, RecipesPage, ContactUsPage } from "../pages";
import ContentContainer from "../content-container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecipesDetails } from "../recipes-page-components";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <ContentContainer>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutUsPage} />
            <Route path="/recipes" exact component={RecipesPage} />
            <Route
              path="/recipes/:id"
              render={({ match }) => {
                let { id } = match.params;
                id = parseInt(id);
                return <RecipesDetails itemId={id} />;
              }}
            />
            <Route path="/contact" component={ContactUsPage} />
            <Route
              render={() => (
                <div className="UnknownPage">
                  <h1>Page not found</h1>
                </div>
              )}
            />
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </div>
  );
}
