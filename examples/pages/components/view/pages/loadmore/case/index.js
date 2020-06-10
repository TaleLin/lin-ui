import caseData from './data.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseData: caseData.slice(0,7),
    imgShow: false,
    show: false,
    loading: true,
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.loading && this.data.index === 0) {
      this.setData({
        show: true,
        type: 'loading'
      });
      setTimeout(() => {
        this.setData({
          show: false,
          caseData:caseData,
          index: 1
        });
      }, 800);
    }
    if (this.data.loading && this.data.index === 1) {
      this.setData({
        show: true,
        type: 'loading'
      });
      setTimeout(() => {
        this.setData({
          show: true,
          type: 'end',
          loading: false
        });
      }, 800);
    }
  }
});
