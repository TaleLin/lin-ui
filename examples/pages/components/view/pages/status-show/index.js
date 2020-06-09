import navConfig from './status-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },

  onShowTap(option) {
    const id = option.target.dataset.id;
    wx.navigateTo({
      url: 'show/show?id=' + id
    });
  }
});
