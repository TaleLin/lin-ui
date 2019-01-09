Component({
  externalClasses: ['l-class', 'l-select-class','l-image-class'],
  properties: {
    // 标签名称
    name: String,
    // 标签颜色
    color: String,
    // 标签形状
    shape: {
      type: String,
      value: 'square'
    },
    // 是否为选中态
    select: Boolean,
    // 是否镂空
    plain: Boolean,
    // 标签大小
    size: {
      type: String,
      value: 'mini'
    },
    location: {
      type: String,
      value: 'left'
    },
    iconName: String,
    iconSize: {
      type:String,
      value:'20'
    },
    iconColor: String,
    image: String
  },
  methods: {
    handleTap() {
      const options = {
        name: this.properties.name,
        select: this.properties.select
      }
      this.triggerEvent('lintap', options, {});
    },
    handleCatch() {
      const options = {
        name: this.properties.name,
        select: this.properties.select
      }
      this.triggerEvent('lintap', options, {
        bubbles: true
      });
    }
  }
});