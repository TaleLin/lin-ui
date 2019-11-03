Component({
  /**
     * 组件的属性列表
     */
  externalClasses: [],

  properties: {
  },

  attached() {
    this._init()
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
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.getValues = function (_this) {
        console.log(_this)
        console.log(this)
        console.log(_this.selectComponent("#love"))
      }
    }
  }
});
