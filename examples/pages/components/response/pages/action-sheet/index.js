// pages/response/pages/action-sheet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    shareList: [
      {
        name: '转发给好友',
        icon: 'share',
        iconSize: '26',
        color:'#F4516C'
      },
      {
        name: '保存海报分享',
        image: '/images/response/picture.png',

        imageStyle: 'width:40rpx;height:40rpx;',
        color: '#3683D6'
      },
    ],

    itemList: [{
      name: '今日不再出现此类内容',
    },
    {
      name: '屏蔽',
    }
    ],
    reanson: [{
      id: 1,
      name: '无聊灌水'
    },
    {
      id: 2,
      name: '广告刷屏'
    },
    {
      id: 3,
      name: '侵权抄袭'
    },
    {
      id: 4,
      name: '违法违规'
    },
    {
      id: 5,
      name: '低俗色情'
    },
    {
      id: 6,
      name: '恶意辱骂'
    },
    {
      id: 7,
      name: '其他'
    }
    ],
    titleItemList:[
      { name: '保存到本地', color: '#3683D6' },
      { name: '确认删除', color: '#F4516C'}
    ],
    openTypeItemList:[
      { name: '转发给好友',openType:'share'},
      { name: '获取手机号', openType:'getPhoneNumber' }
    ]
  },
  _showActionSheet({ itemList, showCancel = false, title = '', locked=false}) {
    wx.lin.showActionSheet({
      itemList: itemList,
      showCancel: showCancel,
      title: title,
      locked,
      success: (res) => {
        wx.showToast({
          title: res.item.name,
          icon: 'none'
        });
      },
      fail: (res) => {
        console.error(res);
      }
    });
  },
  showOpenTypeActionSheet(){
    this._showActionSheet({ itemList: this.data.openTypeItemList, showCancel: true });
  },
  showTitleActionSheet(){
    this._showActionSheet({ itemList: this.data.titleItemList, showCancel: true, title:'删除后无法恢复 可先保存到本地'});
  },
  showImagesActionSheet(){
    this._showActionSheet({ itemList: this.data.shareList, showCancel: true });
  },

  showActionSheet() {
    this._showActionSheet({ itemList: this.data.reanson,showCancel:true});
  },

  showBaseActionSheet(){
    this._showActionSheet({ itemList: this.data.itemList });
  },

  setLockedActionSheet(){
    this._showActionSheet({ itemList: this.data.itemList,locked:true });
  },

  togggleActionSheet(){
    this.setData({
      show:true
    });
  },

  lincancel(){
    wx.showToast({
      title: '取消',
      icon: 'none'
    });
  },

  lintapItem(e){
    wx.showToast({
      title: e.detail.item.name,
      icon: 'none'
    });
  },

});
