import React, { Component } from 'react';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';
import createRoutes from '../routes/routes';
import configureStores from '../store/configureStore';

class App extends Component {
  render() {
    const { store, browserHistory, renderProps } = this.props;
    // console.log('renderProps', [...renderProps]);
    return (
      <Provider store={store}>
        <Router history={browserHistory} {...renderProps} />
      </Provider>
    );
  }
}

export default App;
