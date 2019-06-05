
## 单项选择器 Radio-Group

> 单项选择器，基于原生组件`Radio-Group`封装，内部由多个`l-radio`组成。

## 单选项目 Radio

> 单选项目，基于原生组件`Radio`封装,内部可传入slot。必须与`Radio-Group`搭配使用。


###  基础案例

单项选择器内部由多个`l-radio`组成，`linchange`事件能监听到选中项的变化。

#### 示例代码
```html
<l-radio-group bind:linchange="onChangeTap" >
  <l-radio
    wx:for-items="{{items}}"
    wx:key="{{item.name}}"
    value="{{item.name}}"
    checked="{{item.checked}}"
    disabled="{{item.disabled}}">
  </l-radio>
</l-radio-group>
```

```js
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'FRA', value: '法国' },
    ]
  }
```

### 布局方式

根据具体需求，选择最佳的标签对齐方式（输入框标题和输入框部分）。

`placement` 默认值是 `left` ，即radio的选中图标居左显示。值为 `right` 时，图标居右显示。


#### 示例代码

```html
<l-radio-group bind:linchange="onChangeTap" >
  <l-radio
    placement="right"
    value="中国"
    checked="{{true}}">
    <text>中国</text>
  </l-radio>
</l-radio-group>
```


### 设置选中项

当我们需要将某一个`radio`设置为当前选中项时，设置 `checked` 为 `true` 即可。

#### 示例代码

```html
<l-radio value="CN"  checked="{{true}}" >
  <text>中国</text>
</l-radio>
```


### 设置选中项的颜色

当我们需要改变`radio`选中时的颜色时，可以通过`color` 属性来设置

#### 示例代码

```html
<l-radio value="CN"  checked="{{true}}"  color="red">
  <text>中国</text>
</l-radio>
```

### 设置禁用

当我们需要将某一个选项禁用时，设置 `disabled` 为 `true` 即可。

#### 示例代码

```html
<l-radio value="CN"  disabled="{{true}}" >
  <text>中国</text>
</l-radio>
```

### 自定义Radio的内容部分

通过 `<slot>` 的方式可以自定义`Radio`组件的右边部分。

#### 示例代码

```html
<l-radio value="CN"  checked="{{true}}"   disabled="{{true}}" >
  <view>
    <image src="path/to/img.png" class="img"/>
    <text>中国</text>
  </view>
</l-radio>
```


### 单选组件属性（Radio Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| value | 当前项的 value | String |  |  | 
| color | radio被选中时的颜色 | String | | #38g9db | 
| checked | 当前项是否选中 | Boolean | true/false  | false | 
| disabled   | 设置是否禁用 | Boolean | true/false | false |
| placement  | 设置radio图标的位置 | String | left/right | left |
| l-class   | 设置radio的外部样式类 | String |  |  


### 单项选择器事件 (Radio-Group Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linchange | 键盘输入时触发            | 选中项发生变化时触发 `linchange` 事件，event.detail = {value: 选中项radio的value} | -    |