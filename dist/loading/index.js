Component({
  externalClasses: ['l-container-class', 'l-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 类型
    type: {
      type: String,
      value: 'rotate'
    },
    // 动画颜色
    color: {
      type: String,
      value: ''
    },
    // loading 动画大小
    size: {
      type: String,
      value: 'default',
    },
    // 自定义
    custom: {
      type: Boolean,
      value: false,
    },
    // 全屏模式
    fullScreen: {
      type: Boolean,
      value: false,
    }
  },

  attached() {
    this._init();
  },

  pageLifetimes: {
    show() {
      this._init();
    },
  },

  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showLoading = (options) => {
        const {
          custom = false,
          fullScreen = false,
          color = '',
          type = 'rotate',
          size = 'default'
        } = { ...options };
        this.setData({
          custom,
          fullScreen,
          color,
          type,
          size,
          show: true
        });
      };
      wx.lin.hideLoading = () => {
        this.setData({
          show: false
        });
      };
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },
  }
});