## 加载中 Loading

> 当区域正在获取数据时使用，提高用户体验。


### 加载类型

可通过加载组件的`type`属性设置加载动画类型。并通过 设置`show` 为 `true` 或者 `false` 来控制它的显示与隐藏。

`type`共有三种状态，可选值为`flash`、`flip`、`change`，可根据使用场景选择合适的类型，默认为`flash`。

#### 示例代码
```html
<l-loading show="{{true}}" type="flash"></l-loading>
<l-loading show="{{true}}" type="flip"></l-loading>
<l-loading show="{{true}}" type="change"></l-loading>
```

![不同类型](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEZwNGtaQTh4OG16dVh5aVZtdXYxek9sdkg0d1d1a3ZmbXRBdnB3VUMvZS9BPT0.png?imageView&thumbnail=1102y145&type=png&quality=96&stripmeta=0)

### 加载动画大小 

设置组件`size`属性可更改加载动画的大小。

`size`的可选值为`mini`、`defaut`、`large`，默认为`default`。

####  示例代码
```html
<l-loading show="{{true}}" size="mini"></l-loading>
<l-loading show="{{true}}" type="default"></l-loading>
<l-loading show="{{true}}" type="large"></l-loading>
```

![不同大小](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZwNGtaQTh4OG16aXcwR05ibzNhMktQK3V5YmM0bmFXK0l2dHZoWlJDNDJBPT0.png?imageView&thumbnail=1102y145&type=png&quality=96&stripmeta=0)


### 自定义加载动画颜色

设置组件的`color`属性更改加载动画的颜色。默认颜色与主题色(theme_color)一致。

#### 示例代码

```html
<l-loading show="{{true}}" color="#666"></l-loading>
```

![不同颜色](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEZwNGtaQTh4OG16dUY0MW5nSFBNRyt4U1c3dWZlRVJqWit3NmtnbkF2SjNRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### 自定义加载动画

为适应不同的场景和需求，组件的内容部分（动画）可以通过自定义的方式来实现。

设置组件的`custom`属性为 `true` ，自定义内容在slot插槽中写入即可。也支持传入一个包含文字+image的子节点。

> Tips
 * loading组件只接收一个slot作为子节点，但你可以在这个子节点内添加更多的标签和内容
 
#### 示例代码
```html
<l-loading show="{{true}}" custom="{{true}}">
  <image src="/image/view/spin.gif"></image>
</l-loading>
```

![自定义加载动画](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEVEY3ZUSVgyc1ZuSEZCT2dYSjhkdVE3Z1VubDV6ZWloQzh0TjlGOVZCTE5BPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

### 全屏状态下的Loading

在开发工作的中，我们会遇到一种常见的场景：当跳转到一个新页面时，开始加载数据，全屏显示loading，当数据加载完成时，隐藏loading。

针对这种场景，我们可以通过设置 `full-screen` 属性为 `true` ，并配合外部样式类 `l-container-class` 来完成。

>Tips
 * 全屏模式下可以设置 `type` 值来指定不同的加载动画，同样也可以使用自定义的 `slot`，
 * `l-container-class` 可以用来设置背景部分的颜色，子节点的定位（flex布局），
 * `l-container-class` 无法改变`loading`背景的 `position`、`height`、`width` 属性。


#### 示例代码
```html
<l-loading
  l-container-class="l-container"
  show="{{show}}"
  full-screen="{{true}}"
  custom="{{true}}"
>
  <image class="loading-img" src="/image/static/loading.gif"></image>
</l-loading>
```

![全屏幕自定义加载动画](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEVEY3ZUSVgyc1ZuTWN3MzU2aTZBdUdneWlOOE1YemVCUTgrZ2RNUk00SjJnPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg)

### 加载中属性（Loading Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| show   | 是否显示加载动画   | Boolean   | ----   | false   | 
| type   | 加载动画类型   | String   | falsh/flip/change   | flash   | 
| size   | 加载动画大小   | String   | mini/default/large   | default   | 
| color  | 加载动画颜色    | String   | -----   | ----   |  主题色 |
| custom   |  加载动画（内容部分）是否自定义   | Boolean   | -----   | false   | 
| l-class   | 覆盖动画区域（内容部分）自定义外部样式类   | String   | -----   | ---   | 
| l-container-class   | 覆盖背景部分的自定义外部样式类   | String   | -----   | ---   | 