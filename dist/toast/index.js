import computeOffset from '../behaviors/computeOffset';
import zIndex from '../behaviors/zIndex';
import wacthShow from '../behaviors/wacthShow';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computeOffset, zIndex, wacthShow],
  externalClasses: ['l-bg-class', 'l-icon-class', 'l-class', 'l-image-class', 'l-title-class '],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 提示框的文本内容
    title: String,
    // icon
    icon: String,
    iconSize: String,
    iconColor: String,
    // image
    image: String,
    // 文字的显示方位
    placement: {
      type: String,
      value: 'bottom'
    },
    // 提示框显示的时长
    duration: {
      type: Number,
      value: 1500
    },
    // 提示框的层级
    zIndex: {
      type: Number,
      value: 777
    },
    // 设置提示框是否为垂直居中
    center: {
      type: Boolean,
      value: true
    },
    // 是否显示透明蒙层，防止触摸穿透
    mask: {
      type: Boolean,
      value: false
    },
    openApi: {
      type: Boolean,
      value: true,
    },
    offsetX: Number,
    offsetY: Number,
    bottom: Number,
    left: Number,
    toast_width: Number,
    toast_height: Number,
    screen_width: Number,
    screen_height: Number,
  },

  observers: {
    'show': function (show) {
      show && this.changeStatus();
    },
    'toast_width, toast_height, screenWidth, screenHeight, windowHeight, offsetX, offsetY': function (toast_width, toast_height, screenWidth, screenHeight, windowHeight, offsetX, offsetY) {
      // 以上数据有任意一项被更改的时候，调用以下函数
      if (this.data.mask) {
        const bottom = screenHeight - windowHeight - offsetY;
        const left = -offsetX;
        this.setData({
          bottom,
          left
        });
      } else {
        const bottom = (screenHeight - toast_height) / 2 - offsetY;
        const left = (screenWidth - toast_width) / 2 - offsetX;
        this.setData({
          bottom,
          left
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: false,
    success: '',
    fail: '',
    complete: ''
  },

  attached() {
    if (this.data.openApi) {
      this.initToast();
    }
  },

  pageLifetimes: {
    show() {
      if (this.data.openApi) {
        this.initToast();
      }
      this.offsetMargin();

      // 获取系统和组件的高宽信息
      this.getSystemInfo();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initToast() {
      wx.lin = wx.lin || {};
      wx.lin.showToast = (options = {}) => {
        const {
          title = '',
          icon = '',
          image = '',
          placement = 'bottom',
          duration = 1500,
          center = true,
          mask = false,
          success = null,
          complete = null,
          offsetX = 0,
          offsetY = 0,
          iconSize = '60',
          iconColor = 'fff',
        } = options;
        this.setData({
          title,
          icon,
          image,
          placement,
          duration,
          center,
          mask,
          success,
          complete,
          offsetY,
          offsetX,
          iconSize,
          iconColor,
        });
        this.changeStatus();
        this.getSystemInfo();
        return this;
      };
      wx.lin.hideMessage = () => {
        this.setData({
          status: false
        });
      };
    },

    getSystemInfo() {
      const that = this;

      // 获取组件的高宽信息
      const query = wx.createSelectorQuery().in(this);
      query.select('.toast').boundingClientRect(function (res) {
        that.setData({
          toast_width: res.width,
          toast_height: res.height,
        });
      }).exec();

      // 获取系统的高宽信息
      wx.getSystemInfo({
        success(res) {
          that.setData({
            screenWidth: res.screenWidth,
            screenHeight: res.screenHeight,
            windowHeight: res.windowHeight,
          });
        }
      });
    },

    strlen(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= '0x0001' && c <= '0x007e') || ('0xff60' <= c && c <= '0xff9f')) {
          len++;
        } else {
          len += 2;
        }
      }
      return len;
    },
    // 阻止滑动
    doNothingMove() {
      // do nothing……
    },

    // 点击事件
    onMaskTap() {

      let detail = true;
      let option = {
        bubbles: true,
        composed: true
      };

      if (this.data.locked !== true) {
        this.setData({
          fullScreen: 'hide',
          status: 'hide',
        });
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
});