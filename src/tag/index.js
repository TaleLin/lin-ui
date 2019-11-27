Component({
  externalClasses: ['l-class', 'l-select-class', 'l-image-class'],
  properties: {
    // 标签标识
    name: String,
    cell: Object,
    // 标签颜色
    type:{
      type: String,
      value: 'touch'
    },
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
      value: 'medium'
    },
    location: {
      type: String,
      value: 'left'
    },
    icon: String,
    iconSize: {
      type: String,
      value: '20'
    },
    iconColor: {
      type: String,
      value: '#3683D6'
    },
    image: String,
    iconStyle: {
      type: String,
      value: 'size:20;color:#3683D6'
    },
    height: Number
  },
  methods: {
    handleTap() {
      if (this.properties.disabled) return false;
      let options = {
        name: this.properties.name,
        cell: this.properties.cell,
        select: this.properties.select
      };
      this.triggerEvent('lintap', options, {
        bubbles: true,
        composed: true
      });
    }
  }
});
