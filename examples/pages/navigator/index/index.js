//index.js
import naviConfigs from './navi.js'
Page({
  data: {
    naviConfigs: naviConfigs,
  },
  
  onLoad: function () {
    
  },

  onShareAppMessage(){

  },

  onCard(e){
    const path = e.target.dataset.path
    wx.navigateTo({
      url: path
    })
  }
})
