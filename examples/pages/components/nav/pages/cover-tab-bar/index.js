Page({
  data: {
    jdSelectedIndex: 0,
    jdTabBar: [{
      text: '首页',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/home.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/home-selected.jpg'
    }, {
      text: '分类',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/category.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/category-selected.jpg'
    }, {
      text: '发现',
      showRedDot: true,
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/discover.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/discover-selected.jpg'
    }, {
      text: '购物车',
      showRedDot: true,
      redDotValue: '12',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/cart.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/cart-selected.jpg'
    }, {
      text: '我的',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/user.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/jd-tab-bar/user-selected.jpg'
    }],
    taobaoSelectedIndex: 0,
    taobaoTabBar: [{
      text: '首页',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/home.png',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/home-selected.png'
    }, {
      text: '微淘',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/weitao.png',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/weitao-selected.png'
    }, {
      text: '消息',
      showRedDot: true,
      redDotValue: '9',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/message.png',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/message-selected.png'
    }, {
      text: '购物车',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/cart.png',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/cart-selected.png'
    }, {
      text: '我的淘宝',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/my.png',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/taobao-tab-bar/my-selected.png'
    }],
    weixinSelectedIndex: 0,
    weixinTabBar: [{
      text: '微信',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/weixin.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/weixin-selected.jpg'
    }, {
      text: '通讯录',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/contact.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/contact-selected.jpg'
    }, {
      text: '发现',
      showRedDot: true,
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/discover.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/discover-selected.jpg'
    }, {
      text: '我的',
      iconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/my.jpg',
      selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/my-selected.jpg'
    }],
  },

  /**
   * 正常使用 CoverTabBar 无需此步骤，此处仅为演示使用
   */
  onTapJdTabBar(event) {
    this.setData({
      jdSelectedIndex: event.detail.index
    });
  },

  onTapJdTips() {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: 'CoverTabBar 与 TabBar 的最大区别是 CoverTabBar 可以覆盖在原生组件之上。'
    });
  },

  onTapTaobaoTabBar(event) {
    this.setData({
      taobaoSelectedIndex: event.detail.index
    });
  },

  onTapTaobaoTips(){
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '在安卓平台上修改 cover-view 大小会有闪烁的问题，IOS 平台无此问题。'
    });
  },

  onTapWeixinTabBar(event) {
    this.setData({
      weixinSelectedIndex: event.detail.index
    });
  },

  onTapWeixinTips() {
    let that = this;
    wx.showActionSheet({
      itemList: ['动态渲染'],
      success() {
        let newWeixinTabBarList = that.data.weixinTabBar;
        if (newWeixinTabBarList.length === 4) {
          newWeixinTabBarList.splice(2, 1);
        } else {
          newWeixinTabBarList.splice(2, 0, {
            text: '发现',
            showRedDot: true,
            iconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/discover.jpg',
            selectedIconPath: '/pages/components/nav/pages/cover-tab-bar/image/weixin-tab-bar/discover-selected.jpg'
          });
        }

        that.setData({
          weixinTabBar: newWeixinTabBarList
        });
      }
    });
  }
});
