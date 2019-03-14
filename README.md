# react-project


### 创建过程
 - 创建目录
    ```
     mkdir react-project && cd $_
     mkdir -p src
     yarn init -y
    ```
 - 添加webpack、webpack-cli
    ```
    yarn add webpack webpack-cli -D
    ```
    在package.json 中添加scripts
    ```
    "scripts": {
      "build": "webpack --mode production"
    }
    ```
 - 添加babel
   ```
   yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react -D
   ```
   在根目录创建.babelrc文件
   ```
   {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```
 - 添加react、react-dom
   ```
   yarn add react react-dom
   ```
