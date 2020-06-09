// pages/components/nav/pages/segment/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    placement: 'left',
    placementArr: ['top', 'left', 'right', 'bottom'],
    iconTabs: [{
      tab: '购物车',
      key: 'cart',
      icon: 'cart',
      picPlacement: 'left'

    }, {
      tab: '历史记录',
      key: 'history',
      icon: 'history',
      picPlacement: 'left'
    }, {
      tab: '我的',
      key: 'mine',
      icon: 'user',
      picPlacement: 'left'
    }],
    imagesTabs: [{
      tab: '客厅',
      key: 'dining',
      picPlacement: 'top',
      image: {
        activeImage: '/pages/components/nav/images/tab-icon/dining-active.png',
        defaultImage: '/pages/components/nav/images/tab-icon/dining.png',
      }
    },
    {
      tab: '卧室',
      key: 'badroom',
      picPlacement: 'top',
      image: {
        activeImage: '/pages/components/nav/images/tab-icon/badroom-active.png',
        defaultImage: '/pages/components/nav/images/tab-icon/badroom.png',
      }
    }, {
      tab: '厨房',
      key: 'kichten',
      picPlacement: 'top',
      image: {
        activeImage: '/pages/components/nav/images/tab-icon/kichten-active.png',
        defaultImage: '/pages/components/nav/images/tab-icon/kichten.png',
      }
    },
    {
      tab: '浴室',
      key: 'bathroom',
      picPlacement: 'top',
      image: {
        activeImage: '/pages/components/nav/images/tab-icon/bathroom-active.png',
        defaultImage: '/pages/components/nav/images/tab-icon/bathroom.png',
      }
    }
    ],
    brageCount:5
  },

  toggleTabPlacement() {
    const {
      placementArr
    } = this.data;
    wx.showActionSheet({
      itemList: placementArr,
      success: (res) => {
        this.setData({
          placement: placementArr[res.tapIndex]
        });
      },
      fail(res) {
        console.error(res.errMsg);
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
});
