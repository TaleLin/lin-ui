import tagNaviConfigs from './tag-nav.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagNaviConfigs: tagNaviConfigs,
    select: false,
    imgUrls: [
      '111',
      '222',
      '333'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },

  selectTap() {
    this.setData({
      select: !this.data.select
    })
  }

})