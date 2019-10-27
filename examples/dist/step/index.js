Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [
    'l-class',
    'l-step-class',
    'l-title-class',
    'l-describe-class',
    'l-line-class'
  ],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../steps/index': {
      type: 'parent'
    },
  },
  properties: {
    icon: String,
    title: String,
    describe: String,
    iconSize: {
      type: Number,
      value: 24
    },
    iconColor: String,
    custom: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 与父组件通信并绑定相关配置数据
    updateDataChange(options) {
      this.setData({
        ...options
      });
    }
  }
});