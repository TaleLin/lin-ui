Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Star 数量
    starCount: null
  },

  onLoad() {
    this.getStarCount();
  },

  onShareAppMessage: function () {

  },

  /**
   * 获取 Star 数量，有些网络无法访问，暂时不用
   */
  getStarCount() {
    const that = this;
    wx.request({
      url: 'https://api.github.com/repos/TaleLin/lin-ui',
      success(res) {
        let starCount = res.data.stargazers_count;
        starCount = (starCount / 1000).toFixed(1);
        that.setData({starCount});
      }
    });
  },

  /**
   * 监听：长按左侧按钮
   */
  onLongPressLeft() {
    wx.vibrateShort();
    wx.showModal({
      title: '提示',
      content: '长按左侧按钮事件被触发'
    });
  },

  /**
   * 监听：长按右侧按钮
   */
  onLongPressRight() {
    wx.vibrateShort();
    wx.showModal({
      title: '提示',
      content: '长按右侧按钮事件被触发'
    });
  },

  /**
   * 监听：点击 Star 卡片
   */
  onTapStarCard() {
    wx.vibrateShort();
    wx.setClipboardData({
      data: 'https://github.com/TaleLin/lin-ui'
    });
  },

  /**
   * 监听：点击公众号卡片
   */
  onTapPublicCard() {
    wx.vibrateShort();
    wx.setClipboardData({
      data: '林间有风'
    });
  }
});
