// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Items from './containers/Items';
import Item from './containers/Item';
import Charts from './containers/Charts';
export default (
  <Route path="/" component={App}>
     <IndexRoute component={Items} />
     <Route path="/charts" component={Charts} />
     <Route path="/:id" component={Item} />
  </Route>
)