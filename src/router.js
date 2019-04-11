import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import { routes } from './constants/routes';
import App from './routes/app';
import Blogs from './routes/blog/blog';

function RouterConfig({ history }) {
  

  return (
    // <Router history={history}>
    //     <Switch>
    //       {
    //         routes.map(({ path, key, component}) => {
    //           return (
    //             <Route key={key} path={path} exact component={component} />
    //           );
    //         })
    //       }
    //     </Switch>
    // </Router>
    <Router history={history} >
      <Route path='/' render={props => <App {...props}>
      <Switch>
      {
        routes.map(({ path, key, component}) => {
          return (
            <Route key={key} path={path} exact component={component} />
          );
        })
      }</Switch>
      </App>} >
        </Route>
      
    </Router>
  );
}

export default RouterConfig;
