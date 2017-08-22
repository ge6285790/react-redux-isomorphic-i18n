import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import i18nClient from '../../client/i18n/i18n-client';
// import createRoutes from '../routes/routes';
// import configureStores from '../store/configureStore';

/* eslint no-undef: "error" */
/* eslint-env browser */
const i18n = window.$i18n;
i18nClient.changeLanguage(i18n.locale);
i18nClient.addResourceBundle(i18n.locale, 'common', i18n.resources, true);

function App(props) {
  const { store, browserHistory, renderProps } = props;
  return (
    <I18nextProvider i18n={i18nClient}>
      <Provider store={store}>
        <Router history={browserHistory} {...renderProps} />
      </Provider>
    </I18nextProvider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  browserHistory: PropTypes.object.isRequired,
  renderProps: PropTypes.object.isRequired,
};

// class App extends Component {
//   render() {
//     const { store, browserHistory, renderProps } = this.props;
//     return (
//       <I18nextProvider i18n={i18nClient}>
//         <Provider store={store}>
//           <Router history={browserHistory} {...renderProps} />
//         </Provider>
//       </I18nextProvider>
//     );
//   }
// }

export default App;
