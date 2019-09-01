// dist/status-show/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-image-class', 'l-button-class', 'l-describe-class', 'l-container-class'],
  properties: {
    show: Boolean,
    type: {
      type: String,
      value: 'success',
      observer: '_changeStatus'
    },
    image: String,
    describe: String,
    buttonText: String,
    bgColor: {
      type: String,
      valure: '#fff'
    },
    top: {
      type: Number,
      value: 260,
    },
    autoFit: {
      type: Boolean,
      value: true,
    },
    buttonColor: {
      type: String,
      value: ''
    },
    part: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiple: 1,
    image_margin_top: 260,
    ad_img_width: 198,
    ad_img_height: 204,
    top_img_width: 264,
    top_img_height: 204,
    left_img_width: 120,
    left_img_height: 184,
    text_margin_top: 40,
    font_size: 30,
    button_margin_top: 80,
    button_height: 36,
    button_width: 90,
  },

  lifetimes: {
    attached: function () {
      this._initStatusShow();
      if (this.data.autoFit) {
        this.autoSetMarginTop();
      }
    },

    ready() {
      this._changeStatus();
    },
  },

  pageLifetimes: {
    show() {
      this._initStatusShow();
      const that = this;

      wx.getSystemInfo({
        success(res) {
          that.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth,
            px2rpx: res.windowWidth / 750
          });
        }
      });

      if (!this.data.part) {
        return;
      }

      const query = wx.createSelectorQuery().in(this);
      query.select('#statusShow').boundingClientRect();
      query.exec(function (res) {
        const multiple_width = res[0].width / that.data.windowWidth;
        const multiple_height = res[0].height / that.data.windowHeight;
        const multiple = multiple_width > multiple_height ? multiple_height : multiple_width;
        that.setData({
          statusShow_width: res[0].width,
          statusShow_height: res[0].height,
          multiple,
          ad_img_width: that.data.ad_img_width * multiple,
          ad_img_height: that.data.ad_img_height * multiple,
          top_img_width: that.data.top_img_width * multiple,
          top_img_height: that.data.top_img_height * multiple,
          left_img_width: that.data.left_img_width * multiple,
          left_img_height: that.data.left_img_height * multiple,
          top: that.data.top * multiple,
          text_margin_top: that.data.text_margin_top * multiple,
          font_size: that.data.font_size * multiple > 16 ? that.data.font_size * multiple : 16,
          button_margin_top: that.data.button_margin_top * multiple,
        });
      });

      const query_button = wx.createSelectorQuery().in(this);
      query_button.select('#button').boundingClientRect();
      query_button.exec(function (res) {
        if (res[0]) {
          that.setData({
            button_height: that.data.button_height * that.data.multiple > 28 ? that.data.button_height * that.data.multiple : 28,
            button_width: that.data.button_width * that.data.multiple,
          });
        }
      });
    },
  },

  observers: {
    'type, statusShow_height, text_margin_top, button_height, button_margin_top': function () {
      if (this.data.part) {
        const image_height = this.data.type == 'success' || this.data.type == 'error' ? this.data.left_img_height : this.data.type == 'address' ? this.data.ad_img_height : this.data.top_img_height;
        const button_height = this.data.buttonText || this.data.type == 'cart' || this.data.type == 'network' ? 44 : 0;
        const button_margin_top = this.data.buttonText || this.data.type == 'cart' || this.data.type == 'network' ? this.data.button_margin_top : 0;
        const top = (this.data.statusShow_height / this.data.px2rpx - image_height - this.data.text_margin_top - button_height - button_margin_top - 44) / 2;
        this.setData({
          top
        });
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _initStatusShow() {
      wx.lin = wx.lin || {};
      wx.lin.showStatusShow = (options = {}) => {
        const {
          type = 'success',
          image = '',
          describe = '',
          buttonText = '',
          bgColor = 'fff',
          top = 260,
          autoFit = true,
          buttonColor = '',
          part = false,
        } = options;
        if (autoFit) {
          this.setData({
            type,
            image,
            describe,
            buttonText,
            bgColor,
            autoFit,
            buttonColor,
            show: true,
            part,
          });
        } else {
          this.setData({
            type,
            image,
            describe,
            buttonText,
            bgColor,
            autoFit,
            top,
            buttonColor,
            show: true,
            part,
          });
        }

        this._changeStatus();
        return this;
      };
    },

    autoSetMarginTop() {
      const that = this;
      const image_height = this.data.type == 'success' || this.data.type == 'error' ? this.data.left_img_height : this.data.type == 'address' ? this.data.ad_img_height : this.data.top_img_height;
      const button_height = this.data.buttonText || this.data.type == 'cart' || this.data.type == 'network' ? 72 : 0;
      const button_margin_top = this.data.buttonText || this.data.type == 'cart' || this.data.type == 'network' ? 80 : 0;
      wx.getSystemInfo({
        success(res) {
          const multiple = res.windowWidth / 750;
          // 屏幕居中
          const top = (res.screenHeight / multiple - image_height - 40 - 84 - button_height - button_margin_top) / 2 + res.windowHeight / multiple - res.screenHeight / multiple;
          // 可视区域居中
          // const top = (res.windowHeight * 750 / res.windowWidth - image_height - 40 - 84 - button_height - button_margin_top) / 2 

          that.setData({
            top: top
          });

        }
      });
    },

    _changeStatus() {
      switch (this.properties.type) {
      case 'success':
        this.setData({
          typeImage: 'image/success.png',
          typeText: '操作成功~'
        });
        break;
      case 'error':
        this.setData({
          typeImage: 'image/error.png',
          typeText: '操作失败~'
        });
        break;
      case 'cart':
        this.setData({
          typeImage: 'image/cart.png',
          typeText: '购物车空空如也，去逛逛吧~'
        });
        break;
      case 'order':
        this.setData({
          typeImage: 'image/order.png',
          typeText: '您暂时还没有订单哦~'
        });
        break;
      case 'network':
        this.setData({
          typeImage: 'image/network.png',
          typeText: '糟糕！网络错误~'
        });
        break;
      case 'address':
        this.setData({
          typeImage: 'image/address.png',
          typeText: '您暂时还没有地址哦~'
        });
        break;
      case 'product':
        this.setData({
          typeImage: 'image/product.png',
          typeText: '暂时还没有商品哦~~'
        });
        break;
      case 'data':
        this.setData({
          typeImage: 'image/data.png',
          typeText: '暂时还没有相关数据哦~~'
        });
        break;
      }
    },

    tapStatusShow() {
      this.triggerEvent('lincorvertap', {}, {
        bubbles: true,
        composed: true
      });
    },

    loadimage(e) {
      this.setData({
        customImageHeight: e.detail.height,
        customImageWidth: e.detail.width
      });
      if (this.data.part) {
        this.setData({
          customImageHeight: this.data.customImageHeight * this.data.multiple,
          customImageWidth: this.data.customImageWidth * this.data.multiple
        });
      }
    }

  }
});