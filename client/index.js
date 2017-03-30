import React from 'react';
import { render } from 'react-dom';
import { browserHistory, match } from 'react-router';

import App from '../common/components/App';
import createRoutes from '../common/routes/routes';
import configureStore from '../common/store/configureStore';
import reducers from '../common/reducers/index';
import i18nClient from '../common/i18n/i18n-client';

/* eslint no-undef: "error" */
/* eslint-env browser */
const state = JSON.parse(window.$REDUX_STATE);
const store = configureStore(state, reducers);
const routes = createRoutes(store);

const i18n = window.$i18n;
window.reactCookie = require('react-cookie');

i18nClient.changeLanguage(i18n.locale);
i18nClient.addResourceBundle(i18n.locale, 'common', i18n.resources, true);

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <App
      store={store}
      browserHistory={browserHistory}
      renderProps={renderProps}
    />, document.getElementById('root'),
  );
});
