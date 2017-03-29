// React 相關掛件
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { merge } from 'lodash';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n-server';

// 資料處理掛件
import serialize from 'serialize-javascript';

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
  let obj;
  for (const val of locales) {
    const resource = i18n.getResourceBundle(locale, val);
    obj = merge(obj, resource);
  }
  return obj;
}

function renderFullPage(url, html, initialState, i18nClient) {
  const js = (process.env.NODE_ENV === 'development') ? '/asset/js/bundle/bundle.js' : '/asset/js/bundle/bundle.min.js';
  const css = (process.env.NODE_ENV === 'development') ? '' : '<link rel=stylesheet type="text/css" href="/asset/css/bundle/bundle.min.css">';
  return (
    `<!doctype html>
      <html lang='utf-8'>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <meta name='descripti2efon' content=''>
            <link rel='shortcut icon' href='/asset/img/favicon.ico' type='image/x-icon' />
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' />
            ${css}
            <title>isomorphic</title>
        </head>
        <body>
          <div id='root'>${html}</div>
          <script>window.$REDUX_STATE = ${serialize(JSON.stringify(initialState))}</script>
          <script>window.$i18n = ${serialize(i18nClient)}</script>
          <script async src=${js}></script>
        </body>
      </html>`
  );
}

export default function isomorphic(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.send(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const components = renderProps.components[renderProps.components.length - 1].WrappedComponent;

      console.log('req', req.headers["accept-language"], req.locale);
      // i18n
      let locale = (req.locale.indexOf('zh') === -1 && req.locale.indexOf('en') === -1) ? 'en' : req.locale;
      if (undefined !== req.cookies.kyleI18nextLang) {
        locale = req.cookies.kyleI18nextLang;
      } else {
        res.cookie('kyleI18nextLang', locale);
      }
      renderProps.params.locale = locale;

      const resources = (undefined !== components.locales) ? i18nResource(locale, components.locales) : i18nResource(locale, ['common']);
      const i18nClient = { locale, resources };
      const i18nServer = i18n.cloneInstance();
      i18nServer.changeLanguage(locale);
      fetchComponentsData(store.dispatch, components, renderProps.params)
        .then(() => {
          const initView = renderToString((
            <Provider store={store}>
              <I18nextProvider i18n={i18nServer}>
                <RouterContext {...renderProps} />
              </I18nextProvider>
            </Provider>
          ));
          const state = store.getState();
          return renderFullPage(req.url, initView, state, i18nClient);
        })
        .then((page) => {
          res.status(200).send(page);
        });
    } else {
      res.send(404, 'Not found');
    }
  });
}
