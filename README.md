# webpack4_react

##### package.json 使用以下版本

```
"dependencies": {
    "react": "^16.4.1",
    "react-dom": "^16.4.1"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "cross-env": "^5.2.0",
    "html-webpack-plugin": "^3.2.0",
    "react-hot-loader": "^4.3.4",
    "webpack": "^4.16.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.4"
  }
```
#### 初始化init
```
mkdir react_project
cd react_project
npm init -y
```
#### 安装webpack
```
npm i webpack@4 webpack-cli@3 -D
```
==注：在webpack3 中，webpack和它的-cli都是在同一个包中，但在低4版中，他们已经将两者分开了==

#### 搭建react环境
- 安装react
```
npm i react react-dom -S
```
- 安装babel-loader
```
npm i @babel/core babel-loader@8 @babel/preset-env @babel/preset-react
```

- 新建.babelrc
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- 在webpack.config.js
```
const path = require("path")
module.exports = {
    entry:{
        app:"./src/index.js"
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"./dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    }
}
```

- 在src目录下创建index.html(作为html模板)
```
```
