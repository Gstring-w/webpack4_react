##### package.json 使用以下版本

```
{
  "name": "webpack4",
  "version": "1.0.0",
  "description": "\"项目脚手架\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development --config  ./config/webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "@babel/preset-react": "^7.0.0",
    "autoprefixer": "^9.5.1",
    "babel-loader": "^8.0.5",
    "clean-webpack-plugin": "^2.0.1",
    "css-loader": "^2.1.1",
    "cssnano": "^4.1.10",
    "glob-all": "^3.1.0",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "postcss": "^7.0.14",
    "postcss-cssnext": "^3.1.0",
    "postcss-loader": "^3.0.0",
    "purify-css": "^1.2.5",
    "purifycss-webpack": "^0.7.0",
    "react-hot-loader": "^4.8.3",
    "sass-loader": "^7.1.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-deep-scope-plugin": "^1.6.0"
  },
  "dependencies": {
    "html-webpack-plugin": "^3.2.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
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

babel7之后的babel 名称都改为@babel...
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

#### 热模块更新
- 在src目录下创建index.html(作为html模板)
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>react</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```
- 安装
```
npm i react-hot-loader -S
```
- 重新编辑/src/App.js
```
import React,{Compoent} from 'react';
import { hot } from "react-hot-loader";


class App extends Component{
    return (
        <div>
            hello world!!
        </div>
    )
}
export default hot(module)(App)

```
- 编辑babelrc
```
{
    "presets":["@babel/preset-env","@babel/preset-react"],
    "plugins":["react-hot-loader/babel"]
}
```


#### 加载scss
- 安装
```
npm install style-loader css-loader sass-loader node-sass -D
```
- 在webpack.config.js添加配置
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
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader',"sass-loader"]
            }
        ]
    }
}
```

#### 添加postCss

- 安装
```
npm i postcss postcss-loader autoprefixer cssnano postcss-cssnext -D
```
- 在webpack.config.js配置
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
            },
            {
                test:/\.scss$/,
                use:[
                'style-loader',
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        ident:'postcss'
                        plugins:[
                            require('autoprefixer')()
                        ]
                    }
                },
                "sass-loader"]
            }
        ]
    }
}
```
