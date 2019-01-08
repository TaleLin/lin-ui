## 消息提示 Message

### 是否显示消息

通过设置`show`属性控制消息提示的显示和隐藏。默认值为`false`。

#### 示例代码

```html
<l-message show="{{true}}" content="消息提示"></l-message>
```

### 消息内容

通过`content`属性设置消息提示的内容。此处文字建议不超过十个。

![提示类型](http://imglf6.nosdn0.126.net/img/RW5CNXdoVFJDVmdSN2pYa0o3U0wwbDdRNkhuMFR6b0pGN2R0NldnWDM1ZXFqK3RibDdjM2Z3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-message show="{{true}}" content="消息提示"></l-message>
```

### 提示类型

通过`type`属性设置为`primary`、`success`、`warning`、`error`创建不同类型的消息提示。默认值为`primary`。

![提示类型](http://imglf4.nosdn0.126.net/img/RW5CNXdoVFJDVmdSN2pYa0o3U0wwbWhGL2tYSlpwdHJOMms0eWpNQ0JaaUMyeXZVbWM3LzZBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-message show="{{true}}" type="warning" content="消息提示"></l-message>
<l-message show="{{true}}" type="success" content="消息提示"></l-message>
<l-message show="{{true}}" type="error" content="消息提示"></l-message>
<l-message show="{{true}}" type="primary" content="消息提示"></l-message>
```

### 消息提示时长

通过`duration`属性设置消息提示时长。默认值为`1500ms`。

```html
<l-message show="{{true}}" type="warning" content="消息提示" duration="1500"></l-message>
```

### 消息图标

通过`icon`属性设置消息内的图标的名称。默认图标为对应`type`的图标，当`type`为primary 时无图标。

通过`icon-style`设置icon的颜色和大小。

通过`image`属性设置消息文字前的自定义图片。通过`l-image-class`属性可更改自定义图片的样式。

#### 示例代码

```html
<l-message show="{{true}}" type="warning" icon="notification" icon-style="size:20;color:#3683D6" content="消息提示"></l-message>
<l-message show="{{true}}" type="warning" image="../../image.png" content="消息提示"></l-message>
```

### 消息提示属性（Message Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| show | 显示与隐藏消息 | Boolean | ---- | fasle |
| content | 消息内容 | String | ---- | --- |
| type | 消息提示类型 | String | primary/warning/success/error | primary |
| duration   | 消息显示的时长 | Number   | ---- | 1500 |
| icon | 消息图标 | String | ---- | type |
| icon-style | 消息图标样式 | String | ---- | --- |
| image | 消息前的自定义图片 | String | ---- | --- |
| l-class | 覆盖消息区域自定义外部样式类 | String | ------- | --- | 
| l-image-class | 覆盖消息前自定义图片的自定义外部样式类 | String | ---- | --- |
