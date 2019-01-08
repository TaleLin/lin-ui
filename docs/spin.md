## 加载中 Spin
### 加载类型
可通过加载组件的`type`属性设置加载动画类型。

`type`共有三种属性，可选值为`flash`、`flip`、`change`可根据使用场景选择合适的类型，默认为`flash`。

#### 示例代码
```html
<l-spin show="{{true}}" type="flash"></l-spin>
<l-spin show="{{true}}" type="flip"></l-spin>
<l-spin show="{{true}}" type="change"></l-spin>
```

### 加载动画大小 
设置组件`size`属性可更改加载动画的大小。

`size`的可选值为`mini`、`defaut`、`large`，默认为`default`。

####  示例代码
```html
<l-spin show="{{true}}" size="mini"></l-spin>
<l-spin show="{{true}}" type="default"></l-spin>
<l-spin show="{{true}}" type="large"></l-spin>
```
### 自定义加载动画颜色
设置组件的`color`属性更改加载动画的颜色。默认颜色与主题色(theme_color)一致。

#### 示例代码
```html
<l-spin show="{{true}}" color="#666"></l-spin>
```
### 自定义加载动画
设置组件的`custom`属性为true可自定义加载动画，自定义内容在slot插槽中写入即可。

#### 示例代码
```html
<l-spin show="{{true}}" custom="{{true}}">
  //此处为自定义内容
  <image src="/image/view/spin.gif"></image>
</l-spin>
```

### 加载参数（Spin Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| show   | 是否显示加载动画   | Boolean   | ----   | false   | 
| type   | 加载动画类型   | String   | falsh/flip/change   | flash   | 
| size   | 加载动画大小   | String   | mini/default/large   | default   | 
| color  | 加载动画颜色    | String   | -----   | ----   | 
| custom   |  加载动画是否自定义   | Boolean   | -----   | false   | 
| l-class   | 覆盖动画区域自定义外部样式类   | String   | -----   | ---   | 