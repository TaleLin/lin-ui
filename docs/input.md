
## 输入框 Input

> 基于原生组件Input封装，用于接收单行文本，支持文本、密码、数字、身份证等类型的输入。
用户可控制是否显示输入框标题，是否出现清除按钮，还可以自定义 Input 组件的右边部分（传入 `slot`），实现自定义按钮、验证码输入框等。


###  基础案例

Input的标题部分是通过 `label` 属性来实现，你还可以通过`placeholder` 来显示自定义的占位文本。

#### 示例代码
```html
<l-input label="用户名"  placeholder="请输入用户名"  />
<l-input label="密码"  placeholder="请输入密码"  />

```

![基础案例](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DdG43elFmeVl4eVlJTkZua2o1RnNmUWJXVGdDNnZrWGRnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 对齐方式

根据具体需求，选择最佳的标签对齐方式（输入框标题和输入框部分）。

`label-layout` 默认值是 `left` ，即输入框标题在 `label-width` 设置的范围内居左显示。值为 `right` 时，输入框标题居右显示。

另外，我们还可以通过 `label-width` 来设置标题部分的宽度，默认是150，单位是rpx。


#### 示例代码

```html
<l-input label="名称" label-layout="left" label-layout="170"  />

<l-input label="名称" label-layout="right" label-layout="170"  />
```

![位置](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DZzkrOHY4cU5TZ1Q5dngzZ0tFR2ExdkY3RUJzYW9Oa3F3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 输入框类型

输入框类型的可选值有 `text` 、`idcard` 、`password` 、`number`、`digit` ，可根据不同的场景选择。

#### 示例代码

```html
<l-input label="数字" type="number" placeholder="请输入数字" />
```
![类型](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1Da1BkR3ZLcUw3ODdhZWI0STk0TFJjNHVEcTJKalljcEhnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### 清除按钮

当我们设置 `clear` 为 `true` 时，并且当输入框输入内容后，会显示 `清除按钮` ，我们可以通过点击它来清除文本内容。

#### 示例代码

```html
<l-input label="清除按钮" clear="{{true}}" />
```
![清除按钮](http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DbHhFbVgrUTNjNzdoMHdWRy9ZcFhNdERBL2JKL1FhR1BnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### 设置必选项

当我们需要将输入框设置为必选项时，设置 `required` 为 `true` 即可。

#### 示例代码

```html
<l-input label="必填" placeholder="这里是必填项" />
```


![input](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DbHVRdmdjOXBoL25iZTloRmM3Wk04SHM2bjFVb04wbGdBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 设置校验规则

设置表单校验是为了在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，我们可以通过 `rules` 属性来设置相对应的校验规则。


#### 示例代码

```html
<l-input label="银行卡号" placeholder="请输入代理商的银行卡号" />

```

### 设置禁用

当我们需要讲表单项禁用时，设置 `disabled` 为 `true` 即可。

#### 示例代码

```html
<l-input label="禁用"  disabled="{{true}}"  placeholder="禁止输入" />
```

![disabled](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DaVNsV3Z2dkNadFU1N2FObm1oNnFsY2dSOFEycnFUV0xBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 自定义Input组件右边部分

通过 `<slot>` 的方式可以自定义Input 组件的右边部分，实现自定义按钮、验证码输入框等。

#### 示例代码

```html
<l-input label="验证码"  label-layout="left"  placeholder="请输入验证码" >
	<img src="path/to/img.png">
</l-input>
```


![自定义](http://imglf3.nosdn0.126.net/img/YUdIR2E3ME5weEdHL0kxOXVOSW1DcFhHeE1mVlZ4M2p2Qjhjejcrb3ZNQ2pyRGRVMU1YeTZBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)



### 表单项属性（Input Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| label | 表单标题（label）的文本 | String |  |  | 
| required | 是否必选 | Boolean | true/false | false | 
| type | 输入框类型，可选值为 text，idcard，digit，password，number | String | text/idcard/digit/password/number | text | 
| value | 输入框的值 | String |  |  | 
| placeholder | 占位文本 | String |  |  | 
| colon | 是否需要冒号 | Boolean | true/false | false | 
| focus | 获取焦点 | Boolean | true/false | false | 
| clear | 是否显示清除按钮 | Boolean | true/false | false | 
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | Number | | 140 | 
| rules | 输入内容的校验规则| Object |  |    | 
| label-width | 表单项标题部分的宽度，单位rpx | Number |   |  150 | 
| disabled   | 设置是否禁用 | Boolean | true/false | false |
| label-layout  | 设置表单标题的显示位置 | String | left/right | left |
| label-class   | 设置表单项的外部样式类 | String |  |  
| l-placeholder-class   | 设置输入框占位文本的外部样式类 | String |  |  


### 表单项事件 (表单项 Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange | 键盘输入时触发            | 输入框当前值 value | -    |
| bind:linfocus  | 输入框聚焦时触发          | 输入框当前值 value  | -    |
| bind:linblur   | 输入框失去焦点时触发	   | 输入框当前值 value | -    |
| bind:linconfirm| 点击完成按钮时触发        | 输入框当前值 value  | -    |