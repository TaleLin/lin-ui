## 状态展示页 StatusShow

### 展示与隐藏状态展示页

设置`show`属性控制状态展示的隐藏与显示。默认值为`false`。

#### 示例代码

```html
<l-status-show show="{{true}}"></l-status-show>
```

### 状态展示类型

通过`type`属性设置为`success`、`error`、`network`、`cart`、`order`、`address`创建不同类型状态展示页。默认值为`success`。

#### 示例代码

```html
<l-status-show show="{{true}}" type="success"></l-status-show>
```

### 按钮文案

通过`button-text`属性设置按钮内的文案。

tips：按钮文案存在时按钮才会显示。当`type`属性设置为`cart`、`network`时有默认按钮文案， 可通过`button-text`属性进行覆盖。

#### 示例代码

```html
<l-status-show show="{{true}}" type="success" button-text="返回"></l-status-show>
```

### 自定义图标及文案描述

通过设置`image`属性和`describe`属性设置图片和文案描述。

#### 示例代码

```html
<l-status-show show="{{true}}" image="../../image.png" describe="我是描述文案"></l-status-show>
```

### 自定义背景色

通过设置`bg-color`属性设置状态展示页背景色。

#### 示例代码

```html
<l-status-show bg-color="f3f3f3" show="{{true}}"></l-status-show>
```

### 自定义状态展示页

通过设置`custom`属性可设置自定义状态展示页。通过`slot`传入自定义的状态展示内容。

#### 示例代码

```html
<l-status-show show="{{true}}">
  <image src="../../image.png" />
</l-status-show>
```

### 状态展示页属性（StatusShow Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 显示与隐藏状态展示页 | Boolean | ---- | fasle |
| type | 状态展示页类型 | String | success/error/network/cart/order/address | success |
| button-text | 按钮文案 | String | ---- | --- |
| image | 自定义图片 | String | ---- | --- |
| describe | 自定义描述文案 | String | ---- | --- |
| custom | 自定义状态展示页 | Boolean | ---- | false |
| bg-color | 自定义状态展示页背景色 | String | ---- | #fff |
| l-image-class | 覆盖图片部分的外部样式类 | String | ---- | --- |
| l-describe-class | 覆盖文案描述部分的外部样式类 | String | ---- | --- |
| l-button-class | 覆盖按钮部分的外部样式类 | String | ---- | --- |
| l-class | 覆盖整个状态展示页区域的外部样式类 | String | ---- | --- |

### 状态展示页事件（StatusShow Events）
 
| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap | 点击按钮触发的事件 | --- | --- |
