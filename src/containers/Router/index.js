import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage"
import FeedPage from "../Home/Feed";

const routes = {
  root:"/",
  signup:"/signup"
   feedpage: "/", //MUDAR ISSO, NÃO PODE FICAR ASSIM

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.feedpage} component={FeedPage} />
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.signup} component={SignUpPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
