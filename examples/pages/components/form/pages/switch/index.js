// pages/components/form/pages/switch/index.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
    customValue: 0
  },

  onChange(e) {
    this.setData({
      customValue: e.detail.checked
    });
  }
});