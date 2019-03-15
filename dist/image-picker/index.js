// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-item-class'],
  behaviors: ['wx://form-field'],
  properties: {
    tempFilePaths: {
      type: Array,
      value: []
    },
    // 最多可以选择的图片张数
    count: {
      type: [String, Number],
      value: 9
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
    // 选择图片的来源
    // sourceType: {
    //   type: String,
    //   value: '',
    // },
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
    // tempFilePaths: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 预览 preview
    onPreviewTap(e) {
      const that = this
      const index = e.currentTarget.dataset.index
      const tempFilePath = this.data.tempFilePaths[index]
      let detail = true;
      let option = {};
      if (this.data.isPreview === true) {
        wx.previewImage({
          current: tempFilePath, // 当前显示图片的http链接
          urls: that.data.tempFilePaths // 需要预览的图片http链接列表
        })
      }
      this.triggerEvent('linpreview', detail, option);
    },

    // 增加 add
    onAddTap(e) {
      const that = this
      const count = this.data.count - this.data.tempFilePaths.length
      if (count === 0 ) {
        return
      }
      wx.chooseImage({
        count,
        sizeType: this.data.sizeType,
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePath = res.tempFilePaths
          const newtempFilePaths = that.data.tempFilePaths.concat(tempFilePath)
          // 判断是否还能继续添加图片 
          if (newtempFilePaths.length === parseInt(that.data.count)) {
            that.setData({
              showBtn: false
            })
          }
          that.setData({
            tempFilePaths: newtempFilePaths,
            value: newtempFilePaths,
            tempFilePath
          })
          let detail = {
            current: tempFilePath,
            default: newtempFilePaths
          }
          let option = {};
    
          that.triggerEvent('linchange', detail, option);
        }
      })

    },

    // 删除 remove
    onDelTap(e) {
      const index = e.currentTarget.dataset.index
      const tempFilePaths = this.data.tempFilePaths
      const tempFilePath = tempFilePaths[index]
      tempFilePaths.splice(index, 1);
      // 判断是否还能继续添加图片 
      if (tempFilePaths.length < parseInt(this.data.count)) {
        this.setData({
          showBtn: true
        })
      }
      this.setData({
        tempFilePath,
        tempFilePaths,
        value: tempFilePaths,
      })
      let detail = {
        index,
        current: tempFilePath,
        default: tempFilePaths
      } 
      let option = {};

      this.triggerEvent('linremove', detail, option);
    },
    
  },

  attached: function () {
  },
})
