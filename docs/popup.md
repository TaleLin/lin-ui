
## 弹出层 Popup

> 显示背景为黑色半透明，且有内容区域展示的弹出层。

### 基本案例 

弹出层可通过设置`show`属性为`true`或者`false`来控制显示和隐藏，不设置则显示状态默认为`false`。

#### 代码演示
```html
<l-popup show="{{true}}"> </l-popup>
```

![自定义子节点](http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEdQREVTOUJJYU0yamR0ZGNPeDhzcGZBYkEwcjZMNVo5TE5jZmJEakMrQmFBPT0.png?imageView&thumbnail=375x0&quality=96&stripmeta=0) 

### 动画设置

弹出层可以通过设置 `animation` 属性为`show`、`hide`来控制动画效果的显示和隐藏，不设置则显示状态默认为`show`。

#### 代码演示
```html
<l-popup show="{{true}}" animation="hide" > </l-popup>

```
Tips：静态图片展示效果相同，不做重复展示。

### 从不同方向弹出

根据不同的业务场景需求，可以在弹出层中插入 `slot` ，并通过通过设置 `content-align` 属性的值来控制 `slot` 从不同的方向进入屏幕，可选值为 `top` 、`left` 、`right` 、`bottom` 、`center`。

> Tips：
> 1. 设置为`center`时， 内容区域( `slot` )从中间弹出。 
> 2. 不建议在组件中传入多个子节点。

下图展示的是从下方弹出的效果。

#### 代码演示
```html
<l-popup show="{{true}}" content-align="bottom" > 
  <view class="botton"> 从下方弹出</view>
</l-popup>

```

![自定义子节点](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdQREVTOUJJYU0ycU9hOVlMT24wVzNxMFpTaFptNmNlL3NCd2JEZjI5NlVRPT0.png?imageView&thumbnail=375x0&quality=96&stripmeta=0) 


### 锁定

设置按钮的 `locked` 属性来控制弹出层的锁定态，属性值为 `true` 时，点击弹出层背景部分不会关闭，属性值为 `false` 时点击背景会立即关闭。默认为 `false` 

#### 代码演示
```html
<l-pupop show="{{true}}" content-align="bottom"  locked="{{true}}">
    <view class='pupop-content'>
      <view class='pupop-close' bindtap='onHidePupopTap'>关闭弹出层</view>
    </view>
</l-pupop>

```

![锁定](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEVpUGU1WWJtQTB1ZXBVYVFQVHdyZkdCT0xDMSt3NkJ1TDZIN1RxTzdNS2VRPT0.png?imageView&thumbnail=375x0&quality=96&stripmeta=0)



### 弹出层属性 （Pupop Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 控制弹出层的显示 | Boolean | true/false | hide | 
| animation | 控制弹出层有无进场动画 | String |  show/hide  | show  | 
| content-align | 控制弹出层内容区域的位置 | String |  top/right/left/bottom/center  | center  | 
| z-index | 组件的页面层级 | Number | ----- | 99 | 
| locked   | 弹出层是否设定为锁定态 | Boolean | true/false | false 

Tips: z-index默认为99，如果当前引入弹出层组件的页面中有z-index值大于99的节点，那么为了避免错误的显示效果，可以将pupop组件的z-index属性的值重新设置。
### 弹出层事件 （Pupop Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 当点击背景时触发的事件   | ---------   | --------   | 