import validator from '../behaviors/validator';

Component({
  externalClasses: ['l-class', 'l-loading-class', 'l-end-class', 'l-line-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [validator],
  properties: {
    show: Boolean,
    custom: Boolean,
    line: Boolean,
    color: String,
    size: {
      type: String,
      value: '28'
    },
    type: {
      type: String,
      value: 'loading',
      options: ['loading', 'end']
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

  pageLifetimes: {
    show() {
      this._init();
    },
  },

  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showLoadmore = (options) => {
        const {
          custom = false,
          line = false,
          color = '',
          size = '28',
          type = 'loading',
          endText = '我是有底线的',
          loadingText = '加载中...'
        } = { ...options };
        this.setData({
          custom,
          line,
          color,
          size,
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
