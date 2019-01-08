## 倒计时 Countdown

### 目标时间

通过`time`设置目标时间，默认值为当前日期的后一天，`time`值格式默认为日期,通过`time-type`属性修改`time`属性值的格式，可选值为`datetime`、`second`，默认为`datetime`；

#### 示例代码

1 基本用法

> 当`time-type='datetime'`时，`time`值格式为日期,且需要大于当前日期，如果小于当前日期，组件不会开始工作；

![](http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5L0xvWVlHd1BKSEVsaVZHZ0JCdlk1V29rekx2S3lyNlBnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```html
    <l-countdown />
    <l-countdown time="2018-11-09"/>
```

2 修改`time-type`为`second`

> 当`time-type='second'`时，`time`属性接收一个整数，单位为秒，若传入的值小于0时，则会从0开始，目标时间为`time`的绝对值；若传入的值大于0，则会从`time`值开始，到0结束。

![](http://imglf3.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5ejhLbDNvK2MyY0laMUpRekpoZk93WjE0c3A2YU02bU1BPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```html
    <l-countdown time-type="second" time="1500"  />
    <l-countdown time-type="second" time="-1500" />
```

### 自定义显示日期模板

通过`format`定义时间显示的格式,默认为`{%d}天{%h}时{%m}分{%s}秒`;

#### 示例代码

![](http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5M0t2REZWTk91QWp3dkUzbkdhMUxSZVNIY0tPYXI3WHpBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```html
    <l-countdown time-type="second" time="60"  format="{%s}秒"/>
    <l-countdown time-type="second" time="1500" format="{%m}:{%s}"/>
    <l-countdown time-type="second" time="3690" format="{%h}:{%m}:{%s}"/>
    <l-countdown time-type="second" time="-1500" />

```

### 自定义样式

通过`l-class`修改倒计时组件整体样式，通过`l-class-time`修改倒计时组件中数字区域的样式

#### 示例代码

![](http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdIWkVtZ3NRc1d5NkRRUDNDUHNpY1RHSVlaZFJaVGJ3bnozZlNxRkJXNzRnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

```html
 <l-countdown l-class-time="countdown-blue" time="1500" time-type="second" l-class="countdown-text"/>
```
```css

.content .countdown-blue {
  width: 52rpx ;
  height: 52rpx;
  border: 2rpx solid #3683D6;
  border-radius: 50%;
  background:transparent;
  color: #3683D6;
}

.content .countdown-text {
  color: #3683D6;
}

```

### 停止计时器

通过`status`属性切换倒计时组件的计时状态，默认为true，表示计时器处于计时状态

### 倒计时 (Countdown Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| l-class | 修改倒计时组件的样式| - | - |
| l-class-time | 修改数字区域的样式 | - | - |
| time | 目标时间 | String | 日期或者秒数 | 当前日期的后一天 |
| time-type | 输入时间的格式 | String | `datetime`、`second`| `datetime` |
| status | 倒计时的计时状态 | Boolean | - | `true`|
| format | 自定义显示时间格式 | String | - | `{%d}天{%h}时{%m}分{%s}秒` |


### 倒计时 (Countdown Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| linend | 倒计时结束后的事件 | - | - |

### 拓展

> 未来 将behaviors、wxs单独写文档，会直接跳转到behaviors文档中

我们还将倒计时组件的部分属性和方法写在了`behaviors`文件中，如果有需要，可以直接引用behavior到你自己的组件中使用。具体使用方法参考[小程序behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)

### 行为属性 (Behavior Attributes)

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| time | 目标时间 | String | 日期或者秒数 | 当前日期的后一天 |
| time-type | 输入时间的格式 | String | `datetime`/`second`| `datetime` |
| status | 倒计时的计时状态 | Boolean | - | `true`|
| format | 自定义显示时间格式 | String | - | `{%d}天{%h}时{%m}分{%s}秒` |

### 行为事件 (Behavior Events)

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linend | 倒计时结束后的事件 | - | - |
