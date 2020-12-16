// miniprogram_npm/lin-ui/album/index.js
Component({
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
    },
    maxNumber: {
      type: Number,
      value: 9
    },
    customRowNumber: {
      type: Boolean,
      value: false
    },
    everyRowNumber: {
      type: Number,
      value: 3
    },
    previewFullImage: {
      type: Boolean,
      value: true,
    }
  },

  data: {
    // 传值方式是新方式还是旧方式
    newType: true,
    // 单图短边大小
    shortSideValue: 0,
    // 用于显示的图片列表
    showUrls: [],
    // 传入的url长度是否大于maxNumber指定的数量
    isLong: false,
  },

  observers: {
    'urls': function () {
      this.init();
    }
  },

  methods: {

    /**
     * 在 urls 数据变化后进行初始化
     */
    init() {
      // 取出参数
      let {urls, maxNumber, key} = this.data;

      // 如果 urls 长度超出指定图片数量，则将其截断
      if (urls.length > maxNumber) {
        urls = urls.slice(0, maxNumber);
        this.setData({
          isLong: true,
        });
      }

      this.setData({
        showUrls: urls
      });

      if (!this.data.customRowNumber) {
        let urlLength = this.data.showUrls.length;
        if (urlLength > 1 && urlLength < 5) {
          this.setData({
            everyRowNumber: 2
          });
        } else (this.setData({
          everyRowNumber: 3
        }));
      }

      // 判断传入模式
      const newType = this.judgeType();
      this.setData({
        newType
      });

      if (urls.length === 1) {
        this.horizontalOrVertical(newType ? urls[0][key] : urls[0]);
      }
    },

    // 判断传入的urls是字符串列表(old模式)还是对象列表(new模式)
    judgeType() {
      const urls = this.data.urls;
      if (urls.length !== 0) {
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
            horizontalScreen: res.width >= res.height,
            shortSideValue: shortSide * this.data.singleSize / longSide
          });
        }
      });
    },

    onPreviewTap(e) {
      const index = e.currentTarget.id;
      let urls;
      if (this.data.previewFullImage) {
        urls = this.data.urls;
      } else {
        urls = this.data.showUrls;
      }

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
