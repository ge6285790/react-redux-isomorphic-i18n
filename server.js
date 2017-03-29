import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import compression from 'compression';
import config from './webpack.client.dev.config';
import isomorphic from './server/middleware/isomorphic';
import init from './server/middleware/init';


const app = express();

const PORT = process.env.PORT || 7000;

init(app);


app.get('*', (req, res) => {
  isomorphic(req, res);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
