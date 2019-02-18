
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class','l-unit-class', 'l-count-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    unit: {
      type: String,
      value: '￥'
    },
    unitColor: {
      type: String,
      value: '#333'
    },
    unitSize: {
      type: [String, Number],
      value: 28
    },
    unitBold: {
      type: String,
      value: 'normal'
    },
    count: {
      type: Number,
      value: 0.00
    },
    countColor: {
      type: String,
      value: '#333'
    },
    countSize: {
      type: [String, Number],
      value: 28
    },
    countBold: {
      type: String,
      value: 'normal'
    },
    delete: Boolean,
    delColor: {
      type: String,
      value: '#777'
    },
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

  }
})