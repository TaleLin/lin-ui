
## 轻提示 Toast

> toast组件常用于在页面中展示重要的提示信息。


###  无文字基本类型

提示框可通过设置`show `属性为`ture`、`false` 来控制显示和隐藏，并且在不设置`image` 和 `icon` 的情况下，只会显示文本内容，最多支持显示两行，最多20个汉字长度，超出部分会被隐藏。

#### 示例代码
```html
<!-- 单行文本 -->
<l-toast
  show="{{ture}}"
  title="这是一条基础提示框"
/>

<!-- 多行文本 -->
<l-toast
  show="{{true}}"
  title="这是一条基础提示框，这是一条基础提示框"
/>

```

如下图：


![纯文本](http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEhlS2R1Y2tEUE5DUE1CV2VYNHh5aWdWeFlubUdmeW5BR0RFdk1DSitTMjdRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### icon + 文本内容的提示框

当我们遇到有一些场景需要icon+文字的提示框时，可以通过设置`icon` 来实现，同时，还可以设置 `icon-style` 来控制icon图标的大小。

语法同设置行内样式一致，支持属性为：size和color。如：`icon-style="size:60; color:#34f464"`
>Tips: 
 * 设置`icon` 为 `success`、`loading`、`error` 时，显示效果如下图所示。
 * 当设置 `icon` 为其他值时，默认显示白色，
 * `icon` 的大小和颜色可以通过 `icon-style` 来设置 

#### 示例代码
```html
<!-- 显示 success 的提示框 -->
<l-toast
  show="{{ture}}"
  icon="success"
  icon-style="size:60; color:#34f464"
  title="成功提示框"
/>

```

![带有状态](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdEQUxENm5RRXoxVk1TYXQvRm42NTVxZzg5bzRSOEc4UWpnaUNWY0krT0F3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### 自定义图片的提示框


当`icon` 属性不能满足我们的需求时，我们还可以通过设置`image` 来自由的定义显示的图片内容，只需要在`image`属性里传入有效的图片路径即可。
并且可以用`image-style`来设置宽和高，单位为rpx。如：`image-style="60*80" ` 表示宽为60rpx，高为80rpx的图片；`image-style="60*60" `则表示宽和高都是60rpx，也可以写成`image-style="60"`，含义相同。

>Tips: 
 * `image` 的权重高于 `icon`，所以当设置了 `image` 时，`icon` 不显示。

#### 示例代码
```html
<l-toast
  show="{{true}}"
  image="path/to/img.png"
  image-style="60"
  title="图片提示框"
/>

```

![图片](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEVtNTBFQndmb0JodFlTbm54bFNDUDNlN2p6akJoOWVOYWNwSUs5WTEvdXRRPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg)

### 更改文字的位置

`toast` 默认是列式布局（图标在上，文字在下），但是有时候会需要提示的图标居左，文字居右；或者文字居左，图标居右显示。这时，我们可以通过设置 `placement` 属性来完成，`placement`可选值为`top / left / right / bottom ` ，默认值是 `bottom`。

> Tips
 * 当 `icon` 或者 `image` 为空时，设置 `placement` 不生效。

#### 示例代码
```html
<l-toast
  show="{{true}}"
  icon="time"
  title="自定义提示框"
  placement="right"
/>
```

![行式布局图片](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZMSTg0Uzl2cENhaG92d3A0R2xsZWkvWi9QbFJLWFdSYnJHTmJIdlZJMGlBPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg)


### 提示框属性（Toast Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制提示框的显示 | Boolean | true/false | false | 
| title | 提示框的文本内容 | String |   |  | 
| icon | icon图标的名字| String |  参考[icon组件][1]支持的范围|   | 
| icon-style | icon图标的颜色和大小| String |  参考[icon组件][1]支持的范围 |  "size:60; color:#fff" | 
| image | 图片的有效路径，支持本地路径和网络路径 | String |   |   | 
| image-style | 设置图片的宽和高，单位为rpx| String |   |  60*60 | 
| placement   | 文字的显示方位 | String | top/left/right/bottom  | bottom 
| duration   | 提示框显示的时长 | Number |  | 1500 
| center   | 设置提示框是否为垂直居中 | Boolean | true/false | true 
| mask   | 是否显示透明蒙层，防止触摸穿透 | Boolean | true/false | false 

>Tips: 
* `image` 的权重大于 `icon` ，当设置`image`时， `icon`不生效
* `center` 设置为`false`的时候，提示框偏底部显示，默认居中显示。


### icon参数说明

| 属性值   | 说明 | 类型 |
|:----|:----|:----|
| success | 显示绿色的`success` 图标 | String | 
| error | 显示红色的 `error` 图标 | String | 
| loading | 显示白色的的 `loading` 图标 | String | 
| other | 参考[icon组件][1]支持的范围 | String | 


  [1]: https://coding.net/u/indexer/p/Lin-mini/git/blob/master/docs/icon.md