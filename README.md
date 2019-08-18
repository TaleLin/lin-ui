
<p align="center">
  <!-- <a href="http://doc.mini.7yue.pro/"> -->
    <img
      class="QR-img" src="http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEZWVFhTU3I2YnRTVnB6VHZsbHR0SzJtMHNCK28rUE41QzljaFBmdmc2ZUFBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">
  <!-- </a> -->
</p>

<div align="center"> <span class="logo" > Lin UI </span> </div>

<div class="row" />

<div align="center">
  <span class="desc" >Fantastic native based Mini-Programe components</span> 
</div>

<div align="center">

![](https://img.shields.io/badge/build-passing-00d508.svg)
![](https://img.shields.io/badge/version-0.5.15-3963bc.svg)
![](https://img.shields.io/badge/license-MIT-3963bc.svg)

</div>

<div align="center">

![](https://img.shields.io/badge/less-^2.7.3-00d508.svg)
![](https://img.shields.io/badge/eslint-^5.0.1-00d508.svg)
![](https://img.shields.io/badge/cli-0.0.1.alpha.1-3963bc.svg)
![](https://img.shields.io/badge/npm-v3.0.0+-00d508.svg)
![](https://img.shields.io/badge/gulp-v3.9.1-00d508.svg)
![](https://img.shields.io/badge/node-v8.11.0+-00d508.svg)

</div>

# 简介

Lin UI 是基于 **微信小程序原生语法** 实现的组件库。遵循简洁，易用的设计规范。

## 最新版本

核心库：0.5.15

示例工程：0.0.1-alpha.2


## 文档地址

http://doc.mini.7yue.pro/ 

## 讨论交流
QQ群号：699501172 <br/>

<img class="QR-img" style="height: 100px; width:100px" src="http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdlNThuRmI4TFh3YVczZzB1N3BrbithelM1OFZMb09SSDNuQSs5V0RhM2lBPT0.jpg?imageView&thumbnail=250x0&quality=96&stripmeta=0&type=jpg">


## 微信公众号
微信搜索：林间有风 <br/>

<img class="QR-img" style="height: 100px; width:100px"  src="http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdlNThuRmI4TFh3UWhiNmladWVoaTlXUXpicEFPa1F6czFNYkdmcWRIbGRRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">


## 快速上手

Lin UI 致力于给小程序开发者提供愉悦的开发体验。
> 在开始之前，推荐先学习微信官方的[小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101612)，并正确安装和配置了 Node.js v8或以上。 同时，我们假设你已了解关于 HTML、CSS 和 JavaScript 的初级知识，并且已经熟悉并阅读了[小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

Lin UI提供两种安装方法，满足不同开发者的需求。如果您需要使用`npm`安装，请确保您已经在本机安装了`npm`。

### 方式一： 使用npm安装 （推荐）

打开小程序的项目根目录，执行下面的命令。

```base
npm install lin-ui --production
```

执行成功后，会在根目录里生成项目依赖文件夹 `node_modules/lin-ui` （小程序IDE的目录结构里不会显示此文件夹）。
<br/>
然后用小程序官方IDE打开我们的小程序项目，找到 `工具` 选项，点击下拉选中 `构建npm` ，等待构建完成即可。

出现上图所示的结果后，可以看到小程序IDE工具的目录结构里多出了一个文件夹 `miniprogram_npm`（之后所有通过 `npm ` 引入的组件和 `js` 库都会出现在这里），打开后可以看到 `lin-ui` 文件夹，也就是我们所需要的组件。

### 方式二：下载代码

直接通过git下载  `Lin UI`  源代码，并将 `dist` 目录（Lin UI 组件库）拷贝到自己的项目中。

```base
git clone https://github.com/TaleLin/lin-ui.git
```

## 使用组件

> 下文会简单介绍一个`Lin UI` 组件的引入和使用。

使用前，确保该组件已经在你的项目目录结构里。
<br />
以icon组件为例，只需要在使用页面的json文件中引入icon对应的自定义组件即可。
<br />
组件路径：`path/to/${组件名称}/index`
```json
{
  "usingComponents": {
    "l-icon": "path/to/icon/index"
  }
}
```

然后在wxml中直接使用该组件。
```wxml
<l-icon name="add"> </l-icon>
```

## 自定义配置

> 考虑到开发者在面临不同到项目时，需求和行业的不同。Lin UI 设计规范上支持一定程度上的样式定制，以满足业务和品牌上多样化的视觉需求。

同时，可以通过对 `components.json` 进行配置，来编译生成相对应的组件。
<br />
为满足自定义的需求，首先我们要去下载 `Lin UI` 源码。

```base
git clone https://github.com/TaleLin/lin-ui.git
```
安装相关依赖

```base
npm install
```

完成以上两步是对 `Lin UI` 进行自定义配置的基础要求。

### 全局样式更改
> Lin UI 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在这里找到。

 - 组件样式变量
找到根目录，打开`config/style/_base.less`文件，进行修改即可。

 
- 主题色更改

同样打开根目录，打开`config/style/_theme.less`文件，看到文件中定义了一个变量 `@theme-color` ，如果有主题色修改的需求，更改它即可。
```less
// 主题色

@theme-color            : #2c61b4;                      // 主题色

```

其他
更改完成后，在 `Lin UI` 下的根目录里打开终端执行如下所示命令

```bash
npm run build
```

根目录下的 `dist` 文件夹即是编译后的自定义组件。
