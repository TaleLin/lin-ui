// dist/status-show/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-image-class', 'l-button-class', 'l-describe-class'],
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
      type: String,
      value: "384",
    },
    autoFit: {
      type: Boolean,
      value: true,
    },
    buttonColor: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready() {
    this._changeStatus();
  },

  lifetimes: {
    attached: function () {
      this._initStatusShow();
      if (this.data.autoFit) {
        this.autoSetMarginTop()
      }
    },
  },

  pageLifetimes: {
    show() {
      this._initStatusShow();
    },
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
            top = "",
            autoFit = true,
            buttonColor = "",
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
          });
        }

        this._changeStatus();
        return this;
      };
    },

    autoSetMarginTop(){
      const that = this
      wx.getSystemInfo({
        success(res) {
          const top = (res.windowHeight * 750 / res.windowWidth - 246) / 2 * 0.7
          that.setData({
            top: top
          })
        }
      })
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
  }
});