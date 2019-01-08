### 页底提示 Loadmore

含有Loadmore组件的页面由两部分组成，一个是页面内容，一个是loadmore组件的内容。

页面内容通过插槽传入，由于组件同时含有多个插槽节点，页面内容需设置`slot="content"`。

如需自定义页底加载内容,请将自定义内容设置`slot="custom"`。

### 显示与隐藏

通过`show`属性设置页底提示的显示与隐藏。默认值为`false`。

#### 示例代码

```html
<loadmore show="{{true}}">
  <view slot="content">
  </view>
</loadmore>
```

### 提示类型及提示文案

通过`type`属性设置页底提示类型。默认值为`loading`（加载中）。

组件具有默认的提示文本，设置`loading-text`属性可覆盖`loading`状态下的默认文本。

设置`end-text`属性覆盖`end`状态下的默认文本。

![提示类型](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptU0JnV1ZURkM1TzMwYm5xTDhLRlF6cE9ZR3FUVVVPbFZnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

![提示文案](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptVVRYa2hGNEF0VEl3MklUQ0JhdHVwa2JrZHVOYkgrK09BPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

#### 示例代码

```html
<loadmore show="{{true}}" type="loading" loading-text="努力加载中~">
  <view slot="content">
  </view>
</loadmore>
```

### 是否显示分割线

通过`line`属性设置是否显示分割线。默认值为`false`。

![是否显示分割线](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmdaWllxMi9kOHptZGc5bXZRNHBFeGo4bE9Bd1FUTzIwWUxnQ3Y4a29WcytRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

#### 示例代码

```html
<loadmore show="{{true}}" type="loading" line="{{true}}">
  <view slot="content">
  </view>
</loadmore>
```

### 自定义提示文字颜色

通过`color`属性设置文字和分割线颜色。

#### 示例代码

```html
<loadmore show="{{true}}" type="loading" line="{{true}}" color="#333">
  <view slot="content">
  </view>
</loadmore>
```

### 自定义页底加载类型

通过`custom`属性自定义页底提示，自定义内容通过设置`slot="custom"`传入。默认值为`false`。

#### 示例代码

```html
<loadmore show="{{true}}" custom="{{true}}">
  <view slot="content">
  </view>
  <view slot="custom">
  </view>
</loadmore>
```

<!-- 加载文字 两个slot  类型和文案合并-->
### 页底提示属性（Loadmore Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| show   | 是否显示页底提示   | Boolean   | ----   | false   | 
| type   | 页底提示类型   | String   | end/loading   | loading   | 
| loading-text   |  加载中状态的文案   | String   | ----   | ---   | 
| end-text   |  加载完成状态的文案   | String   | ---  | ---  | 
| line   | 是否显示分割线   | Boolean  | ----   | false   | 
| color   | 自定义页底加载提示文字和分割线颜色   | String  | ----   | ---   | 
| custom   | 是否自定义页底加载   | Boolean  | ----   | fasle   | 

### 页底提示事件 (Loadmore Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 点击页底提示区域触发的事件   | ---------   | --------   | 
