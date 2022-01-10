## webpack-demo

1. 初始化npm

`npm init`

2. 新建.npmrc配置文件

`registry=https://registry.npm.taobao.org`

3. 安装webpack

`npm i webpack webpack-cli -D`

这里咱们用`"webpack": "^4.7.0"`版本, 方面看chunk和bundle的关系.

4. 创建src目录, 编写代码内容

* add.js 加法
* multiply.js 乘法(没有被任何模块引入)
* common.js 公用函数, 打印输出
* index.js 入口文件, 引用add和common模块

5. 新建webpack.config.js

简单写点配置, index.js配置为entry.

```js
module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].js"
    }
};
```

6. 运行webpack 

`npx webpack`

7. 把运行命令添加到npm scripts中

```json
"build": "rm -rf dist && npx webpack"
```

`npm run build`
