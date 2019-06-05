## 标签页 Tabs

标签页需`tabs`和`tabpanel`两个组件关联使用。

`tabpanel`用于设置每一个标签的名称、以及标签下对应的内容；

`tabs` 包裹在所有tabpanel最外层，`tabs`下的所有`tabpanel`属于同一个标签页。

### 等宽标签

默认为等宽标签，当标签数过多时可在`tabs`上设置`scrollable="{{true}}"`开启滚动标签栏。

默认激活的是第一个标签页，通过`tabs`组件上设置`active-key=${key}`配置初始状态时激活的选项卡。

必须在`tabpanel`组件中传入`tab`、`key`、`slot`属性，其中：

- `tab`是标签栏显示的文字；

- `key`为每个标签栏的标识，对应`tabs`中的`active-key`；

- 受小程序的限制，必须传属性`slot`且值的内容与`key`保持一致；

- `tabpanel`标签中包裹的内容为标签栏对应的内容。

#### 示例代码

```html
      <l-tabs bind:linchange="changeTabs">
        <l-tabpanel tab="京东物流" key="one" slot="one">
          <view class="tab-content">京东物流</view>
        </l-tabpanel>
        <l-tabpanel tab="品牌" key="two" slot="two">
          <view class="tab-content">品牌</view>
        </l-tabpanel>
        <l-tabpanel tab="接口" key="three" slot="three">
          <view class="tab-content">接口</view>
        </l-tabpanel>
        <l-tabpanel tab="面板" key="four" slot="four">
          <view class="tab-content">面板</view>
        </l-tabpanel>
      </l-tabs>
```

![默认](http://imglf3.nosdn.127.net/img/VVpkaDA0b3BNODZkZk9sS05xaEhzQnYxbGxOVm9PQ29MWHc3aG42RUU2MDllN2dWTDE3T2dBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)


### 标签页位置

默认标签页位置在顶部，可通过在`tabs`上设置`placement`属性切换标签栏位置，可选值有 `top`/`left`/`right`/`bottom`。

### 标签动画

在`tabs`上设置`animated="{{true}}"`开启标签页切换动画，默认不开启。


### 滑动切换标签

在`tabs`设置`swipeable="{{true}}"`时，支持滑动内容部分切换标签。

### 图标标签

在`tabpanel`上设置`icon`时，可以在标签栏上添加图标

通过在`tabpanel`上设置`icon`属性设置每个标签页显示图标类型，可配置图标类型同`Icon`组件一致，

使用`icon-style`修改icon的颜色和大小；语法同设置行内样式一致，支持属性为：`size`、`color`和`placement`；`placement`可选值有：`right`和`left`,默认为`left`。

### 图片资源

使用`image`配置图片资源的样式，可配置项有：
- `placement`:图片相对文本的位置，可选值有：`right`、`left`、`top`、`bottom`,默认为`left`。
- `defaultImage`:未选中时的图片资源,
- `activeImage`：选中时的图片资源


### 标签初始样式

- 标签栏位置在顶部和底部时的默认高度为`80rpx`，宽度等分，开启`scrollable`时，最小宽度为`160rpx`;
- 标签栏位置在左边或右边时，默认宽度为`160rpx`,高度等分,开启`scrollable`时，最小高度为`80rpx`;
- 可通过`l-class-header`、`l-class-active`、`l-class-inactive`覆盖默认标签栏样式。

### 混合标签页

除了单一使用的标签页外，还可以使用横竖混合的标签页，使用方式是将原来的`<l-tabs></l-tabs>`替换为`<combined-tabs></combined-tabs>`


### 标签页属性 (Tabs Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| l-class-header | 外部样式类，覆盖标签头部整体样式 | String | - | - |
| l-class-active | 外部样式类，覆盖标签激活状态样式 | String | - | - |
| l-class-inactive |外部样式类，覆盖标签默认状态样式 | String | - | - |
| active-key | 默认激活tabs的key | String | - | 默认为第一个 |
| placement | 标签位置 | String | `top`/`left`/`right`/`bottom` | `top` |
| animated  | 是否使用动画切换标签 | Boolean | `false` |
| swipeable | 是否支持滑动切换标签 | Boolean | `false` |
| scrollable | 是否滚动标签栏 | Boolean | `false` | - |
| active-color | 设置激活状态标签的文本和图标颜色 | String | 表示颜色的是16进制 | - |
| inactive-color | 设置未激活状态标签的文本和颜色 | String | 表示颜色的是16进制 | - |
| has-line | 设置是否显示标签下的装饰线 | Boolean | - | `true` |

### 标签页属性 (tabpanel Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| key | 对应 `active-key`，必填 | String	| - | - |
| tab | 选项卡头显示文字 | String| - | - |
| sub-key |混合选项卡时，选项卡竖向key | String	| - | - |
| sub-tab | 混合选项卡时，选项卡竖向显示文字 | String| - | - |
| slot | `key`一致，有`sub-key`时则与`sub-key`保持一致，必填 | String| - | - |
| icon	| 设置标签栏图标类型 | String |	- | - |
| icon-style | 设置图标的样式和位置 | String | css行内样式语法,属性值为`size`/`color`/`placement`| - |
| image | 设置标签栏图片资源 | object | {activeImage，defaultImage，placement，style} | - |


### 标签页事件 (Tabs Events）

| 事件名称   | 说明   | 返回值   |  备注   | 
|:----|:----|:----|:----|
| bind:linchange | tab切换的回调时间 | 当前激活标签页的key | - |

