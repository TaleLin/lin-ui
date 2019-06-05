// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['mask-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 不透明度
    opacity: {
      type: [String, Number],
      value: .4
    },
    // mask的z-index值
    zIndex: {
      type: Number,
      value: -99,

    },
    // slot是否居中
    center: {
      type: Boolean,
      value: false,
    },
    // 锁定
    locked: {
      type: Boolean,
      value: true
    },
    // 全屏幕模式 暂不可用
    fullScreen: {
      type: String,
      value: ''
    },
    // 导航栏颜色
    NavColor: {
      type: String,
      value: ''
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
    // 阻止滑动
    doNothingMove(e) {
      // do nothing……
    },

    // 点击事件
    onMaskTap(e) {

      let detail = true;
      let option = {};

      if (this.data.locked !== true) {
        this.setData({
          // fullScreen: 'hide',
          show: false,
        })
      }
      this.triggerEvent('lintap', detail, option);
    }
  },

  attached: function () {
  },


})