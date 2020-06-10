import validator from '../behaviors/validator';
import zIndex from '../behaviors/zIndex';
const detail = true;
const option = {
  bubbles: true,
  composed: true
};

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [zIndex, validator],
  externalClasses: ['l-class', 'l-panel-class', 'l-bg-class', 'l-header-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 最大高度
    maxHeight: {
      type: Number,
      value: 600
    },
    // 最小高度
    minHeight: {
      type: Number,
      value: 200
    },
    // 顶部弧度
    arcRadius: {
      type: Number,
      value: 18
    },
    // 动画效果的显示和隐藏
    transition: {
      type: Boolean,
      value: true
    },
    // 锁定
    locked: {
      type: Boolean,
      value: false
    },
    // 背景透明度
    opacity: {
      type: Number,
      value: 0.4
    },
    // 弹出方向
    direction: {
      type: String,
      options: ['top', 'bottom'],
      value: 'bottom'
    },
    // header是否吸顶
    headerFixed: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _arcRadiusTop: 12,
    _ardRadiusBottom: 18,
    arcStyle: ''
  },

  /**
   * 侦听器
   */
  observers: {
    'show': function (show) {
      if (show) {
        this.triggerEvent('linshow', detail, option);
        this.getArcPopupStyle();
      } else {
        this.triggerEvent('linclose', detail, option);
      }
    },
    'arcRadius': function (arcRadius) {
      if (this.properties.direction === 'top') {
        this.data._arcRadiusTop = arcRadius;
      } else {
        this.data._ardRadiusBottom = arcRadius;
      }
      this.getArcPopupStyle();
    }
  },

  pageLifetimes: {
    show() {
      this._init();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.showArcPopup = (options) => {
        const {
          zIndex = 99,
          tranistion = true,
          direction = 'bottom',
          locked = false
        } = {
          ...options
        };
        this.setData({
          zIndex,
          tranistion,
          direction,
          locked,
          show: true
        });
      };
      wx.lin.hideArcPopup = () => {
        this.setData({
          show: false
        });
      };
    },
    getArcPopupStyle() {
      const direction = this.properties.direction;
      const arcRadiusTop = this.data._arcRadiusTop;
      const ardRadiusBottom = this.data._ardRadiusBottom;
      const maxHeight = this.properties.maxHeight;
      const minHeight = this.properties.minHeight;
      const arcStyle = `
        border-bottom-left-radius:${direction === 'top' ? arcRadiusTop : 0}rpx;
        border-bottom-right-radius:${direction === 'top' ? arcRadiusTop : 0}rpx;
        border-top-left-radius:${direction === 'bottom' ? ardRadiusBottom : 0}rpx;
        border-top-right-radius:${direction === 'bottom' ? ardRadiusBottom : 0}rpx;
        max-height:${maxHeight}rpx;
        min-height:${minHeight}rpx;
      `;
      this.setData({
        arcStyle,
      });
    },
    onArcPopupTap() {
      if (this.data.locked) {
        return;
      }
      if (this.properties.show) {
        this.setData({
          show: false
        });
      }
    }
  },

  ready() {
    this.getArcPopupStyle();
  }
});
