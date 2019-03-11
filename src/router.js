import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import B from './routes/b/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/b" exact component={B} />
        {/* <Route path="/c" exact component={IndexPage} /> */}
        {/* <Route path="/d" exact component={IndexPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
