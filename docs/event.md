
## 组件的事件

### 事件绑定

在组件中事件的绑定写法同组件的属性，以key、value的形式。

- key以`bind`开头，然后跟上事件的类型，如`bind:lintap`、`catch:lintap`。
- value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。

### 事件冒泡和非冒泡

事件可以分为冒泡事件和非冒泡事件：

* 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
* 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

在使用组件事件时，使用bind或者catch表现一致，并不能阻止事件的冒泡。这和微信官方的设计有关，详情参看[微信小程序-组件事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)。

