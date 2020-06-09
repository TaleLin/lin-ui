// pages/components/view/pages/steps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },

  onNext() {
    if (this.data.activeIndex < 2) {
      this.setData({
        activeIndex: this.data.activeIndex + 1
      });
    } else {
      wx.lin.showToast({
        title: '已经到最后一步了哦'
      });
    }
  },

  onPrevious() {
    if (this.data.activeIndex > 0) {
      this.setData({
        activeIndex: this.data.activeIndex - 1
      });
    } else {
      wx.lin.showToast({
        title: '已经到第一步了哦'
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
