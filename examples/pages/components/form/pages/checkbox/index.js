// pages/view/pages/dialog/index.js
import navConfig from './checkbox-nav.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: [
      '青花瓷'
    ],
    items1: [{
      id: 1,
      name: '青花瓷',
      checked: true
    }, {
      id: 2,
      name: '双截棍'
    }, {
      id: 3,
      name: '一千年以后'
    }, {
      id: 4,
      name: '江南',
    }],
    items2: [{
      id: 1,
      name: '功夫'
    }, {
      id: 2,
      name: '喜剧之王'
    }, {
      id: 3,
      name: '少林足球'
    }],
    items3: [{
      id: 1,
      name: '春天',
      checked: true
    }, {
      id: 2,
      name: '夏天'
    }, {
      id: 3,
      name: '秋天'
    }, {
      id: 4,
      name: '冬天'
    }],

    items4: [{
      id: 1,
      name: '单刀赴会',
    }, {
      id: 2,
      name: '大意失荆州'
    }, {
      id: 3,
      name: '水淹七军',
      disabled: true
    }],
    items5: [{
      id: 1,
      name: '日温差大',
    }, {
      id: 2,
      name: '年降雨量小'
    }, {
      id: 3,
      name: '年温差小',
    }, {
      id: 3,
      name: '植物根长也小',
    }],
    items6: [{
      id: 1,
      name: '潘森',
    }, {
      id: 2,
      name: '提莫'
    }, {
      id: 3,
      name: '孙悟空',
    }],
    items7: [{
      id: 1,
      name: '在任何情况下都可以开启，不会被敌方打断。',
    }, {
      id: 2,
      name: '在开启过程中，无法对敌方进行攻击，但是可以移动。'
    }, {
      id: 3,
      name: '开启后，只能免疫技能攻击，无法免疫普通攻击。',
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