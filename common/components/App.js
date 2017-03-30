import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18nClient from '../../client/i18n/i18n-client';
// import createRoutes from '../routes/routes';
// import configureStores from '../store/configureStore';

/* eslint no-undef: "error" */
/* eslint-env browser */
const i18n = window.$i18n;
i18nClient.changeLanguage(i18n.locale);
i18nClient.addResourceBundle(i18n.locale, 'common', i18n.resources, true);

class App extends Component {
  render() {
    const { store, browserHistory, renderProps } = this.props;
    // console.log('renderProps', [...renderProps]);
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18nClient}>
          <Router history={browserHistory} {...renderProps} />
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;
