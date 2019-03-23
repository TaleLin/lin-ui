// pages/form/pages/image-picker/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      '/images/static/tx4.jpg',
      '/images/static/tx2.jpg',
      '/images/static/tx3.jpg',
      '/images/static/tx1.jpg',

    ],
    arr1: [
      '/images/static/tx4.jpg',
    ],
    arr2: [
      '/images/static/tx2.jpg',
      '/images/static/tx3.jpg',
      '/images/static/tx1.jpg',
      '/images/static/tx4.jpg',
    ],
    arr3: [
      '/images/static/tx2.jpg',
      '/images/static/tx4.jpg',
    ],
    arr4: [
      '/images/static/tx1.jpg',
      '/images/static/tx3.jpg',
    ],
    arr5: [
      '/images/static/tx2.jpg',
      '/images/static/tx4.jpg',
    ],
    arr6: [
      '/images/static/tx1.jpg',
      '/images/static/tx3.jpg',
      '/images/static/tx4.jpg',
    ],

  },
  clear() {
    this.setData({
      clear: true
    })
  },
  onClearTap(e) {
    console.log(e)
    if(e.detail) {
      wx.lin.showToast({
        title: `清除图片成功`,
        icon: 'success',
        duration: 2000,
        iconStyle: 'color:#7ec699; size: 60'
      })
    }
  },
  onChangeTap(e) {
    console.log(e)
    const count = e.detail.current.length
    wx.lin.showToast({
      title: `添加${count}张图片~`,
      icon: 'picture',
      duration: 2000,
      iconStyle: 'color:#7ec699; size: 60'
    })
  },
  onRemoveTap(e) {
    console.log(e)
    const index = e.detail.index
    wx.lin.showMessage({
      type: 'error',
      content: `删除下标为${index}图片~`,
      duration: 1500,
      icon: 'warning'
    })
  },
  onPreviewTap(e) {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
})