// components/cotent-title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String
    },
    describe: {
      type: String
    },
    doc: {
      type: Boolean,
      value: true
    }
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
    onDoc() {
      wx.navigateToMiniProgram({
        appId: 'wxb05fa7b69aa7e5b7',
        path: '/pages/md/index?title=' + this.properties.name + '&desc=' + this.properties.describe
      })
    }
  }
})