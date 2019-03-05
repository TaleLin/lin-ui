// pages/view/pages/dialog/index.js
import navConfig from './radio-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [{
      id: 1,
      name: '冬瓜',
      checked: true
    }, {
      id: 2,
      name: '西瓜'
    }, {
      id: 3,
      name: '黄瓜'
    }, {
      id: 4,
      name: '傻瓜',
    }],
    items2: [{
      id: 1,
      name: 'SB'
    }, {
      id: 2,
      name: '2B'
    }, {
      id: 3,
      name: 'NB'
    }],
    items3: [{
      id: 1,
      name: '阿尔萨斯',
      checked: true
    }, {
      id: 2,
      name: '伊利丹'
    }, {
      id: 3,
      name: '希尔瓦娜斯'
    }],

    items4: [{
      id: 1,
      name: 'SKS',
    }, {
      id: 2,
      name: 'Kar98K'
    }, {
      id: 3,
      name: 'VSS',
      disabled: true
    }],
    items5: [{
      id: 1,
      name: '暴风大保健',
    }, {
      id: 2,
      name: '霜之哀伤'
    }, {
      id: 3,
      name: '火之高兴',
    }],
    items6: [{
      id: 1,
      name: '1号',
    }, {
      id: 2,
      name: '45号'
    }, {
      id: 3,
      name: '13号',
    }],
    items7: [{
      id: 1,
      name: 'MacBook Pro',
    }, {
      id: 2,
      name: '斐尔可'
    }, {
      id: 3,
      name: '女朋友',
      disabled: true
    }],
    position: 'left',
    checked: false,
    disabled: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
})