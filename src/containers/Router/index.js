import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import MyAdress from "../MyAdress"
import FeedPage from "../Home/Feed";

export const routes = {
  //root:"/",
  signup:"/signup",
  feedpage: "/", 
  myadress:"/myadress"

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route exact path={routes.root} component={LoginPage} /> */}
        <Route exact path={routes.signup} component={SignUpPage} />
        <Route exact path={routes.feedpage} component={FeedPage} />
        <Route exact path={routes.myadress} component={MyAdress} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect() (Router);
