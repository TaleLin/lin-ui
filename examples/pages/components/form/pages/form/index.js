// pages/components/form/pages/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [{
      id: 1,
      name: '青花瓷',
      checked: true
    }, {
      id: 2,
      name: '双截棍',
      checked: false
    }, {
      id: 3,
      name: '一千年以后',
      checked: false
    }, {
      id: 4,
      name: '江南',
      checked: true
    }]

  },

  change(e) {
    let items = this.data.items1;
    items.forEach(item => {
      if(item.id == e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      items1: items
    });
  },

  submit(){
    // let params = {}
    wx.lin.getValues(this);
    // this.list = this.selectComponent("#love");
    // params.love = this.list.getValues();
    // console.log(this.list.getValues());
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
})
