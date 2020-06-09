// pages/view/pages/status-show/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const id = options.id;
    switch (id) {
    case '1':
      this.setData({
        type: 'success',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '2':
      this.setData({
        type: 'error',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '3':
      this.setData({
        type: 'network',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '4':
      this.setData({
        type: 'cart',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '5':
      this.setData({
        type: 'order',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '6':
      this.setData({
        type: 'address',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '7':
      this.setData({
        buttonText: '重新赠送',
        describe: '恭喜你！注册成功~',
        image: '/dist/status-show/image/success.png',
        bgColor: ''
      });
      break;
    case '8':
      this.setData({
        type: 'cart',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: '#f3f3f3'
      });
      break;
    case '9':
      this.setData({
        type: 'product',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    case '10':
      this.setData({
        type: 'data',
        image: '',
        buttonText: '',
        describe: '',
        bgColor: ''
      });
      break;
    }
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
});