// pages/filter/pages/classnames/index.js
const MAX_LINE_COUNT = 5;
Page({

  /**
   * Page initial data
   */
  data: {
    extend: false,
    isOverHeight: false,
    code: '```html\n<text class=\'{{classnames(\'content\',{unextend:isOverHeight && !extend})}}\'>定风波...</text>\n```'
  },

  extend() {
    this.setData({
      extend: !this.data.extend,
    }, () => {
      this.triggerEvent('extendText', {
        extend: this.data.extend
      });
    });

  },
  queryMultipleNodes() {
    let $this = this;
    const query = wx.createSelectorQuery().in($this);
    query.select('.content').fields({
      computedStyle: ['lineHeight'],
      size: true,
    }, function (res) {
      if (res) {
        const lineHeight = parseInt(res.lineHeight);
        if (lineHeight && res.height) {
          $this.setData({
            isOverHeight: (res.height / lineHeight) > MAX_LINE_COUNT,
          });
        }

      }
    }).exec();
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.queryMultipleNodes();
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
});
