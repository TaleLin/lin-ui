// pages/nav/pages/tabs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placement: 'left',
    placementArr: ['top', 'left', 'right', 'bottom'],
    dubbleTabs: [{
      tab: '女装',
      key: 'women',
      subKey: 'shose',
      subTab: '鞋'
    },
    {
      tab: '女装',
      key: 'women',
      subKey: 'shirt',
      subTab: 'T恤衫',
    },
    {
      tab: '男装',
      key: 'men',
      subKey: 'men-shose',
      subTab: '衬衫'
    },
    {
      tab: '男装',
      key: 'men',
      subKey: 'men-shirt',
      subTab: '羊毛衫',
    },
    {
      tab: '童装',
      key: 'child',
      subKey: 'child-shose',
      subTab: '鞋'
    },
    {
      tab: '童装',
      key: 'child',
      subKey: 'child-shirt',
      subTab: 'T恤衫',
    },
    {
      tab: '婴幼儿',
      key: 'baby',
    },
    {
      tab: '运动',
      key: 'sport',
    }
    ],
  },

  toggleTabPlacement() {
    const {
      placementArr
    } = this.data;
    wx.showActionSheet({
      itemList: placementArr,
      success: (res) => {
        this.setData({
          placement: placementArr[res.tapIndex]
        });
      },
      fail(res) {
        console.error(res.errMsg);
      }
    });
  },

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
