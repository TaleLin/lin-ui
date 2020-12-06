Page({
  data: {
    jdSelectedIndex: 0,
    jdTabBar: [{
      text: '首页',
      iconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/home.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/home-selected.jpg'
    }, {
      text: '分类',
      iconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/category.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/category-selected.jpg'
    }, {
      text: '发现',
      redDot:true,
      iconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/discover.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/discover-selected.jpg'
    }, {
      text: '购物车',
      redDot: '12',
      iconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/cart.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/cart-selected.jpg'
    }, {
      text: '我的',
      iconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/user.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/jd-tab-bar/user-selected.jpg'
    }],
    taobaoSelectedIndex: 0,
    taobaoTabBar: [{
      text: '首页',
      iconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/home.png',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/home-selected.png'
    }, {
      text: '微淘',
      iconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/weitao.png',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/weitao-selected.png'
    }, {
      text: '消息',
      redDot: '9',
      iconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/message.png',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/message-selected.png'
    }, {
      text: '购物车',
      iconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/cart.png',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/cart-selected.png'
    }, {
      text: '我的淘宝',
      iconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/my.png',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/taobao-tab-bar/my-selected.png'
    }],
    weixinSelectedIndex: 0,
    weixinTabBar: [{
      text: '微信',
      iconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/weixin.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/weixin-selected.jpg'
    }, {
      text: '通讯录',
      iconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/contact.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/contact-selected.jpg'
    }, {
      text: '发现',
      redDot:true,
      iconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/discover.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/discover-selected.jpg'
    }, {
      text: '我的',
      iconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/my.jpg',
      selectedIconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/my-selected.jpg'
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

  onTapTaobaoTabBar(event) {
    this.setData({
      taobaoSelectedIndex: event.detail.index
    });
  },

  onTapTaobaoTips(){
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '通过 bg-img 属性设置背景图片'
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
            redDot:true,
            iconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/discover.jpg',
            selectedIconPath: '/pages/components/nav/pages/tab-bar/image/weixin-tab-bar/discover-selected.jpg'
          });
        }

        that.setData({
          weixinTabBar: newWeixinTabBarList
        });
      }
    });
  }
});
