import clipperNaviConfigs from './clipper-nav';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clipperNaviConfigs,
    currentConfig: {},
    toolsConfig: {},
    currentIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const current = this.data.clipperNaviConfigs[this.data.currentIndex];
    this.setData({
      currentConfig: current.config,
      toolsConfig: current.toolsConfig
    });
  },
  linclip(event) {
    let {
      clipperNaviConfigs,
      currentIndex
    } = this.data;
    clipperNaviConfigs[currentIndex].config.resultImageUrl = event.detail.url;
    this.setData({
      clipperNaviConfigs,
      'currentConfig.show': false
    });
  },
  upload(event) {
    const currentIndex = event.currentTarget.dataset.index;
    const current = this.data.clipperNaviConfigs[currentIndex];
    let currentConfig = current.config;
    let toolsConfig = current.toolsConfig;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        currentConfig.imageUrl = tempFilePaths;
        currentConfig.show = true;
        this.setData({
          currentConfig,
          toolsConfig,
          currentIndex
        });
      }
    });
  },
  showClipper(event) {
    const currentIndex = event.currentTarget.dataset.index;
    const current = this.data.clipperNaviConfigs[currentIndex];
    let currentConfig = current.config;
    let toolsConfig = current.toolsConfig;
    currentConfig.show = true;
    this.setData({
      currentConfig,
      currentIndex,
      toolsConfig
    });
  },
});
