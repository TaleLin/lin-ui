<p align="center">
    <img width="150" class="QR-img" src="https://doc.mini.talelin.com/screenshots/readme/lin-ui小程序.jpg">
</p>


<div align="center">
    <span><a target="_blank" href="https://doc.mini.talelin.com">:memo: 中文文档</a></span>
    <span>|</span>
    <span><a target="_blank" href="https://talelin.com/">:computer: 官方教程</a></span>
</div>

<div align="center">
    <span>Lin UI, not just an UI component library!</span><br/>
    <strong>一套基于微信小程序原生语法实现的高质量 UI 组件库</strong>
</div>

<div align="center">
    <a href="https://github.com/TaleLin/lin-ui/actions">
        <img alt="持续集成" src="https://img.shields.io/github/workflow/status/talelin/lin-ui/Node.js%20CI/develop?label=%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90&logo=github" />
    </a>
    <a href="https://www.npmjs.com/package/lin-ui">
        <img alt="最新版本" src="https://img.shields.io/npm/v/lin-ui?color=%233a63bd&label=%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC&logo=graphcool&logoColor=white" />
    </a>
    <a href="https://www.npmjs.com/package/lin-ui">
        <img alt="周下载量" src="https://img.shields.io/npm/dw/lin-ui?color=%233c973c&label=%E5%91%A8%E4%B8%8B%E8%BD%BD%E9%87%8F&logo=node.js&logoColor=white" />
    </a>
</div>



## 目录

- [简介](#简介)
- [快速上手](#快速上手)
  - [安装](#安装)
  - [引入](#引入)
- [讨论交流](#讨论交流)
- [贡献代码](#贡献代码)
- [开源协议](#开源协议)



## 简介

Lin UI 是一套基于 **微信小程序原生语法** 实现的高质量 UI 组件库。遵循简洁、易用、美观的设计规范。



## 快速上手

### 安装
1. 初始化你的项目为一个 NPM 项目

   ```
   npm init -y
   ```

   > 若项目根目录已包含 package.json 文件，则可跳过该步骤

2. 安装 Lin UI

   ```
   npm i lin-ui
   ```

3. 配置微信开发者工具
   要正确安装 Lin UI，需将微信开发者工具的 `使用 npm 模块` 选项勾选上

   > 设置路径：微信开发者工具右上角 -> 详情 -> 本地设置

4. 构建 NPM 模块
   微信开发者工具配置完成以后，还需进行一次 NPM 模块的构建
   
   > 按钮位置：微信开发者工具顶部 -> 工具 -> 构建 npm

> **若你本地没有 Node.js 环境，无法使用 NPM 安装，则可以采用[源码方式安装](https://doc.mini.talelin.com/start/#方式二：下载代码)**
### 引入

1. 配置微信开发者工具

   要正确使用 Lin UI，需将微信开发者工具的 `Es6 转 ES5` 和 `增强编译` 选项勾选上
   
   > 设置路径：微信开发者工具右上角 -> 详情 -> 本地设置
2. 在页面中引入
   ```json
   {
     "usingComponents":{
       "l-button":"/miniprogram_npm/lin-ui/button/index"
     }
   }
   ```
3. 在页面中使用
   ```html
    <l-button type="default">默认按钮</l-button>
   ```
   > 我们建议你在引入 Lin UI 组件时，都统一命名为 `l-{组件名}` 格式，遵循此规范将使你的项目代码更加清晰

   **至此，Lin UI 已成功引入至你的项目中了！**

## 讨论交流

![](https://img.juzibiji.top/20200807155013.png)



## 贡献代码

我们的代码基于 develop 分支开发，欢迎提交 Pull Request 进行代码贡献。

在提交 Pull Request 之前，请详细阅读我们的[开发规范](https://github.com/TaleLin/lin-ui/wiki)，否则可能因为 Commit 信息不规范等原因被关闭 Pull Request。



## 开源协议

[MIT](LICENSE) © 2020  林间有风