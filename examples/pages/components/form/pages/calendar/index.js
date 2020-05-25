
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    defaultDate: 1589524969397,
    show: false
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changeType() {
    this.setData({
      show: true
    })
  }

})