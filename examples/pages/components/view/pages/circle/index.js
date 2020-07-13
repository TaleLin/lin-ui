// pages/components/view/pages/circle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 60,
    openActive: true,
    activeColor: 'green',
    backgroundColor: '#7FFFAA',
    innerColor: '#E1FFFF',
    valueColor: 'black',
    outerDiameter: 220,
    innerDiameter: 170,
    backgroundImage: 'timg1.jpeg',
    duration: 50,
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

  },

  openCloseActive() {
    wx.redirectTo({
      url: '../circle/index',
    });
  },

  add() {
    let percent = this.data.percent;
    if (percent > 100) {
      return;
    } else {
      percent += 5;
      this.setData({
        percent
      });
    }
  },

  min() {
    let percent = this.data.percent;
    if (percent < 0) {
      return;
    } else {
      percent -= 5;
      this.setData({
        percent
      });
    }
  },

  randomColor() {
    return '#' + (Math.random() * 0xffffff << 0).toString(16);
  },

  random() {
    let activeColor = this.randomColor();
    let backgroundColor = this.randomColor();
    let innerColor = this.randomColor();
    let valueColor = this.randomColor();
    this.setData({
      activeColor,
      backgroundColor,
      innerColor,
      valueColor
    });
  },

  addOuter() {
    let outerDiameter = this.data.outerDiameter;
    if (outerDiameter > 700) {
      return;
    } else {
      outerDiameter += 3;
      this.setData({
        outerDiameter
      });
    }
  },

  minOuter() {
    let outerDiameter = this.data.outerDiameter;
    if (outerDiameter < this.data.innerDiameter || outerDiameter < 0) {
      return;
    } else {
      outerDiameter -= 3;
      this.setData({
        outerDiameter
      });
    }
  },

  addInner() {
    let innerDiameter = this.data.innerDiameter;
    if (innerDiameter > 700 || innerDiameter > this.data.outerDiameter) {
      return;
    } else {
      innerDiameter += 3;
      this.setData({
        innerDiameter
      });
    }
  },

  minInner() {
    let innerDiameter = this.data.innerDiameter;
    if (innerDiameter < 0) {
      return;
    } else {
      innerDiameter -= 3;
      this.setData({
        innerDiameter
      });
    }
  },

  change() {
    let items = ['timg1.jpeg', 'timg2.jpeg', 'timg3.jpeg', 'timg4.jpeg'];
    var backgroundImage;
    do {
      backgroundImage = items[Math.floor(Math.random() * items.length)];
    }
    while (backgroundImage === this.data.backgroundImage);

    this.setData({
      backgroundImage
    });
  }
});
