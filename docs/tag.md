## 标签 Tag

### 标签形状

通过`shape`属性设置标签形状为`square`（方形标签）或`circle`（半圆标签）。默认形状为`square`(默认)。

![标签形状](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmpaKzVLck4vOEdoWGpLVTJnZk5Fa01yWXd4azEwK3BWL0JkWjBJQ1VyVE9BPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html
<l-tag shape="square">方形标签</l-tag>
<l-tag shape="circle">半圆标签</l-tag>
```

### 标签大小

通过`size`属性设置标签大小为`mini`（小）和`large`（大）。默认值为`mini`(默认)。

![标签大小](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmpaKzVLck4vOEdoYjVZSGJIRFFINHIvWGl6amFFb0lPbmdnbDFmaklrc0V3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html
<l-tag size="mini">小标签</l-tag>
<l-tag size="large">大标签</l-tag>
```

### 镂空标签

通过`plain`属性设置标签是否为镂空标签。属性值为`true`时为镂空标签。默认值为`false`。

![镂空标签](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmpaKzVLck4vOEdoY0pEL0lJWUtiNFBocDhFcWdvdjZPbW50b0RDTStGVUVRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html
<l-tag plain="{{true}}">镂空标签</l-tag>
```

<!-- 图标标签 自定义图标 -->

### 标签颜色

标签为实心标签时通过`bg-color`属性设置标签背景颜色，`font-color`属性设置文字颜色。

标签为镂空标签时通过`font-color`属性设置字体颜色（镂空标签边框颜色与字体颜色一致）。

实心标签`bg-color`默认值为主题色（theme-color），`font-color`默认值为#ffffff。

镂空标签`font-color`默认值为主题色（thmen-color）。

![标签颜色](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdQM0o2eUNYa2pzMDd1QXE3K1FuRlorRWtsRkxyUldTbEVFRFMwYUloZFRBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html
<l-tag bg-color="#333">自定义标签颜色</l-tag>
<l-tag plain="{{ture}}" font-color="#333">自定义标签颜色</l-tag>
```

### 图标标签

通过`icon-name`属性设置标签文字前的icon名称，`icon-style`设置icon大小和颜色。其他关于icon用法可参考[icon组件文档](https://coding.net/u/indexer/p/Lin-mini/git/tree/master/docs/icon.md)。

通过`location`属性可设置icon的位置，默认值为`left`。

通过`image`属性设置标签文字前的图片。`l-image-class`自定义设置图片样式。

![图标标签](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmpaKzVLck4vOEdoZDZRa0hvYi9LYUd3ZmhWMURMbGdqVWlNSTkrM2lMZ0VRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

```html
<l-tag icon-style="color:#fff;size:20" icon-name="warning">图标标签</l-tag>
<l-tag icon-style="color:#fff;size:20" icon-name="warning" location="right">图标标签</l-tag>
<l-tag image="../image.png">图标标签</l-tag>
```

### 标签是否可选中

通过`select`属性设置标签是否可以选中，属性值为`true`时为可选中按钮。默认值为`false`。

通过`l-select-class`属性传入外部样式类更改标签选中时的样式。

#### 示例代码

```html
<l-tag plain="{{true}}" select="{{true}}" l-select-class="select">可选中标签</l-tag>
```

```css
  /* css文件 */
  .select{
    background:#333 !important;
    color:#fff !important;
  }
```

### 标签属性（Tag Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| size | 标签尺寸 | String | large/mini | mini |
| shape | 标签形状 | String | default/circle | default |
| plain | 标签是否镂空 | Boolean | ----- | false | 
| bg-color | 实心标签背景颜色 | String | ----- | --- | 
| font-color | 镂空标签字体颜色 | String | ----- | --- | 
| name | 标签名称 | String | ----- | --- | 
| select | 标签是否可选中 | Boolean | ----- | false | 
| icon-name | icon名称 | String | ----- | --- | 
| icon-style | icon大小和颜色 | String | ----- | --- |
| image | 图片路径 | String | ----- | --- | 
| location | 图标位置 | String | left/right | left  |   
| l-class | 覆盖未选中标签区域的外部样式类 | String | ----| ---  |   
| l-select-class | 覆盖已选中标签区域的外部样式类 | String | ----| ---  |   
| l-image-class | 覆盖自定义图片区域的外部样式类 | String | ----| ---  |  

### 标签事件（Tag Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 点击标签时触发的事件,返回当前标签的名称和选中状态   | {name,select}   | --------   | 