Component({
  externalClasses: ['l-class', 'l-select-class', 'l-image-class'],
  properties: {
    // 标签名称
    name: String,
    // 标签颜色
    bgColor: String,
    fontColor: String,
    disable: Boolean,
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
      type: String,
      value: '20'
    },
    iconColor: {
      type:String,
      value:'#3683D6'
    },
    image: String,
    iconStyle: {
      type: String,
      value: 'size:20;color:#3683D6'
    },
  },
  methods: {
    handleTap() {
      if (this.properties.disabled) return false;
      const options = {
        name: this.properties.name,
        select: this.properties.select
      }
      this.triggerEvent('lintap', options, {});
      this.triggerEvent('lintapcatch', options, {
        bubbles: true
      });
    }
  }
});