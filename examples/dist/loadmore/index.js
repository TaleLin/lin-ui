Component({
  externalClasses: ['l-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    show: Boolean,
    custom: Boolean,
    line: Boolean,
    color: String,
    type: {
      type: String,
      value: 'loading'
    },
    endText: {
      type: String,
      value: '我是有底线的~'
    },
    loadingText: {
      type: String,
      value: '加载中...'
    }
  },

  data: {

  },

  attached() {
    this._init();
  },

  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showLoadmore = (options) => {
        const {
          custom = false,
          line = false,
          color = '',
          type = 'loading',
          endText = '我是有底线的',
          loadingText = '加载中...'
        } = { ...options };
        this.setData({
          custom,
          line,
          color,
          type,
          endText,
          loadingText,
          show: true
        });
      };
      wx.lin.hideLoadmore = () => {
        this.setData({
          show: false
        });
      };
    },
    onLoadmore() {
      this.triggerEvent('lintap', {}, {
        bubbles: true,
        composed: true
      });
    }
  }
});
