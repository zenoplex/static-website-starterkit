import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

const app = express();
app.use(express.static('./dist'));
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats:      {colors: true}
}));
app.use(webpackHotMiddleware(compiler));
const server = app.listen(3000, () => {
  const {host, port} = server.address();
  console.log(`server up and running on ${host}:${port}`);
});
