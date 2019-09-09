// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-item-class'],
  behaviors: ['wx://form-field'],
  properties: {
    urls: {
      type: Array,
      value: []
    },
    // 最多可以选择的图片张数
    count: {
      type: [String, Number],
      value: 9
    },
    // 清除urls
    clear: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        if (newVal) {
          this.handleClear();
        }
      }
    },
    // 每行可显示的个数
    size: {
      type: [String, Number],
      value: 3
    },
    // 所选的图片的尺寸 ['original', 'compressed']
    sizeType: {
      type: String,
      value: 'original',
    },
    // 图片裁剪、缩放的模式
    mode: {
      type: String,
      value: 'aspectFit', // 参考微信小程序 image 组件的mode属性列表
    },
    // 设置是否传入slot
    custom: {
      type: Boolean,
      value: false
    },
    // 是否可以预览
    isPreview: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showBtn: true,
    tempFilePath: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClear() {
      this.setData({
        urls: [],
        clear: false,
        showBtn: true
      });
      let detail = true;
      let option = {};
      this.triggerEvent('linclear', detail, option);
    },

    // 预览 preview
    onPreviewTap(e) {
      const that = this;
      const index = e.currentTarget.dataset.index;
      const tempFilePath = this.data.urls[index];
      let detail = {
        index, // 下标
        current: tempFilePath, // 当前显示图片的http链接
        all: that.data.urls // 需要预览的图片http链接列表
      };
      let option = {};
      if (this.data.isPreview === true) {
        wx.previewImage({
          current: tempFilePath, // 当前显示图片的http链接
          urls: that.data.urls // 需要预览的图片http链接列表
        });
      }
      this.triggerEvent('linpreview', detail, option);
    },


    // 增加 add
    onAddTap() {
      const that = this;
      const count = this.data.count - this.data.urls.length;
      if (count === 0 ) {
        return;
      }
      wx.chooseImage({
        count,
        sizeType: this.data.sizeType,
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePath = res.tempFilePaths;
          const newtempFilePaths = that.data.urls.concat(tempFilePath);
          // 判断是否还能继续添加图片 
          if (newtempFilePaths.length === parseInt(that.data.count)) {
            that.setData({
              showBtn: false
            });
          }
          that.setData({
            urls: newtempFilePaths,
            value: newtempFilePaths,
            tempFilePath
          });
          let detail = {
            current: tempFilePath,
            all: newtempFilePaths
          };
          let option = {};
    
          that.triggerEvent('linchange', detail, option);
        }
      });

    },

    // 删除 remove
    onDelTap(e) {
      const index = e.currentTarget.dataset.index;
      const urls = this.data.urls;
      const tempFilePath = urls[index];
      const tempFilePaths = this.handleSplice(urls, tempFilePath);
      // 判断是否还能继续添加图片 
      if (tempFilePaths.length < parseInt(this.data.count)) {
        this.setData({
          showBtn: true
        });
      }
      this.setData({
        tempFilePath,
        urls: tempFilePaths,
        value: tempFilePaths,
      });
      let detail = {
        index,
        current: tempFilePath,
        all: tempFilePaths
      }; 
      let option = {};

      this.triggerEvent('linremove', detail, option);

    },
    handleSplice(arr, current) {
      const newArr = arr.filter(item => item!== current);
      return newArr;
    },
    
  },

  attached: function () {
  },
});
