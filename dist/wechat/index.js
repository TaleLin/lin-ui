// miniprogram_npm/lin-ui/wechat/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-one-image-class', 'l-multi-image-class'],
  properties: {
    urls: {
      type: Array,
      value: []
    },
    // 是否可以预览
    isPreview: {
      type: Boolean,
      value: true
    },
    // 多图模式时的尺寸大小
    size: {
      type: Number,
      value: 158,
    },
    gapRow: {
      type: Number,
      value: 10,
    },
    gapColum: {
      type: Number,
      value: 10,
    },
    // 1张图片时的显示模式
    modeOne: {
      type: String,
      value: 'aspectFit',
    },
    modeMultiple: {
      type: String,
      value: 'aspectFill',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 传值方式是新方式还是就方式
    newOrOld: {
      type: String,
      value: null
    },
    // 一张图片时，短边的长度
    shortSideValue: {
      type: Number,
      value: 0
    },
    // 图片排列几行
    row: {
      type: Number,
      value: 0,
    },
    // 图片排列几列
    colum: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      //判断传入urls长度
      if (this.data.urls.length > 9) {
        console.warn('超过9张图片！')
        return
      }
      // 判断传入模式
      const newOrOld = this.judgeNewOrOld();
      this.setData({
        newOrOld
      });

      //显示图片
      const urls = this.data.urls;

      // 根据urls长度判断布局
      switch (urls.length) {
        case 1:
          this.horizontalOrVertical(newOrOld == 'new' ? urls[0].url : urls[0]);
          break;
        case 2:
          this.setData({
            row: 1,
            colum: 2
          });
          break;
        case 3:
          this.setData({
            row: 1,
            colum: 3
          });
          break;
        case 4:
          this.setData({
            row: 2,
            colum: 2
          });
          break;
        case 5:
          this.setData({
            row: 2,
            colum: 3
          });
          break;
        case 6:
          this.setData({
            row: 2,
            colum: 3
          });
          break;
        case 7:
          this.setData({
            row: 3,
            colum: 3
          });
          break;
        case 8:
          this.setData({
            row: 3,
            colum: 3
          });
          break;
        case 9:
          this.setData({
            row: 3,
            colum: 3
          });
          break;
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 判断传入的urls是字符串列表(old模式)还是对象列表(new模式) 
    judgeNewOrOld: function () {
      const urls = this.data.urls;
      if (urls.length != 0) {
        if (typeof (urls[0]) != 'object') {
          return 'old';
        }
        return 'new';
      }
      return 'new';
    },

    //判断照片是横屏还是竖屏并计算短边的长度
    //如不指定短边的长度，短边会默认显示image组件的长度
    horizontalOrVertical: function (src) {
      var that = this;
      wx.getImageInfo({
        src: src,
        success(res) {
          const longSide = res.width >= res.height ? res.width : res.height;
          const shortSide = res.width >= res.height ? res.height : res.width;
          that.setData({
            horizontal_screen: res.width >= res.height ? true : false,
            shortSideValue: shortSide * 360 / longSide
          });
        }
      });
    },

    onPreviewTap(e) {
      const index = e.currentTarget.id;
      const urls = this.data.urls;
      var tempFilePath = '';
      var previewImageList = [];
      const newOrOld = this.data.newOrOld;

      if (newOrOld == 'old') {
        tempFilePath = urls[index];
        previewImageList = urls;

      } else {
        tempFilePath = urls[index].url;
        for (var i = 0; i < urls.length; i++) {
          previewImageList.push(urls[i].url);
        }
      }

      let detail = {
        index, // 下标
        current: urls[index], // 当前显示图片的http链接
        all: urls // 需要预览的图片http链接列表
      };
      let option = {};
      if (this.data.isPreview === true) {
        wx.previewImage({
          current: tempFilePath, // 当前显示图片的http链接
          urls: previewImageList // 需要预览的图片http链接列表
        });
      }
      this.triggerEvent('linpreview', detail, option);
    }

  }
});