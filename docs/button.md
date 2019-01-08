# <H2Icon> 按钮 Button

> 常用的操作按钮。

## 按钮类型 

通过设置`type`属性为`default`、`success`、`error`、`warning`来创建不同样式的Button，样式默认为`default`。

<!-- 图片标题灰边不要 -->
![按钮类型](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxa0Z6UXlKNGEzYjVYRHRENXJzNkl5My9iaTVWM0g3Rll3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button type="default">default</l-button>
<l-button type="error">error</l-button>
<l-button type="success">success</l-button>
<l-button type="warning">warning</l-button>
```
## 按钮形状

通过`shape`属性更改按钮形状为`square`（直角）、`circle`（圆弧）或`semicircle`（半圆）。默认形状为`circle`(圆弧形)。

![按钮形状](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxak90NEV1VGFDQkVscVFJaXhxYkZGNWE1ZG9xMGJncHFnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button shape="semicircle">半圆角</l-button>
<l-button shape="circle">圆弧角</l-button>
<l-button shape="square">方角</l-button>
```
## 按钮尺寸

通过`size`属性更改按钮大小为`mini`（小）、`medium`（中）和`large`（大）。默认形状为`circle`(圆弧形)。

![按钮尺寸](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxbjM2eTN1bTkrY2VORzhvVFU1OWFod2tGSkE5dHJGYVB3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

### 示例代码
```wxml
<l-button size="medium">中按钮</l-button>
<l-button size="large">大按钮</l-button>
<l-button size="mini">小按钮</l-button>
```

## 长按钮

通过`long`属性为`true`设置按钮为长按钮，默认值为`false`。

![长按钮](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxZzBFMjNMWDJaL1J1eit1ZDFEQ1g0QXFIN2JadzI4QVhnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button long="{{true}}">长按钮</l-button>
```

## 镂空按钮

通过`plain`属性为`true`设置按钮为镂空按钮，默认值为`false`。

![镂空按钮](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxaXhJVnBIZ1kvN1U5ZzBBMDh0ektLbjBtWkREa0lEbzVnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button plain="{{true}}">镂空</l-button>
```

## 禁用按钮

通过`disabled`属性设置按钮的禁用状态。

![禁用按钮](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxdE1rb3hDMTR1VXlQUndGNjR6OFBTbjFCUHRkM29GRU5nPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button disabled="{{true}}">禁用按钮</l-button>
```
<!-- false情况 -->
## 加载状态

通过设置`loading`属性在按钮上显示加载状态。

![加载状态](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxbWJlTWRveENsc2dOUC92b3FsNXhZT24zMmM5Nm8wTHlnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button loading="{{true}}">加载中</l-button>
```

## 图标按钮

在按钮文字前面添加图标，设置Button的`icon`属性可使用icon组件的图标。

设置Button的`icon-style`属性可更改图标大小和图标颜色。

设置Button的`image`属性可设置图标为自定义图标。

![图标按钮](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmhWQ0lVRk9Wa3IyTDltRnVKZ0c3d0tKbW1EenlLRFpmUWpTUUd3eWdqSDd3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码

```wxml
<l-button icon="warning" icon-style="color:#fff;size:20">icon图标/l-button>
<l-button image="../../image/icon.png">自定义图标</l-button>
```

## 特殊样式按钮

>同时设置spcial属性和open-type时，仅在slot中定义的内容可以触发开放能力。

在某些场景下，对Button的样式会有一些特殊需求，比如使用按钮开放能力的图片。此时可设置Button的`special`属性使按钮成为一个自定义按钮。

自定义内容在组件slot插入即可。

![开放能力特殊用法](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmhVcnlhUWlHZmpxb3haYmRZZVllcHRwVUE2cjRRcG1rdUNkYXBId1pUN2FnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 示例代码
```wxml
<l-button special="{{true}}" open-type="share">
    <!-- 此处是插槽自定义内容 -->
   <l-icon name="share" />
</l-button>
```

## 按钮微信开放能力

> 建议使用开放能力前仔细阅读[微信小程序button组件][1]的相关文档，充分了解小程序Button的相关开放能力。

Lin-Mini的Button组件同样支持小程序原生Button的相关开放能力。

例如，小程序可以通过原生Button来获取用户的相关信息。而使用Lin-Mini的Button组件同样可以做到，且用法同原生Button保持一致。

具体使用方法如下：

* 根据需求设置Button的`open-type`(开放能力类型)属性，该属性的可选值与[小程序Button组件][1]的`open-type`属性可选值保持一致。

例如设置分享功能即可写为`open-type="share"`。
* 某些开放能力同时还需要传入一个回调函数用以获取回调数据，Lin-MiNi的Button组件的回调函数设置方式同样与小程序原生Button保持一致。

例如在获取用户信息时，你可以这样设置回调函数：`bind:getuserinfo="getUserInfo"`。

### 示例代码

```wxml
<l-button bind:getuserinfo="getUserInfo" openType="getuserinfo"></l-button>
```

## 用户案例

浏览完以上内容，您大概已经了解Button组件的`特殊样式用法`以及`按钮的微信开放能力`。

下面我们来浏览一个在实际开发中较为常见的用户案例，案例实现效果图如下所示：

![客服](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVml6YTNIWVJKbEFTN21haWdoMTFmaGFBUCtyVUxTMUExd09BWm4xbzhocW13PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

通过效果图，我们来分析下怎样去实现该案例。总体来讲可分为两部分:

1. 设置Button组件的`spcial`属性为`true`，然后将自定义代码插入插槽中。
2. 将Button组件的`open-type`属性设置为`contact`实现客服功能。

以下是实现该案例的代码。

### 示例代码

```wxml
 <!-- wxml文件 -->
 <l-button special="true" openType="contact">
    <view class="container">
      <l-icon size="40" name="customer-service" color="#3683d6" />
      <text class="describe">客服</text>
    </view>
  </l-button>
```

```wxss
  /* wxss文件 */
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .describe {
    color: #3683d6;
    font-size: 28rpx;
    margin-left:20rpx;
  }
```

## 按钮属性（Button Attributes）
<!-- 注释出微信原生功能 -->
>除本文档列出的参数之外，微信原生Button的参数同样支持，具体参考[微信Button组件文档][1]。

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| size | 按钮尺寸 | String | medium/large/mini | medium | 
| type | 按钮类型 | String | warning/success/error/ghost/default  | default | 
| plain | 按钮是否镂空 | Boolean | ----- | false | 
| disabled   | 按钮是否禁用 | Boolean | ----- | false | 
| loading | 是否为加载中按钮 | Boolean | ----- | false | 
| shape | 按钮形状 | String | square/circle/semicircle   | circle | 
| icon | 按钮内icon图标 | String | -----   | ---|
| icon-style | 按钮内icon大小和颜色 | String | -----   | ---|
| image | 自定义图标 | String | -----   | --- |  
| long | 联通两边按钮(长按钮)   | Boolean | ------- | false | 
| special   | 特殊按钮   | Boolean   | -------   | false   | 
| open-type | 微信开放能力 | String | ------- | --- | 
| form-type | 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件 | String | ------- | --- | 
| l-class | 覆盖按钮区域自定义外部样式类 | String | ------- | --- | 
| l-hover-class | 自定义按钮点击态外部样式类 | String | ------- | --- | 

## 按钮事件（Button Events）
 
| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 按钮在非禁用状态下点击所触发的事件   | ---------   | --------   | 
| bind:contact   | 客服消息回调   | ----------   | --------   | 
| bind:getphonenumber   | 获取用户手机号回调   | ----------   | --------   | 
| bind:error   | 当使用开放能力时，发生错误的回调   | ----------   | --------   | 
| bind:opensetting   | 在打开授权设置页后回调   | ----------   | ---------   | 
| bind:getuserinfo   | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)返回的一致   | ---------   | ---------   | 


  [1]: https://developers.weixin.qq.com/miniprogram/dev/component/button.html

<RightMenu />