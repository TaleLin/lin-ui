import zIndex from '../behaviors/zIndex';
import validator from '../behaviors/validator';
import eventUtil from '../core/utils/event-util';
import doNothing from '../core/behaviors/doNothingBehavior';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [zIndex, validator, doNothing],
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
    status: 'hide'
  },

  observers: {
    show(show) {
      if (show) {
        this.setData({
          status: 'show'
        });
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showPopup = (options) => {
        console.warn('wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html');
        this.linShow(options);
      };
      wx.lin.hidePopup = () => {
        console.warn('wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html');
        this.linHide();
      };
    },

    // 点击事件
    onPopupTap() {
      if (this.data.locked !== true) {
        this._hidePopup();
      }

      eventUtil.emit(this, 'lintap');
    },

    _hidePopup(){
      if(this.data.animation){
        this.setData({
          status: 'hide'
        });
        // 延迟 300ms 等动画结束再去掉节点
        setTimeout(() => {
          this.setData({
            show: false
          });
        }, 300);
      }else{
        this.setData({
          show: false,
          status: 'hide'
        });
      }
    },

    // ================= 开放函数 ========================
    /**
     * 显示 Popup
     */
    linShow(options) {
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
    },

    /**
     * 隐藏 Popup
     * 会忽略 locked 属性
     */
    linHide() {
      this._hidePopup();
    }
  }
});
