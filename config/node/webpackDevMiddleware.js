//webpack-dev-middleware 和模块热替换
const express = require("express");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
const webpack = require("webpack");
const config = require("../webpack.config");
const compiler = webpack(config);
app.use(
  WebpackDevMiddleware(compiler, {
    //配置

    stats: {
      colors: true
    },
    serverSideRender: true
  })
);

//热模块
// 为了支持模块热更新，响应用于替换老模块的资源

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("."));
app.listen(3000, () => {
  console.log("http:://localhost:3000");
});
