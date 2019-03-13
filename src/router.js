import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import  {routes} from './constants/routes';
function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        {
          routes.map(({ path, key, component}) => {
            return (
              <Route key={key} path={path} exact component={component} />
            );
          })
        }
        {/* <Route path="/blog" exact component={Blogs} />
        <Route path="/login" exact component={Login} />
        <Route path="/blog/desc" exact component={BlogDesc} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
