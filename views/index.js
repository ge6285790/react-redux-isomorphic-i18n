// 資料處理掛件
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';
import React, { Component } from 'react';
// import { renderToString } from 'react-dom/server';

export default class Html extends Component {
  render() {
    const { url, html, initialState, i18nClient, assets } = this.props;
    const meta = DocumentMeta.renderAsHTML();

    const styleArray = process.env.NODE_ENV !== 'production' ? Object.keys(assets.assets).map((style, i) => {
      return (
        <style key={style}>
          {assets.assets[style]['_style']}
        </style>
      )
      // <link href={assets.styles[style]} key={i} media="screen, projection" rel="stylesheet" type="text/css" />,
    }) : null;


    return (
        <html lang="utf-8">
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="descripti2efon" content="" />
            <link rel="shortcut icon" href="/asset/img/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            {styleArray}

            { Object.keys(assets.styles).length === 0 ? <link href="/asset/css/main.css" rel="stylesheet" type="text/css" /> : null }
          </head>
          <body>
            <div id="root">{html}</div>
            <script dangerouslySetInnerHTML={{ __html: `window.$REDUX_STATE=${serialize(JSON.stringify(initialState))};` }} charSet="UTF-8" />
            <script dangerouslySetInnerHTML={{ __html: `window.$i18n=${serialize(i18nClient)};` }} charSet="UTF-8" />
            <script src={assets.javascript.main} charSet="UTF-8" />
          </body>
        </html>
    );
  }
}

// export default function (url, html, initialState, i18nClient, style) {
//
//   console.log('meta', meta);
//
//   // console.log('style', style)
//   return (
//     `<!doctype html>
//       <html lang='utf-8'>
//         <head>
//             <meta charset='utf-8'>
//             <meta http-equiv='X-UA-Compatible' content='IE=edge'>
//             <meta name='viewport' content='width=device-width, initial-scale=1'>
//             <meta name='descripti2efon' content=''>
//             <link rel='shortcut icon' href='/asset/img/favicon.ico' type='image/x-icon' />
//             <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' />
//             ${style.map((item) => {
//               return renderToString((item));
//             })}
//             ${meta}
//             ${css}
//             <title>isomorphic</title>
//         </head>
//         <body>
//           <div id='root'>${html}</div>
//           <script>window.$REDUX_STATE = ${serialize(JSON.stringify(initialState))}</script>
//           <script>window.$i18n = ${serialize(i18nClient)}</script>
//
//           <script async src=${js}></script>
//         </body>
//       </html>`
//   );
// }
