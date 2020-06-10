import navConfig from './message-nav.js';

Page({

  data: {
    navConfig: navConfig
  },

  onLoad: function () {

  },

  onMessage(e) {
    const messageType = Number(e.target.dataset.type);
    switch (messageType) {
    case 0:
      wx.lin.showMessage({
        type: 'primary',
        duration: 1500,
        content: '默认提示'
      });
      break;
    case 1:
      this.setData({
        show: true,
        type: 'success',
        duration: 1500,
        content: '成功提示'
      });
      break;
    case 2:
      wx.lin.showMessage({
        type: 'error',
        duration: 1500,
        content: '错误提示'
      });
      break;
    case 3:
      wx.lin.showMessage({
        type: 'warning',
        duration: 1500,
        content: '警告提示'
      });
      break;
    case 5:
      wx.lin.showMessage({
        type: 'primary',
        duration: 4000,
        content: '提示4s后消失'
      });
      break;
    }

  }
});
