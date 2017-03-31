// React 相關掛件
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { merge } from 'lodash';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n-server';

// 載入 views template
import indexTemplate from '../../views/index';

// React Component 資訊
import createRoutes from '../../common/routes/routes';
import reducers from '../../common/reducers/index';

// Server 端使用
import promiseMiddleware from '../../common/middleware/promiseMiddleware';
import fetchComponentsData from '../utils/fetchComponentsData';

const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
const store = finalCreateStore(reducers);
const routes = createRoutes(store);

function i18nResource(locale, locales) {
  // if (!locales) {
  //   return;
  // }
  let obj;
  for (const val of locales) {
    const resource = i18n.getResourceBundle(locale, val);
    obj = merge(obj, resource);
  }
  return obj;
}

export default function isomorphic(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.send(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const components = renderProps.components[renderProps.components.length - 1].WrappedComponent;

      // i18n
      let locale = (req.locale.indexOf('zh') === -1 && req.locale.indexOf('en') === -1) ? 'en' : req.locale;
      if (undefined !== req.cookies.isomorphicI18nextLang) {
        locale = req.cookies.isomorphicI18nextLang;
      } else {
        res.cookie('isomorphicI18nextLang', locale);
      }
      renderProps.params.locale = locale;
      const resources = (undefined !== components.locales) ? i18nResource(locale, components.locales) : i18nResource(locale, ['common']);
      const i18nClient = { locale, resources };
      const i18nServer = i18n.cloneInstance();
      i18nServer.changeLanguage(locale);

      fetchComponentsData(store.dispatch, components, renderProps.params)
        .then(() => {
          const initView = renderToString((
            <I18nextProvider i18n={i18nServer}>
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            </I18nextProvider>
          ));
          // console.log(initView);
          const state = store.getState();
          return indexTemplate(req.url, initView, state, i18nClient);
        })
        .then((page) => {
          res.status(200).send(page);
        });
    } else {
      res.redirect('/oops');
    }
  });
}
