import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Home from 'views/Home';
import NotFound from 'views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />

          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}
