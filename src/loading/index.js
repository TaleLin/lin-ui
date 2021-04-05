import computeOffset from '../behaviors/computeOffset';
import validator from '../behaviors/validator';

Component({
  behaviors: [computeOffset, validator],
  externalClasses: ['l-container-class', 'l-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    opacity: {
      type: String,
      value: '1'
    },
    bgColor: {
      type: String,
      value: ''
    },
    zIndex: {
      type: String,
      value: '776'
    },
    // 类型
    type: {
      type: String,
      value: 'rotate',
      options: ['flash', 'flip', 'change', 'rotate', 'circle']
    },
    // 动画颜色
    color: {
      type: String,
      value: ''
    },
    // loading 动画大小
    size: {
      type: String,
      value: 'medium',
    },
    // 自定义
    custom: {
      type: Boolean,
      value: false
    },
    // 全屏模式
    fullScreen: {
      type: Boolean,
      value: false
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
        console.warn('wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html');
        if (!options) {
          options = {};
        }
  
        const {
          custom = false,
          fullScreen = false,
          color = '',
          type = 'rotate',
          size = 'medium',
          opacity = '1',
          bgColor = '',
          zIndex = '776',
        } = { ...options };
        this.setData({
          bgColor,
          zIndex,
          custom,
          fullScreen,
          color,
          type,
          size,
          opacity,
          show: true
        });
      };
      wx.lin.hideLoading = () => {
        console.warn('wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html');
        this.setData({
          show: false
        });
      };
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },

    // ========== 开放函数 =============

    /**
     * 显示 Loading
     * @param {*} options Loading 组件参数
     */
    linShow(options) {
      if (!options) {
        options = {};
      }

      const {
        custom = false,
        fullScreen = false,
        color = '',
        type = 'rotate',
        size = 'medium',
        opacity = '1',
        bgColor = '',
        zIndex = '776',
      } = { ...options };
      this.setData({
        bgColor,
        zIndex,
        custom,
        fullScreen,
        color,
        type,
        size,
        opacity,
        show: true
      });
    },

    /**
     * 隐藏 Loading
     */
    linHide() {
      this.setData({
        show: false
      });
    }
  }
});
