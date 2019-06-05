## 图标 Icon

> 语义化的矢量图形

### 图标库

![1](http://imglf3.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEdTViN1FVZFFIWGpmVG4xZERSNG5xRFBJYmQ5b3Z2Vi9BPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg)

> 更多图标请移步示例小程序中查看


### 图标类型

通过在`<l-icon/>`上设置图标组件的`name`属性,来指定要使用的图标。
> `name`属性为必填。

#### 示例代码

```html
<l-icon name="add"/>
```

![默认](http://imglf4.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEdWNwankwZ1k1TlBiS01kemg0UUF3a3dxL05IYXZ5NDdnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

### 图标样式

您还可以通过`color`和`size`属性分别设置不同颜色和大小的图标，以适用于不同的场景。

#### 示例代码

- 修改图标颜色

```html
<l-icon name="setting" color="#34BFA3"/>
<l-icon name="setting" color="#F4516C"/>
<l-icon name="setting" color="#FFE57F"/>
```

![修改图标颜色](http://imglf6.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEcjYweE1jLzkvZk5DYlpBNzc0TFBjZkY3aklNUlZsODFBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)

- 修改图标大小（单位：rpx）

```html
<l-icon name="user" size="30"/>
<l-icon name="user" size="40"/>
<l-icon name="user" size="50"/>
```

![修改图标大小](http://imglf5.nosdn.127.net/img/VVpkaDA0b3BNODdRS0xLc0NPekxEa29ON28vWDI3dlJTbWdlK2d0YkJMVXNnUStndjA0ZzBRPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg)


### 图标属性（Icon Attributes）

| 参数   | 说明 | 类型 | 可选值 | 默认值 |  
|:----|:----|:----|:----|:----|
| name |	图标的名称，必填 |	String	| - | - |
| color|    图标的颜色      |  String  | - | 默认为主题色 |
| size |	图标的大小（单位：rpx）| Number | - | `40rpx` |

