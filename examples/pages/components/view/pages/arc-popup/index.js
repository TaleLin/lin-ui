// pages/components/view/pages/arc-popup/index.js
import {
  navConfig,
  avartarList,
  demo0List,
  advancedDemo
} from './popup-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    avartarList: avartarList,
    demo0List: demo0List,
    advancedDemo: advancedDemo,
    currentConfig: {
      show: false,
      transition: true,
      zIndex: 99,
      locked: false,
      direction: 'bottom',
      arcRadius: 18,
      maxHeight: 600,
      minHeight: 200,
      opacity: 0.4
    },
    panelClass: 'l-panel-class'
  },

  // 显示Popup
  onShowPopupTap(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      panelClass: `l-panel-class-demo${type}`
    });
    const config = this.data.navConfig[type].config;
    config.show = true;
    this.setData({
      currentConfig: config,
      type
    });
  },

  // 隐藏Popup
  onHidePopupTap() {
    const type = this.data.type;
    this.data.currentConfig.show = false;
    this.setData({
      currentConfig: this.data.currentConfig
    });

    if (type === 3) {
      wx.showToast({
        title: '已取消~',
        icon: 'none'
      });
    }
  },

  // tag事件
  ontaglintap(event) {
    const index = event.currentTarget.dataset.index;
    const type = event.currentTarget.dataset.type;
    let advancedDemo = this.data.advancedDemo;
    advancedDemo[type][index].active = !advancedDemo[type][index].active;
    this.setData({
      advancedDemo
    });
  },

  // 阻止冒泡
  doNothing() {},
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
