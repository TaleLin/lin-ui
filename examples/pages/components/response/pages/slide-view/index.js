// pages/response/pages/slide-view/index.js
import navConfig from './slide-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    close: false,
    navConfig: navConfig,
    currentConf: {

    }
  },

  // 关闭slide
  onCloseTap() {
    wx.showToast({
      title: 'handle close',
      icon: 'none'
    });
  },

  // 打开slide
  onOpenTap() {
    wx.showToast({
      title: 'handle open',
      icon: 'none'
    });
  },

  // 关闭第五个slide
  onCloseFiveTap() {
    this.setData({
      close: true
    });
  },

  // 打开购物车菜单栏
  onSlideOpenTap(e) {
    const id = e.currentTarget.dataset.id;
    if(id === 1) {
      this.setData({
        close2: true,
        close3: true,
      });
    } else if(id === 2) {
      this.setData({
        close1: true,
        close3: true,
      });
    } else {
      this.setData({
        close1: true,
        close2: true,
      });
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});
