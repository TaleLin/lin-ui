
## 模态框 Dialog


### 模态框类型

模态框可通过设置`type`属性为`alert`或者`confirm`来控制模态框的类型为 `提示框` 和 `确认框` ，不设置则显示状态默认为`alert`。


#### 示例代码
```html
<!-- 提示框 -->
<l-dialog 
  status="show"
  type="alert"     
  title="标题"
  content="这个是提示框" 
>
  </l-dialog>

<!--确认框 -->
<l-dialog 
  status="show"
  type="confirm"     
  title="标题"
  content="这个是确认框" 
>
  </l-dialog>
```

![确认框](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNzY0YWVBSFRIeVVHaGVqZXd4VlZFazJHbnFUVG02eXNnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg) 


### 无标题的模态弹框

模态框可以通过设置 `show-title` 属性为`true`、`false`来控制组件标题的显示和隐藏，不设置则显示状态默认为`true`。

#### 示例代码
```html
<!-- 无标题提示框 -->
<l-dialog 
  status="show"
  type="alert"  
  show-title="{{false}}"
  title="标题"
  content="这个是无标题提示框" 
>
  </l-dialog>

<!-- 无标题确认框 -->
<l-dialog 
  status="show"
  type="confirm"  
  show-title="{{false}}"
  title="标题"
  content="这个是无标题确认框" 
>
  </l-dialog>
```
![无标题](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNEFTbXhwZXBBdEgzSlAvNk1vV2Vhd0g5ckNRZC9XODZ3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg) 


### 修改按钮文字和颜色

模态框的按钮支持 `文本内容` 和 `字体颜色` 的修改， 设置 `confirm-text` 和 `cancel-text` 可以更改模态框两个按钮的文本， `confirm-color` 和 `cancel-color` 则可以更改他们的字体颜色。

> Tips：
> 1. 提示框只需设置 `confirm-text`和  `confirm-color`。


#### 示例代码
```html
<l-dialog 
  status="show"
  type="confirm"  
  title="提问"
  content="PHP是最好的语言吗？"
  confirm-text="yes"
  confirm-color="#f60"
  cancel-text="no~"
  cancel-color="#999"

>
  </l-dialog>
```
![自定义颜色和文字的dialog](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMNyt3UHhTNitiaE5rRndPbWlZbXg5QnhtZ1RLOU4yZm9nPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg) 


### 设置子节点

我们在使用的组件的时候，可以根据使用场景,自由的在遮罩层组件内插入 `image`、 `view`、 `text` 等子节点，当然，你也可以在其中插入 `自定义组件` 。

> Tips：
> 1. 不建议在组件中传入多个子节点。
> 2. 子节点默认是垂直居中显示。


#### 示例代码
```html
<l-dialog 
  status="show"
  type="confirm"  
  show-title="{{false}}"
  title="标题"
>
  <image class='dio-img' src='/path/to/example.gif'></image>
</l-dialog>

```

![带图的dialog](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdOUlNpekM4aEFMMUtPV201QVJ0MjcrdjZsdHFtK2xNVFlXcm01SzRmZDhBPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg) 

### 锁定

模态框设置 `locked` 属性为 `false` 时，点击背景可隐藏模态框组件，默认为 `true` ， 即点击背景无法关闭该组件。

#### 示例代码
```html
<l-dialog 
  status="show"
  type="alert"  
  show-title="{{false}}"
  locked="{{locked}}"
  title="标题"
  content="这个是提示框" 
>
  </l-dialog>
```



### 模态框参数 （Dialog Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| status | 控制模态框的显示 | String | show/hide | hide | 
| type | 设置模态框的类型 | String |  alert/confirm  | alert  | 
| title | 设置模态框的标题 | String |  -----  | 提示  | 
| title-color  | 设置标题的颜色 | String |  |  #45526b;
| content | 设置模态框的内容 | String | ----- |  | 
| locked | 设置背景是否为锁定态 | Boolean | ----- | true | 
| show-title   | 是否显示模态框的标题 | Boolean | true/false | true 
| confirm-text  | 确定按钮的文本 | String |  |  确定 
| confirm-color  | 确定按钮的颜色 | String |  |  #3683d6 
| cancel-text   | 取消按钮的文本 | String | | 取消
| cancel-color   | 取消按钮的颜色 | String | | #45526b



### 模态框事件 （Dialog Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 当点击背景时触发的事件   | ---------   | --------   | 
| bind:confirm   | 当点击确定时触发的事件   | confirm   | --------   | 
| bind:cancel   | 当点击取消时触发的事件   |   cancel | --------   | 