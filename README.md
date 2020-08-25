# react-cli

**命令行工具**，可在项目中执行命令快速生成应用、组件。  
基于 `node.js` 开发，生成 `react` 框架下的各类文件(js,less,json 等等)。  
生成方式：根据现有 template，快速创建 React 组件。

# 详细说明

## 安装方法

克隆本项目代码至本地后，在项目根目录，执行如下命令：

```javascript
npm install -g
```

## 使用方法

在安装本工具后，就可在你的任意项目（根目录）中使用命令快速创建应用/组件了。  
输出命令： `react-cli`

命令格式：

```javascript
react-cli <commmand>[ -n] <name>[ <args>]
```

输出命令可在项目的 `package.json` 中修改 `bin` 字段下的值，来修改为其他命令。

```javascript
  "bin": {
    "react-cli": "./index.js" // 则输出命令: react-cli
  },
```

## 命令参数

```javascript
react-cli -h // 查看帮助
react-cli app[ -n] <name>[ -d <dir>]
// -n 名称，可在第一个参数中省略-n指定。必须参数
// -d 生成目录，默认值：./src/app。可选参数

react-cli component[ -n] <name>[ -d <dir>]
// -n 组件名称，可在第一个参数中省略-n指定。必须参数
// -d 组件生成目录，默认值：./src/components。可选参数
```

## 示例命令

```javascript
react-cli app about                    // 将在项目根目录的 ./src/app/ 下创建一个 about 目录，并在目录中生成相关文件
react-cli app -n appName -d src/views -m // 将在项目根目录的 ./src/app/ 下创建一个 appName 目录，并在目录中生成相关文件
react-cli component comName               // 将在项目根目录的 ./src/components/ 下创建一个 comName 目录，并在目录中生成相关文件
```

## templates

该文件夹下为将要快速生成组件的模板文件，即经过执行命令后，会根据此文件夹下的模板文件生成目标组件。
