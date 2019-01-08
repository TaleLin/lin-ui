## 徽章 Badge

### 数字徽标

通过`count`属性设置徽标内显示的数字。

![数字徽标](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTY3JreWhScmkyOWtFa284UHpvWDNiNnFEeTVxV00rVm1nPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html 
<l-badge count="10">
  <!-- 插槽内的内容位于徽标左下角 -->
  <image src="/images/icon.png" />
</l-badge>
```

###数字显示方式

通过`count-type`属性设置徽标内数字的显示方式。可选值为`overflow`、`limit`、`custom`,默认值为`overflow`。

* 设置`count-type`为`overflow`，超过`max-count`会显示为`${max-count}+`。通过`max-count`属性修改数字最大值，`max-count`默认值为`99`。
* 设置`count-type`为`ellipsis`，超过`max-count`会显示为`...`。通过`max-count`属性修改数字最大值，`max-count`默认值为`99`。
* 设置`count-type`为`limit`时数字大于1000显示为`${count/1000}k`，超过10000显示为`${count/10000}w`。
* 设置自定义的数字显示格式请参考文本徽标。

![数字显示方式](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTVmFCS1krN1p5T3pPQ3FTSEVER05NYjRabWg5aTF5VnZ3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0)

#### 示例代码

```html
<l-badge count="100" max-count="99">
  <image src="/images/icon.png" />
</l-badge>
 
<l-badge count="1200" count-type="limit">
  <image src="/images/icon.png" />
</l-badge>
```

### 文字徽标

通过`content`属性设置徽标内显示的文字，建议此处不超过四个文字。

![文字徽标](http://imglf3.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTY0lVVkJhTVdJdXA0Tkw2d0pENGxqZmx5Z3VhUmliT3NRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

> tips：可在微信小程序项目内的wxs文件中自定义内容格式化函数,具体用法可参考以下示例代码。Lin-Mini也提供了内置的wxs格式化函数，具体用法参考[Lin-Mini的wxs文档](https://coding.net/u/indexer/p/Lin-mini/git/tree/master/docs/start.md)。

#### 示例代码

```html 
<l-badge content="文字">
  <image src="/images/icon.png" />
</l-badge>


<wxs src="../index.wxs" module="count" />
<l-badge content="count.overCount(100)">
  <image src="/images/icon.png" />
</l-badge>
```


```js
//wxs文件
var countFlow = function(count) {
  if (count > 99) {
    var finalCount = '99++'
  }
  return finalCount
}

module.exports = {
  overCount: overCount
};
```

### 红点徽标

通过`dot`属性设置徽标为红点徽标。

![红点徽标](http://imglf5.nosdn0.126.net/img/RW5CNXdoVFJDVmlUN01tNTlJaXhTYXF5ckNOMmR2VDg5TDhyamtISjhsTlpTQ2cwZkpQMTNBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0) 

#### 示例代码

```html
<l-badge dot="{{true}}">
  <image src="/images/icon.png" />
</l-badge>
```

### 徽标属性（Badge Attributes）
| 参数   | 说明   | 类型   | 可选值   | 默认值    | 
|:----|:----|:----|:----|:----|
| content   | 徽标显示的文字   | String   | -----   | ---   | 
| count   |  徽标显示的数字  | Number   | ----   | ---  | 
| count-type   |  数字的显示方式  | String   | overflow/limit/ellipsis  | overflow  | 
| max-count | 数字最大值，超过最大值时显示${max-count}+    | Number   | -----   | 99   | 
| dot  | 是否为红点徽标   | Boolean   | -----   | false   | 
| l-class   | 覆盖徽标区域的外部样式类   | String   | -----   | ---   | 

### 徽标事件（Tag Events）

| 事件名称   | 说明   | 返回值   | 备注   | 
|:----|:----|:----|:----|
| bind:lintap   | 点击徽标时触发的事件   | ----   | --------   | 

  [1]: https://coding.net/u/indexer/p/Lin-mini/git/blob/master/docs/start.md