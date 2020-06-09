import loadingNaviConfigs from './loading-nav.js';

Page({

  data: {
    loadingNaviConfigs: loadingNaviConfigs
  },

  onLoad: function() {

  },
  // 显示loading
  onShowTap() {
    const type = 1;
    this.showLoading(type);
    setTimeout(()=> {
      this.hideLoading(type);
    }, 2000);
  },

  onShowDefTap() {
    const type = 2;
    this.showLoading(type);
    setTimeout(() => {
      this.hideLoading(type);
    }, 2000);
  },

  // show loading
  showLoading(type) {
    if(type === 1) {
      this.setData({
        show: true
      });
    } else {
      this.setData({
        showDef:true
      });
    }

  },

  // hide loading
  hideLoading(type) {
    if(type ===1) {
      this.setData({
        show: false
      });
    } else {
      this.setData({
        showDef: false
      });
    }
  }
});
