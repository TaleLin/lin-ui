// miniprogram_npm/lin-ui/album/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-single-image-class', 'l-multi-image-class'],
  properties: {
    urls: {
      type: Array
    },
    // 是否可以预览
    preview: {
      type: Boolean,
      value: true
    },
    gapRow: {
      type: Number,
      value: 10,
    },
    gapColumn: {
      type: Number,
      value: 10,
    },
    // 单图时长边大小
    singleSize: {
      type: Number,
      value: 360,
    },
    // 多图时图片边长
    multipleSize: {
      type: Number,
      value: 158,
    },
    // 单图显示模式
    singleMode: {
      type: String,
      value: 'aspectFit',
    },
    // 多图显示模式
    multipleMode: {
      type: String,
      value: 'aspectFill',
    },
    key: {
      type: String,
      value: 'url'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 传值方式是新方式还是旧方式
    newType: true,
    // 单图短边大小
    shortSideValue: 0,
    // 图片排列几行
    row: 0,
    // 图片排列几列
    colum: 0,
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行

      //判断传入urls长度
      if (this.data.urls.length > 9) {
        const urls = this.data.urls.slice(0, 9);
        this.setData({
          urls
        });
        console.warn('超过9张图片！');
      }

      this.preview();

    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 判断传入的urls是字符串列表(old模式)还是对象列表(new模式) 
    judgeType() {
      const urls = this.data.urls;
      if (urls.length != 0) {
        if (typeof (urls[0]) !== 'object') {
          return false;
        }
      }
      return true;
    },

    //判断照片是横屏还是竖屏并计算短边的长度
    //如不指定短边的长度，短边会默认显示image组件的长度
    horizontalOrVertical: function (src) {
      wx.getImageInfo({
        src: src,
        success: (res) => {
          const longSide = res.width >= res.height ? res.width : res.height;
          const shortSide = res.width >= res.height ? res.height : res.width;
          this.setData({
            horizontalScreen: res.width >= res.height ? true : false,
            shortSideValue: shortSide * this.data.singleSize / longSide
          });
        }
      });
    },

    // 显示图片
    preview: function () {
      // 判断传入模式
      const newType = this.judgeType();
      this.setData({
        newType
      });
      //显示图片
      const urls = this.data.urls;
      const key = this.data.key;

      if (urls.length == 1) {
        this.horizontalOrVertical(newType ? urls[0][key] : urls[0]);
      }
    },

    onPreviewTap(e) {
      const index = e.currentTarget.id;
      const urls = this.data.urls;
      let tempFilePath = '';
      let previewImageList = [];
      const newType = this.data.newType;
      const key = this.data.key;

      if (newType) {
        tempFilePath = urls[index][key];
        for (let i = 0; i < urls.length; i++) {
          previewImageList.push(urls[i][key]);
        }
      } else {
        tempFilePath = urls[index];
        previewImageList = urls;
      }

      let detail = {
        index, // 下标
        current: urls[index], // 当前显示图片的http链接
        all: urls // 需要预览的图片http链接列表
      };
      let option = {};
      if (this.data.preview === true) {
        wx.previewImage({
          current: tempFilePath, // 当前显示图片的http链接
          urls: previewImageList // 需要预览的图片http链接列表
        });
      }
      this.triggerEvent('lintap', detail, option);
    }

  }
});