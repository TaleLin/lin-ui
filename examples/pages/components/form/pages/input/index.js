// pages/view/pages/dialog/index.js
import navConfig from './input-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    form:{
      username:{
        type: 'string',
        required: true,
        min: 5,
        max: 10,
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  // 显示 toast
  onShowToastTap(e) {

    const type = e.currentTarget.dataset.type;
    const config = JSON.parse(JSON.stringify(this.data.navConfig[type].config));
    this.setData({
      currentConf: config,
      type
    });
  },

  // 隐藏 toast
  onHideToastTap() {
    this.data.currentConf.status = false;
    this.setData({
      currentConf: this.data.currentConf
    });
  },

  onYzmTap() {
    wx.showToast({
      title: '更换验证码成功~',
      icon:'none'
    });
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
