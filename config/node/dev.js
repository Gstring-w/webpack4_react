const webpack = require("webpack");
const config = require("../webpack.config");

webpack(config, (err, stats) => {
  if (err || stats.hasErrors) {
    console.log(err);
  } else {
    console.log("打包成功");
  }
});
