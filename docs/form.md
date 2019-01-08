
## 表单 Form

>主要用于收集、校验、提交数据。


###  基础案例

表单项是 `form` 组件的子选项，是包裹 `input` 、 `radio` 、 `picker` 等组件的容器，分为表单标题和表单组件两部分

表单标题是通过 `label` 属性来实现，表单组件则是通过添加 `slot` 子节点来完成的。


#### 示例代码
```html
<form-item label="备注" required="{{true}}" >
  <input placeholder="请填写备注"/>
</form-item>

```

如下图：

![input](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEdJeFl3aTNFc1djYkowc1l4Vm9obUZiQlZ0bnk5dUc2b3dzMUpBRjN2TDdRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 对齐方式

根据具体需求，选择最佳的标签对齐方式（表单标题和表单组件）。

`label-layout` 默认值是 `left` ，即表单标题在 `label-width` 设置的范围内居左显示。

> Tips
 * 当`label-layout` 的值是 `top` 时，`label-width` 属性原先效果失效，所设置的值成为 `表单标题` 部分的高度，单位同样是rpx

#### 示例代码

```html
<form-item label="名称" label-class="bank-input" >
  <input />
</form-item>

<form-item label="名称" label-class="bank-input" >
  <input />
</form-item>

<form-item label="名称" label-class="bank-input" >
  <input />
</form-item>
```


### 标题部分的宽度

我们可以通过 `label-width` 来设置标题部分的宽度，默认是100，单位是rpx。

> Tips
 * 当`label-layout` 的值是 `top` 时，`label-width` 属性原先效果失效，所设置的值成为 `表单标题` 部分的高度，单位同样是rpx


### 设置必选项

当我们需要讲表单项为必选项时，设置 `disabled` 为 `true` 即可。

#### 示例代码

```html
<form-item label="银行卡号" required="{{true}}" >
  <input placeholder="请输入代理商的银行卡号"/>
</form-item>

```
如下图：

![input](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdJeFl3aTNFc1djWHdLa2t2bXZQOTc0b0ZGbHJYbmg3bUlvbXlaaENRdUtRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 设置校验规则

设置表单校验是为了在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，我们可以通过 `rules` 属性来设置相对应的校验规则。


#### 示例代码

```html
<form-item label="密码" label-layout="left" rules="rule" >
  <input placeholder="请输入6位数密码" />
</form-item>

```

### 设置禁用

当我们需要讲表单项禁用时，设置 `required` 为 `true` 即可。

#### 示例代码

```html
<form-item label="禁用"  label-layout="left">
  <input placeholder="禁止输入" />
</form-item>

```

如下图：

![disabled](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdJeFl3aTNFc1djYW0zRTFTVVRLY000UWxJUGxBNEp5Vy9tK083emlYblp3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)


### 表单项属性（FormItem Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| label | 表单标题（label）的文本 | String |  |  | 
| required | 是否必选 | Boolean | true/false | false | 
| rules | 输入内容的校验规则| object |  |    | 
| label-width | 表单项标题部分的宽度，单位rpx | Number |   |  100 | 
| disabled   | 设置是否禁用 | Boolean | true/false | false |
| label-layout  | 设置表单标题的显示位置 | String | top/left/right | left |
| label-class   | 设置表单项的外部样式类 | String |  |  
