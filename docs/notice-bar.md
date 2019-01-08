## 通告栏 NoticeBar

### 是否显示通告栏

通过`show`属性设置是否显示通告栏。默认值为true。

![通告栏](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmorVkllT2NXR2toQUUzZGswaEdxd0llbnV6MlgrVjI4cWRtNElhdDgwODJBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-notice-bar show="{{true}}">我是通告栏</l-notice-bar>
```

### 通告栏类型

通过`type`属性设置通告栏类型为`still`（静止），`roll`（字幕滚动），`swip`（轮播）。默认值为`still`。

当通告栏的类型为`swip`时，轮播的内容需通过`swip-arr`属性传入。

![通告栏图标](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmorVkllT2NXR2toQnpIajA1VElGaU5rMUR3YnRFUERtUE56Ykl0Mk5QWHpnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-notice-bar show="{{true}}" type="still">我是通告栏</l-notice-bar>
<l-notice-bar show="{{true}}" type="roll">我是通告栏我是通告栏我是通告栏我是通告栏</l-notice-bar>
<l-notice-bar show="{{true}}" type="swip" swip-arr="arr"></l-notice-bar>
```

### 滚动速度系数

通过设置`speed`属性可设置字幕滚动速度系数和轮播速度系数。默认值为1500。

tips：滚动速度仅在`type`设置为`swip`和`roll`时生效。`speed`数值越小速度越快，数值越大速度越慢。

#### 示例代码

```html
<l-notice-bar show="{{true}}" type="roll" speed="2000">我是通告栏我是通告栏我是通告栏我是通告栏</l-notice-bar>
<l-notice-bar 
    show="{{true}}" 
    type="swip" 
    swip-arr="arr" 
    speed="2000">
</l-notice-bar>
```

### 通告栏图标

通过`front-icon-name`设置位于通告栏头部的图标名称。`front-icon-style`属性设置头部图标的颜色和大小。

通过`end-icon-name`设置位于通告栏尾部的图标名称。`end-icon-style`属性设置尾部图标的颜色和大小。

![通告栏图标](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmorVkllT2NXR2toRG1rdk04ZTlKdjZmMHpKY2VJL2o4b1RVVjFTbTkwK2pnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-notice-bar 
    show="{{true}}" 
    type="still" 
    front-icon-name="notification" 
    end-icon-name="close" 
    front-icon-style="size:20;color:#3683D6"> 
  我是通告栏
</l-notice-bar>
```

### 可关闭通告栏

通过`close`属性可设置通告栏为可关闭通告栏。默认值为`false`。

### 示例代码

```html
<l-notice-bar show="{{true}}" close="{{true}}">我是通告栏</l-notice-bar>
```


### 通告栏属性（NoticeBar Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 是否显示通告栏 | Boolean | ---- | true |
| type | 通告栏类型 | String | still/swip/roll | still |
| speed | 轮播（滚动）速度 | Number | ---- | 1500 |
| swip-arr | 轮播内容 | Array | --- | --- |
| close | 可关闭通告栏 | Boolean | --- | false |
| front-icon-name | 通告栏头部图标名称 | String | --- | --- |
| front-icon-style | 通告栏头部图标样式 | String | --- | --- |
| end-icon-name | 通告栏尾部图标名称 | String | --- | --- |
| end-icon-style | 通告栏尾部图标样式 | String | --- | --- |
| l-class | 覆盖通告栏区域的自定义外部样式类 | String | ------- | --- | 

### 通告栏事件（NoticeBar Events）
 
| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap | 点击通告栏触发的事件 | --- | --- |
| bind:linicontap | 点击通告栏文字后的图标触发的事件 | --- | --- |
