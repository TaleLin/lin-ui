//index.js
import naviConfigs from './navi.js'
Page({
  data: {
    naviConfigs: naviConfigs,
  },
  
  onLoad: function () {
    
  },
  errorTap(e){
    const idx = e.currentTarget.dataset.idx
    if(idx == 1) {
      wx.showToast({
        title: '暂未开放~',
        icon: 'none',
      })
    }
  }
})
