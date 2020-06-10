// pages/components/layout/pages/sticky/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTapBase(){
    wx.navigateTo({
      url:'/pages/components/layout/pages/sticky/pages/sticky-base/index'
    });
  },

  onTapAppoint(){
    wx.navigateTo({
      url:'/pages/components/layout/pages/sticky/pages/sticky-appoint/index'
    });
  },

  onTapDynamic(){
    wx.navigateTo({
      url:'/pages/components/layout/pages/sticky/pages/sticky-dynamic/index'
    });
  }

});
