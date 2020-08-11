//index.js
import naviConfigs from './navi.js';
import tabbar from '../../tabbar';
Page({
  data: {
    naviConfigs: naviConfigs,
    list:tabbar
  },

  onLoad: function() {
  },

  onShareAppMessage() {

  },

  onNaviCard(e) {
    let {
      title,
      navigatemark
    } = e.target.dataset;
    wx.navigateTo({
      url: '/pages/navigator/content/index?title=' + title + '&navigatemark=' + navigatemark
    });
  },

  onCard() {
    // const path = e.target.dataset.path
    wx.navigateTo({
      url: '/pages/navigator/content/index?title=电商专题&navigatemark=shopping'
    });
  }
});
