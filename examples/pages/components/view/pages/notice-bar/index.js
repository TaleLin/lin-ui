// pages/view/pages/notice-bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['我是通告栏一', '我是通告栏二', '我是通告栏三'],
    showIcon: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },

  tap() {
    this.setData({
      show: true
    });
  },

  handleIcon() {
    this.setData({
      showIcon:false
    });
  }
});
