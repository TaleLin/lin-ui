
## 滑动菜单 SlideView

> 可通过滑动显示操作菜单。


###  基础案例

滑动菜单分为两个部分组成，一是在未滑动时看到的部分（如下图）

![未滑动](http://imglf4.nosdn0.126.net/img/YUdIR2E3ME5weEczWlN4T1ZicXVFWEpqVStuaUtJaUZ4QnVpeEhSMHhlbGZ5SWFCcStKc0lRPT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg)

二是在滑动时可见的部分（如下图的操作菜单部分）。

![未滑动](http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEczWlN4T1ZicXVFZG9Sb2hUb1U1c1NaaC9XWk9FS1Y5MlFMclRZbENpVVp3PT0.jpg?imageView&thumbnail=375x0&quality=96&stripmeta=0&type=jpg)

两者都是通过添加 `slot` 子节点来完成的。

因为 `SlideView` 组件较之前的组件较为特殊，这里会做一个说明，以供参考。

> 注意事项
 1. 为保证 `SlideView` 正常显示，我们需要设置 `SlideView `的 `height` 和 `width` 属性。
 2. 同时，我们需要传入两个`slot` 子节点，并且用 `slot="right"` 和 `slot="left"` 给子节点命名。（`lfet` 代表的是可见部分，`right`代表的是需要滑动时才可见的操作菜单部分）
 3. 标有 `slot="right"`的子节点的宽度要与组件的 `slide-width` 属性值相等。


#### 示例代码
```html
<l-slide-view height="140" width="750" slide-width="340"  >
  <view slot="left" class="left">
    <view class='left-con'>
      <text class='left-title'>购买运动器材</text>
      <text class='left-time'>10-26 18:50</text>
    </view> 
    <view class='left-price'><text style="color:rgba(244,81,108,1);">-</text> $2499</view>
  </view>
  <view slot="right" class="right">
    <text>喜欢</text>
    <text>分享</text>
    <text>删除</text>
  </view>
</l-slide-view>

```

如下图：


![slideView](http://imglf5.nosdn0.126.net/img/YUdIR2E3ME5weEczWlN4T1ZicXVFUTFOeGtoUXl3RFNzcVo4OW4zV3ljeE1lTmgxWjhFNnhnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)


### 自定义阈值

阈值是指当我们左滑或则右滑多少rpx时会触发 `SlideView` 开关的值。

`SlideView` 默认的阈值是 `1/2` 的操作菜单宽度，当然，为了不同宽度操作菜单能有更丝滑的体验，我们也提供自定义阈值，可以通过 `threshold` 属性来设置，单位是rpx。


### 自动关闭与主动关闭

我们除了滑动触发 `SlideView` 的关闭外，还可以通过另外两种方式来关闭它。

>Tips: 
 1. 设置 `auto-close`为 `true` 时， 我们点击了菜单栏部分，组件会自动关闭；
 2. 设置 `close` 为 `true` 时，组件会主动关闭。


### 滑动菜单属性（SlideView Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| width | 组件显示区域的宽度,不包含菜单栏部分,单位rpx | Number |  | 750 | 
| height | 组件显示区域的宽度,不包含菜单栏部分,单位rpx | Number |   | 100 | 
| slide-width | 组件滑动显示区域(菜单栏)的宽度，单位rpx| Number |  |  0  | 
| threshold | 触发组件菜单栏打开和关闭的阈值，单位rpx | Number |   |  菜单栏宽度/2 | 
| disabled   | 设置是否禁用 | Boolean | true/false | false |
| auto-close   | 设置点击菜单栏后是否自动关闭 | Boolean | true/false | false 
| close   | 设置是否主动关闭菜单栏 | Boolean | true/false | false 

### 滑动菜单事件 (SlideView Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:lintap | 点击菜单栏时触发 | click right | - |
| bind:slideopen | 菜单栏打开时触发 | true | - |
| bind:slideclose | 菜单栏关闭时触发 | false | - |



