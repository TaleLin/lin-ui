// form-item/form-item.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class'],
  properties: {
    // 表单标题（label）的文本
    label: {
      type: String,
      value: ''
    },
    // 是否必选
    required: {
      type: Boolean,
      value: false
    },
    // 是否需要冒号
    colon: {
      type: Boolean,
      value: false
    },
    // 表单项标题部分的宽度，单位rpx
    labelWidth: {
      type: Number,
      value: 100
    },
    // label标题的显示位置 left top right
    labelLayout: {
      type: String,
      value: 'left'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 校验
    rules: {
      type: String,
      value: 'required'
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