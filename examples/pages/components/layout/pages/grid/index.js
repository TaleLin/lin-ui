// pages/layout/pages/grid/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    grids1: [{
      image: 'order',
      text: '我的订单'
    }, {
      image: 'cart',
      text: '我的购物车'
    }, {
      image: 'help',
      text: '帮助中心'
    }, {
      image: 'address',
      text: '地址管理'
    }, {
      image: 'order',
      text: '我的订单'
    }, {
      image: 'customer-service',
      text: '联系客服'
    }, {
      image: 'setting',
      text: '设置'
    }, {
      image: 'favor',
      text: '我的收藏'
    }, {
      image: 'eye',
      text: '我的足迹'
    }, {
      image: 'scan',
      text: '扫一扫'
    }, ],
    grids2: [{
      image: 'cart',
      text: '我的购物车'
    }, {
      image: 'help',
      text: '帮助中心'
    }, {
      image: 'address',
      text: '地址管理'
    }, {
      image: 'order',
      text: '我的订单'
    }, {
      image: 'customer-service',
      text: '联系客服'
    }, ]
  },

  clickGrid(e) {
    wx.showToast({
      title: e.detail.cell.text,
      icon: 'none'
    });
  },

  clickGrids(e) {
    wx.showToast({
      title: `点击的Grid的索引是${e.detail.index}`,
      icon: 'none'
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
});
