// pages/navigator/filter/index.js
const re = 'see (chapter \d+(\.\d)*)'
Page({

  /**
   * Page initial data
   */
  data: {
    str: '      For more information, see Chapter 3.4.5.1',
    arr: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    params: { red: true, bg: true },
    scrollable:true,
    placement:'left',
    aminmated:false,
    foo:'foo-bar'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

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
})