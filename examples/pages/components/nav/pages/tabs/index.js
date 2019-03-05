// pages/nav/pages/tabs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placement: 'left',
    placementArr: ['top', 'left', 'right', 'bottom'],
    scrollAbleTabs: [],
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
          style: 'width:44rpx;height:44rpx;'
        }
      }
    ]
  },

  changeTabs(e) {
    console.log(e)
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
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  _asyncData() {
    this.setData({
      scrollAbleTabs: [{
        tab: '精选',
        key: 'treasure'
      }, {
        tab: '居家生活',
        key: 'life'
      }, {
        tab: '美食厨房',
        key: 'food'
      }, {
        tab: '服饰珠宝',
        key: 'cloth'
      }, {
        tab: '美妆洗护',
        key: 'cosmetics'
      }],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    setTimeout(this._asyncData, 5000)
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