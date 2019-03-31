// toast
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [''],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal) {
        if (newVal) {
          setTimeout(() => {
            this.setData({
              show: false
            })
          }, this.properties.duration)
        }
      }
    },
    // 提示框的文本内容
    title: {
      type: String,
      value: '',
      observer: 'elip'
    },
    // icon
    icon: {
      type: String,
      value: '',

    },
    // icon-style
    iconStyle: {
      type: String,
      value: 'size:60; color:#fff',
      observer: 'parseIconStyle'
    },
    // image
    image: {
      type: String,
      value: '',
    },
    // icon-style
    imageStyle: {
      type: String,
      value: '60*60',
      observer: 'parseImageStyle'
    },
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
      value: 999
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

  },

  /**
   * 组件的初始数据
   */
  data: {},
  attached() {
    if (this.data.openApi) {
      this.initToast();
    }
  },

  lifetimes: {
    show() {
      if (this.data.openApi) {
        this.initToast();
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initToast() {
      const config = {
        title: '',
        icon: '',
        iconStyle: 'size:60; color:#fff',
        image: '',
        imageStyle: '60*60',
        placement: 'bottom',
        duration: 1500,
        center: true,
        mask: false,
      }
      wx.lin = wx.lin || {};
      wx.lin.showToast = (options) => {
        const {
          title = config.title,
            icon = config.icon,
            iconStyle = config.iconStyle,
            image = config.image,
            imageStyle = config.imageStyle,
            placement = config.placement,
            duration = config.duration,
            center = config.center,
            mask = config.mask,
        } = options;
        this.setData({
          title,
          icon,
          iconStyle,
          image,
          imageStyle,
          placement,
          duration,
          center,
          mask,
          show: true,
        });
        return this;
      };
    },

    // 返回icon的宽高
    parseIconStyle(str) {
      let arr = str ? str.split(";") : ['size: 60','color: #fff']
      arr.map((item) => {
        item = item.trim().split(':')
        this.setData({
          [item[0]]: item[1]
        })
        return item
      })
    },

    // 返回图片的宽高
    parseImageStyle(str) {
      let arr = str ? str.split("*") : [60, 60]
      if (arr.length === 1) {
        arr = [arr[0], arr[0]]
      }
      this.setData({
        imageW: arr[0],
        imageH: arr[1]
      })
      return arr
    },

    elip(text) {
      var textLen = text ? this.strlen(text) : 0
      if (textLen) {
        text = text.substring(0, 20)
      } else {
        text = ''
      }
      this.setData({
        title: text
      })
      return text
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
    doNothingMove(e) {
      // do nothing……
    },

    // 点击事件
    onMaskTap(e) {

      let detail = true;
      let option = {};

      if (this.data.locked !== true) {
        this.setData({
          fullScreen: 'hide',

          status: 'hide',
        })
      }
      this.triggerEvent('linTap', detail, option);
    }
  },

})