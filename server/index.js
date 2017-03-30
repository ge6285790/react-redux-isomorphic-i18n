import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import compression from 'compression';
import config from '../webpack.client.dev.config';
import isomorphic from './middleware/isomorphic';
import init from './middleware/init';


const app = express();

const PORT = process.env.PORT || 7070;

init(app);


app.get('/favicon.ico', (req, res) => {
  console.log('aaaa');
  req.send();
});

app.get('*', (req, res, next) => {
  // if (req.url.indexOf('/api') !== -1 || req.url.indexOf('/favicon.ico') !== -1) {
    // console.log('==')
    isomorphic(req, res);
  // }
  // next();
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
