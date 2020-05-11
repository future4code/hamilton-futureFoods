import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FeedPage from "../Home/Feed";

const routes = {
  root: "/",
  feedpage: "/feed",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route path={routes.root} component={() => <div />} /> */}
        <Route path={routes.feedpage} component={FeedPage} />
        
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
