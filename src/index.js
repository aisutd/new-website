import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import UserProvider from "providers/UserProvider";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Main from "views/Main/Main";
import TeamPage from "views/TeamPage/TeamPage";

import history from './history'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page">
        <UserProvider>
          <ProfilePage/>
        </UserProvider>
      </Route>
      <Route path="/login-page">
        <UserProvider>
          <LoginPage/>
        </UserProvider>
      </Route>
      <Route path="/team" component={TeamPage} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
