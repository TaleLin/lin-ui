import zIndex from '../behaviors/zIndex';
import validator from '../behaviors/validator';
import eventUtil from '../core/utils/event-util';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [zIndex, validator],
  externalClasses: ['l-bg-class', 'l-panel-class', 'l-class'],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 动画效果的显示和隐藏
    animation: {
      type: Boolean,
      value: true
    },
    // 替代 animation
    transition: {
      type: Boolean,
      value: null
    },
    // slot的位置
    contentAlign: {
      type: String,
      value: 'center',
      options: ['top', 'right', 'left', 'bottom', 'center']
    },
    // 替代 contentAlign
    direction: {
      type: String,
      value: null,
      options: ['top', 'right', 'left', 'bottom', 'center']
    },
    // 锁定
    locked: {
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
  /**
   * 组件的初始数据
   */
  data: {
    status: 'show'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showPopup = (options) => {
        const {
          zIndex = 99,
          animation = true,
          contentAlign = 'center',
          locked = false
        } = {...options};
        this.setData({
          zIndex,
          animation,
          contentAlign,
          locked,
          show: true
        });
      };
      wx.lin.hidePopup = () => {
        this.setData({
          status: 'hide'
        });
        setTimeout(() => {
          this.setData({
            show: false
          });
        }, 300);
      };
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },
    doNothingTap() {
      // do nathing
    },

    // 点击事件
    onPopupTap() {
      let detail = true;
      if (this.data.locked !== true) {
        if (!this.data.show) {
          this.setData({
            show: true,
            status: 'show'
          });
        } else {
          this.setData({
            status: 'hide'
          });
          setTimeout(() => {
            this.setData({
              show: false,
              status: 'show'
            });
          }, 300);
        }
      }

      eventUtil.emit(this,'lintap', detail);
    }
  }
});
