import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
// import setAuthToken from "./utils/setAuthToken";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import Recipes from "./components/layout/Recipes"
import Postrecipe from "./components/layout/Postrecipe"
import Review from "./components/layout/Review"

import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        {/* <Navbar /> */}
        <section>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/recipes" component={Recipes} />
            <PrivateRoute exact path="/post/recipe" component={Postrecipe} />
            <PrivateRoute exact path="/post/review" component={Review} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
}

export default App;
