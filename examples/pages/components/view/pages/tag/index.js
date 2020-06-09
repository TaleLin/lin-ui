import tagNaviConfigs from './tag-nav.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagNaviConfigs: tagNaviConfigs,
    select: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },

  selectTap() {
    this.setData({
      select: !this.data.select
    });
  }

});
