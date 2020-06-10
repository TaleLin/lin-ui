// pages/filter/pages/is/index.js
import {
  arrayAPI, stringAPI, isAPI
} from './api.js';
Page({

  /**
   * Page initial data
   */
  data: {
    detail: arrayAPI,
    type: '',
    apiType:{
      string: stringAPI,
      array: arrayAPI,
      is: isAPI,
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    const {type} = options;
    const { apiType } = this.data;
    this.setData({
      type: type,
      detail: apiType[type]
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
});