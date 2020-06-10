// pages/view/items/mask/index.js
import navConfig from './pupop-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    currentConf: {

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },


  onPopupTap() {
    const type = this.data.type;
    if (type === 6) {
      wx.showToast({
        title: '请点击按钮取消！',
        icon: 'none'
      });
    }

  },

  // 显示Popup
  onShowPopupTap(e) {
    const type = e.currentTarget.dataset.type;
    const config = JSON.parse(JSON.stringify(this.data.navConfig[type].config));
    this.setData({
      currentConf: config,
      type
    });
  },

  // 隐藏Popup
  onHidePopupTap() {
    const type = this.data.type;
    this.data.currentConf.show = false;
    this.setData({
      currentConf: this.data.currentConf
    });

    if(type === 3) {
      wx.showToast({
        title: '已取消~',
        icon: 'none'
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
});
