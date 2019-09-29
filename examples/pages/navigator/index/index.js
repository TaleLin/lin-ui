//index.js
import naviConfigs from './navi.js';
import { promisic } from '../../../dist/utils/util.js'
Page({
  data: {
    naviConfigs: naviConfigs
  },

  onLoad: function() {
    console.log(promisic)
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