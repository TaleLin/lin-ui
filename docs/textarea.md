
## 文本域 Textarea

> 基于原生组件Textarea封装，多行输入框组件，根据是否有内容、是否聚焦有折叠、展开两种状态。


###  基础案例

Textarea可以通过`placeholder` 来显示自定义的占位文本。

#### 示例代码
```html
<l-textarea  placeholder="说说你的想法吧..."  />

```

### 显示文本计数器

当我们通过 `maxlength` 设置了输入文本的最大长度后，还可以通过设置 `indicator` 为 `true` 来显示文本计数器，如 `0/140`,

> Tips
* 当设置 `maxlength`为-1时， `indicator`属性不在生效

#### 示例代码

```html
<l-textarea indicator="{{true}}" maxlength="140" placeholder="说说你的想法吧..."  />
```

### 自动增高

当设置 `auto-height` 为 `true` 时， `Textarea` 组件会根据行数的变化自动增高，原始高度为`88rpx`。

#### 示例代码

```html
<l-textarea auto-height="{{true}}"  />
```

### 校验规则

设置表单校验是为了在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，我们可以通过 `rules` 属性来设置相对应的校验规则。
#### 示例代码

```html
<l-textarea  rules="rules" />
```

### 设置禁用

当我们需要将表单项禁用时，设置 `disabled` 为 `true` 即可。

#### 示例代码

```html
<l-textarea disabled="{{true}}"  placeholder="禁止输入" />
```


### 文本域属性（Textarea Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| value | 输入框的值 | String |  |  | 
| placeholder | 占位文本 | String |  |  | 
| focus | 获取焦点 | Boolean | true/false | false | 
| indicator | 显示文字长度的计数器 | Boolean | true/false | true | 
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | Number | | 140 | 
| auto-height | 是否自动增高，设置auto-height时，style.height不生效 | Boolean | true/false | false | 
| rules | 输入内容的校验规则| object |  |  --  | 
| fixed | 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 `fixed` 为 `true| object` |  |  --  | 
| disabled   | 设置是否禁用 | Boolean | true/false | false |
| l-class   | 设置Textarea组件的外部样式类 | String |  |  
| l-placeholder-class   | 设置占位文本外部样式类 | String |  |  


### 文本域事件 (Textarea Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange | 键盘输入时触发            | 输入框当前值 value | -    |
| bind:linfocus  | 文本域聚焦时触发          | 输入框当前值 value  | -    |
| bind:linblur   | 文本域失去焦点时触发	   | 输入框当前值 value | -    |
| bind:linconfirm| 点击完成按钮时触发        | 输入框当前值 value  | -    |