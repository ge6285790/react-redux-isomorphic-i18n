import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match } from 'react-router';

import App from '../common/components/App';
import createRoutes from '../common/routes/routes';
import configureStore from '../common/store/configureStore';
import reducers from '../common/reducers/index';

/* eslint no-undef: "error" */
/* eslint-env browser */
const state = JSON.parse(window.$REDUX_STATE);
const store = configureStore(state, reducers);
const routes = createRoutes(store);

window.reactCookie = require('react-cookie');


match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <App
      store={store}
      browserHistory={browserHistory}
      renderProps={renderProps}
    />, document.getElementById('root'),
  );
});
