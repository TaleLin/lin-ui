
## 简介
> Lin Mini 是基于 微信小程序原生语法 实现的组件库。遵循简洁，易用的设计规范。


###特性

 - 质量可靠

由林间有风团队内部组件库精简提炼而来，经受了众多业务的考验。

 - 规范统一

遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式。

 - 可扩展性

支持按需引入和自定义的主题色，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

##快速上手

Lin Mini 致力于给小程序开发者提供愉悦的开发体验。
> 在开始之前，推荐先学习微信官方的[小程序开发文档][1]，并正确安装和配置了 Node.js v8 或以上。 我们假设你已了解关于 HTML、CSS 和 JavaScript 的初级知识，并且已经熟悉并阅读了[小程序自定义组件][3]。

### 安装

> Lin Mini提供两种安装方法，满足不同开发者的需求。如果您需要使用npm安装，请确保您已经在本机安装了npm。

 - 方式一： 使用npm安装 （推荐）

打开小程序的项目根目录，执行下面的命令。

```base
npm install lin-mini --production

```

执行成功后，会在根目录里生成项目依赖文件夹 `node_modules/lin-mini` （小程序IDE的目录结构里不会显示此文件夹）。

然后用小程序官方IDE打开我们的小程序项目，找到 `工具` 选项，点击下拉选中 `构建npm` ，等待构建完成即可。

![图片](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZEa3ErKzdJRGVNckFIWUZrS0ZKeWNOUnpxSXh5MlRKQU9Jakh6WnRXenVRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

出现上图所示的结果后，可以看到小程序IDE工具的目录结构里多出了一个文件夹 `miniprogram_npm`（之后所有通过 `npm ` 引入的组件和 `js` 库都会出现在这里），打开后可以看到 `lin-mini` 文件夹，也就是我们所需要的组件。

![图片](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZEa3ErKzdJRGVNcFNXVnd6dGFDeWtVK3VudkwzUnBWbUpoYTM3V3FsNlFRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


 - 方式二：下载代码

直接通过git下载  `Lin Mini`  源代码，并将 `dist` 目录（Lin-mini 组件库）拷贝到自己的项目中。


```base
git clone https://github.com/Lin/lin-mini.git

```
### 使用组件
> 下文会简单介绍一个`Lin Mini` 组件的引入和使用。
使用前，确保该组件已经在你的项目目录结构里。

以icon组件为例，只需要在使用页面的json文件中引入icon对应的自定义组件即可。

组件路径：`/miniprogram_npm/lin-mini/${组件名称}/index`
```json
{
  "usingComponents": {
    "l-icon": "/miniprogram_npm/lin-mini/icon/index"
  }
}

```


然后在wxml中直接使用该组件。
```wxml
<l-icon type="primary"> </l-icon>
```

###自定义配置


> 考虑到开发者在面临不同到项目时，需求和行业的不同。Lin Mini 设计规范上支持一定程度上的样式定制，以满足业务和品牌上多样化的视觉需求。
同时，可以通过对 `components.json` 进行配置，来编译生成相对应的组件。

为满足自定义的需求，首先我们要去下载 `Lin-mini` 源码。

```base
git clone https://github.com/Lin/lin-mini.git

```
安装相关依赖

```base
npm install

```

完成以上两步是对 `Lin Mini` 进行自定义配置的基础要求。

#### 全局样式更改
> lin mini 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。


以下是一些最常用的通用变量，所有样式变量可以在这里找到。

 - 组件样式变量
找到根目录，打开`config/style/_base.less`文件

```less
// Color 
@default-color          : @theme-color;
@success-color          : #34BFA3;
@warning-color          : #FFE57F;
@error-color            : #F4516C;
@disabled-color         : #DEE2E6;
@selected-color         : fade(@default-color, 90%);
@tooltip-color          : #fff;
@subsidiary-color       : #80848f;
@rate-star-color        : #f5a623;

// Text
@title-color            : #0e0e0e;
@text-color             : #888;

```
 
- 主题色更改

同样打开根目录，打开`config/style/_theme.less`文件，看到文件中定义了一个变量 `@theme-color` ，如果有主题色修改的需求，更改它即可。
```less
// 主题色

@theme-color            : #2c61b4;                      // 主题色

```

其他
更改完成后，在Lin Mini下的根目录里打开终端执行如下所示命令

```bash
npm run build
```

根目录下的 `dist` 文件夹即是编译后的自定义组件。

#### 按需加载组件

> 按需加载组件需要您配置config文件下的component.json文件

例如我只需要 `button` 和 `loading` 两个组件，那么填入需要的组件名，如下所示代码，

```json
{
  "components": [
    "button",
    "loading"
  ]
}
```

配置完成后，在 `Lin Mini` 下的根目录里打开终端执行

```bash
// 主题色
npm run build
```
此时dist文件夹下面会生成button和loading两个组件。

```js
├── dist
│   └── button.                            // button组件
│    ├── index.wxml                         // 组件标准文件
│    ├── index.wxss                         // 组件标准文件
│    ├── index.json                         // 组件标准文件
│    └── index.js                           // 组件标准文件
│   └── loading                             // loading组件
```
根目录下的 `dist` 文件即是编译后的自定义组件，使用时将他拷贝到自己的项目里即可。


  [1]: https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101612
  [2]: http://es6.ruanyifeng.com/
  [3]: https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/