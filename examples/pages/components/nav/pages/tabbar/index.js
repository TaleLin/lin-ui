// pages/nav/pages/tabs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config: {
      show: true,
      selected: 0,
      color: '#707070',
      selectedColor: '#3963BC',
      borderStyle: '#f6f6f6',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/home.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/home_fill1.png',
          text: '首页'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/cart.png',
          badge:'20',
          selectedIconPath: '/pages/components/nav/images/tab-icon/cart_fill.png',
          text: '购物车'
        },
        {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/my.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/my_fill1.png',
          text: '我的'
        },
      ]
    },

    config2: {
      show: true,
      selected: 0,
      color: '#707070',
      selectedColor: '#3963BC',
      borderStyle: '#f6f6f6',
      backgroundColor: '#fff',
      fontSize: 22,
      list: [
        {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/home.png',
          iconSize: 50,
          selectedIconPath: '/pages/components/nav/images/tab-icon/home_fill1.png',
          text: '首页'
        }, {
          pagePath: '/index2/index',
          iconSize: 50,

          iconPath: '/pages/components/nav/images/tab-icon/cart.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/cart_fill.png',
          text: '购物车'
        }, {
          iconSize: 50,
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/discover.png',
          redDot: true,
          selectedIconPath: '/pages/components/nav/images/tab-icon/discover_fill.png',
          text: '发现'
        }, {
          iconSize: 50,
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/my.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/my_fill1.png',
          text: '我的'
        },
      ]
    },
    config3: {
      show: true,
      selected: 0,
      color: '#707070',
      selectedColor: '#ef6c13',
      borderStyle: '#f6f6f6',
      backgroundColor: '#fff',
      fontSize: 22,
      list: [
        {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/favor.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/favor_fill.png',
          text: '发现'
        }, {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/discover.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/discover_fill2.png',
          text: '我的音乐'
        }, {
          pagePath: '/index2/index',
          iconSize: 80,
          iconPath: '/pages/components/nav/images/tab-icon/video.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/video_fill.png',
          // text: ""
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/mark.png',
          badge: 99,
          selectedIconPath: '/pages/components/nav/images/tab-icon/mark_fill1.png',
          text: '音乐圈'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/my.png',
          redDot: false,
          selectedIconPath: '/pages/components/nav/images/tab-icon/my_fill2.png',
          text: '个人中心'
        },
      ]
    },
    config4: {
      show: true,
      selected: 0,
      color: '#707070',
      selectedColor: '#f4ea2a',
      borderStyle: '#f6f6f6',
      backgroundColor: '#fff',
      fontSize: 22,
      list: [
        {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/home.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/home_fill.png',
          text: '首页'
        }, {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/baby.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/baby_fill.png',
          text: '鱼塘'
        }, {
          pagePath: '/index2/index',
          iconSize: 100,
          style: 'circle',
          iconPath: '/pages/components/nav/images/tab-icon/add.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/add.png',
          text: '发布'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/mark.png',
          badge: 99,
          selectedIconPath: '/pages/components/nav/images/tab-icon/mark_fill.png',
          text: '消息'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/my.png',
          redDot: true,
          selectedIconPath: '/pages/components/nav/images/tab-icon/my_fill.png',
          text: '我的'
        },
      ]
    },

    config5: {
      show: true,
      selected: 0,
      color: '#fff',
      selectedColor: '#f8ee28',
      borderStyle: '#f6f6f6',
      backgroundImg:'https://wx4.sinaimg.cn/mw690/005QbH5Kly1fzr6hrfi6cj30ks02qq2w.jpg',
      fontSize: 22,
      list: [
        {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/tao.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/tao1.png',
          text: '首页'
        }, {
          pagePath: '/index/index',
          iconPath: '/pages/components/nav/images/tab-icon/we.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/we_fill.png',
          text: '微淘'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/mark1.png',
          selectedIconPath: '/pages/components/nav/images/tab-icon/mark_fill.png',
          text: '消息'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/cart1.png',
          badge: 99,
          selectedIconPath: '/pages/components/nav/images/tab-icon/cart_fill2.png',
          text: '购物车'
        }, {
          pagePath: '/index2/index',
          iconPath: '/pages/components/nav/images/tab-icon/people.png',
          redDot: true,
          selectedIconPath: '/pages/components/nav/images/tab-icon/people_fill1.png',
          text: '我的淘宝'
        },
      ]
    },
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

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
});
