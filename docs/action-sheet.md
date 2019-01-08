## 操作菜单 ActionSheet

`ActionSheet`组件有两种用法:

1 `wx.lin.showActionSheet(object)`，接近于微信原生API [wx.showActionShee](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)的调用方式.

2 常规组件的使用方式，通过更改传入的属性值来控制`ActionSheet`的显示和隐藏。

默认调用方式为`wx.lin.showActionSheet`。

### 基本使用 

在使用`wx.lin.showActionSheet`的调用时，与组件的使用一致，需要在json文件中引入组件，且在wxml中写入`action-sheet`组件。

`wx.lin.showActionSheet`接受的参数是个对象，里面包含了所有与操作菜单相关的属性。

> 必须传入`itemList`,且长度不能为0。

#### 示例代码

```html
<!-- html -->
<l-button l-class="button" size="large" bind:lintap="showActionSheet">操作</l-button>

<l-action-sheet/>
```

```javascript
// js
showActionSheet(){
    wx.lin.showActionSheet({
      itemList: [
      { 
        name: '今日不再出现此类内容'
      },
      {
        name: '屏蔽'
      }
    ],
}
```

### 操作菜单子菜单

操作菜单的子菜单通过`itemList`设置，接收的是一个数组，数组长度不能超过 10，当长度超过10时，只显示前10个内容。

同时，数组的每个item是个对象，可传入的属性有：

- `name`：子菜单显示的内容，必填;
- `icon`：子菜单显示的图标;
- `image`：子菜单上的图片，显示在文字左侧。如果`icon`和`image`同时使用，则`image`的优先级高于`icon`；
- `imageStyle`：子菜单的样式；
- `color`：子菜单的文字颜色;
- `openType`：子菜单的微信开放能力，参看[button](https://coding.net/u/indexer/p/Lin-mini/git/blob/b3e80a5d7cc9f0d07808918abf041d85d43b42c8/docs/button.md)

#### 示例代码

```javascript

itemList: [
    {
      name: '保存海报分享',
      image:'/images/response/picture.png', 
      imageStyle:'width:40rpx;height:40rpx;',
      color:'#3683D6'    
    },
    {
      name: '转发给好友',
      icon: 'share',
      color:'#F4516C',
      openType:'share'
      }
    ],

```

### 设置标题

通过在`wx.lin.showActionSheet`中传入`title`设置标题。

### 点击菜单子项和取消之后的回调函数

在`wx.lin.showActionSheet`中传入`success`和`fail`函数时，当点击操作菜单时，可触发传入的`success`函数，返回值包括所点击子菜单的位置索引和菜单的值；当点击背景蒙层或取消按钮时，触发`fail`函数。

### 关闭操作菜单

点击背景蒙层默认可以关闭操作菜单，通过在`wx.lin.showActionSheet`中传入`locked:false`，取消点击背景蒙层关闭操作菜单的功能。

通过改变`showCancel`的布尔值，设置是否显示取消按钮，默认不显示（`false`）；
`cancelText`设置取消按钮的文字内容，默认为`取消`。


### 外部样式类

- `l-class-title` 用于修改操作菜单的标题的样式
- `l-class-item` 修改操作菜单子菜单的样式
- `l-class-cancel` 修改操作菜单取消区域的样式

### 第二种用法

通过设置`open-api={{false}}`属性可关闭API调用，切换到组件使用模式。

设置组件`show`属性为`true`或`false`，可以控制`action-sheet`的显示和隐藏。

此外，可以给组件绑定点击操作菜单子菜单的点击事件(linitemtap)以及点击取消按钮和背景蒙层是的点击事件(lincancel)。

> bind:linitemtap 的返回值在 e.detail 中，success 时返回值通过参数的形式返回。

#### 示例代码

```html
<!-- html -->
<l-button l-class="button" size="large" bind:lintap="toggleActionSheet">
    操作
</l-button>

<l-action-sheet open-api="{{false}}" show-cancel item-list="{{itemList}}" show="{{false}}"   
  bind:linitemtap="linItemtap" bind:lincancel="lincancel"/>

```

```javascript
// js
 data: {
    show:false,
    itemList: [
      {
        name: '今日不再出现此类内容',
      },
      {
        name: '屏蔽',
      }
    ],
},

toggleActionSheet(){
    this.setData({
      show:true
    })
},

lincancel(){
    wx.showToast({
      title: '取消',
      icon: 'none'
    })
},

  lintapItem(e){
    wx.showToast({
      title: e.detail.item.name,
      icon: 'none'
    })
}
```

### 操作菜单属性 (ActionSheet Attributes）

| 参数           | 说明                                   | 类型    | 可选值 | 默认值  |
| :------------- | :------------------------------------- | :------ | :----- | :------ |
| l-class-title  | 覆盖操作菜单标题样式                   | String  | -      | -       |
| l-class-item   | 覆盖操作菜单除标题和取消区域之外的样式 | String  | -      | -       |
| l-class-cancel | 覆盖操作菜单取消区域的样式             | String  | -      | -       |
| show           | 设置操作菜单的显示和隐藏               | Boolean | -      | `false` |
| locked         | 是否取消点击背景关闭操作菜单的功能     | Boolean | -      | `false` |
| item-list       | 操作菜单的文字数组，具体参照后面的表格     | Array   | 必填   | []      |
| title          | 操作菜单的标题                             | String  | -      | -       |
| show-cancel    | 是否显示取消按钮                       | Boolean | -      | `false` |
| cancel-text    | 取消菜单的文字内容                     | String  | -      | `取消`  |
| open-api       | 是否允许使用 wx.lin.showActionSheet    | Boolean | -      | `true`  |

### 操作菜单子菜单组（ActionSheet ItemList）

| 参数       | 说明               | 类型   | 可选值           | 默认值 |
| :--------- | :----------------- | :----- | :--------------- | :----- |
| name       | 子菜单文案           | String | -                | -      |
| icon       | 子菜单图标           | String | -                | -      |
| image      | 子菜单上的图片       | String | -                | -      |
| imageStyle | 子菜单图片的样式     | String | css 行内样式写法 | -      |
| color      | 子菜单文字的颜色     | String | -                | -      |
| openType   | 子菜单的微信开放能力 | String | -                | -      |

### 操作菜单事件 (ActionSheet Events）

| 事件名称        | 说明                                              | 返回值          | 备注 |
| :-------------- | :------------------------------------------------ | :-------------- | :--- |
| bind:linitemtap | 当点击操作菜单子菜单组时触发,返回子菜单和子菜单所在索引 | { index , item} | -    |
| bind:lincancel  | 点击操作菜单取消按钮时触发                        | -               | -    |

### 操作菜单API调用参数（wx.lin.showActionSheet Attributes）

| 参数        | 说明                     | 类型     | 可选值 | 默认值  |
| :---------- | :----------------------- | :------- | :----- | :------ |
| itemList    | 子菜单数组           | Array    | 必填   | []      |
| title         | 操作菜单的标题           | String  | -      | -       |
| showCancel | 是否显示取消按钮         | Boolean  | -      | `false` |
| cancelText | 取消按钮的文字内容       | String   | -      | `取消`  |
| success     | 点击文子菜单后的回调函数 | function | -      | 否      |
| fail        | 点击取消的回调函数       | function | -      | 否      |
| locked         | 是否取消点击背景关闭操作菜单的功能     | Boolean | -      | `false` |

