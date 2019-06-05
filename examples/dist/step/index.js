<<<<<<< HEAD
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
  relations: {
    '../steps/index': {
      type: 'parent'
    },
  },
  properties: {
    icon: String,
    status: String,
    title: String,
    describe: String,
    iconSize: {
      type: Number,
      value: 24
    },
    iconColor: {
      type: String,
      value: '#fff'
    },
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
      })
    }
  }
=======
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
  relations: {
    '../steps/index': {
      type: 'parent'
    },
  },
  properties: {
    icon: String,
    status: String,
    title: String,
    describe: String,
    iconSize: {
      type: Number,
      value: 24
    },
    iconColor: {
      type: String,
      value: '#fff'
    },
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
      })
    }
  }
>>>>>>> 18190d0978d29cfe5061c5b387cf5d8f440ccad9
})