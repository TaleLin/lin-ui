// pages/form/pages/image-picker/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx2.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx3.jpg?sign=32821196ccfd12115af3d64dc7d67132&t=1553372724',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx1.jpg?sign=ed14431dbf86a4d143841e695deaa9b2&t=1553372672',

    ],
    arr1: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
    ],
    arr2: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx2.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx3.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx1.jpg?sign=32821196ccfd12115af3d64dc7d67132&t=1553372724',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=ed14431dbf86a4d143841e695deaa9b2&t=1553372672',
    ],
    arr3: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx2.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
    ],
    arr4: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx1.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx3.jpg?sign=32821196ccfd12115af3d64dc7d67132&t=1553372724',
    ],
    arr5: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx2.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
    ],
    arr6: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx1.jpg?sign=6e1e8eec2c2fc497e3b2ac03b367e770&t=1553372700',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx3.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/tx4.jpg?sign=9817258738b68c534b35fbfc04bde928&t=1553372736',
    ],

  },
  clear() {
    this.setData({
      clear: true
    });
  },
  onClearTap(e) {
    if(e.detail) {
      wx.lin.showToast({
        title: '清除图片成功',
        icon: 'success',
        duration: 2000,
        iconStyle: 'color:#7ec699; size: 60'
      });
    }
  },
  onChangeTap(e) {
    const count = e.detail.current.length;
    wx.lin.showToast({
      title: `添加${count}张图片~`,
      icon: 'picture',
      duration: 2000,
      iconStyle: 'color:#7ec699; size: 60'
    });
  },
  onRemoveTap(e) {
    const index = e.detail.index;
    wx.lin.showMessage({
      type: 'error',
      content: `删除下标为${index}图片~`,
      duration: 1500,
      icon: 'warning'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

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
