// pages/view/pages/dialog/index.js
import navConfig from './dialog-nav.js';

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
  onLoad: function (options) {

  },

  // 确定按钮
  onConfirmTap(e){
    console.log(e)
    setTimeout(() => {
      wx.showToast({
        title: '点击了确定～',
        icon: 'none'
      })
    }, 100)

  },

  // 取消按钮
  onCancelTap(e) {
    setTimeout(()=> {
      wx.showToast({
        title: '点击了取消～',
        icon: 'none'
      })
    },100)
  },

  // dio 点击事件
  onDialogTap() {
    const type = this.data.type
    if (type === 4) {
      wx.showToast({
        title: '请点击按钮取消！',
        icon: 'none'
      })
    }
  },

  // 显示 dio
  onShowDioTap(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type
    const config = JSON.parse(JSON.stringify(this.data.navConfig[type].config))
    console.log(type)
    this.setData({
      currentConf: config,
      type
    })
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
})