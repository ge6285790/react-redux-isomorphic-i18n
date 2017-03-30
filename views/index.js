// 資料處理掛件
import serialize from 'serialize-javascript';

export default function (url, html, initialState, i18nClient) {
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
