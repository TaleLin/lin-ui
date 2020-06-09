// pages/view/pages/dialog/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [{
      id: 1,
      name: '青花瓷',
      checked: true
    }, {
      id: 2,
      name: '双截棍',
      checked: false
    }, {
      id: 3,
      name: '一千年以后',
      checked: false
    }, {
      id: 4,
      name: '江南',
      checked: true
    }],
    items2: [{
      id: 1,
      name: '功夫',
      checked: false
    }, {
      id: 2,
      name: '喜剧之王',
      checked: false
    }, {
      id: 3,
      name: '少林足球',
      checked: false
    }],
    items3: [{
      id: 1,
      name: '春天',
      checked: false
    }, {
      id: 2,
      name: '夏天',
      checked: false
    }, {
      id: 3,
      name: '秋天',
      checked: false
    }, {
      id: 4,
      name: '冬天',
      checked: false
    }],
    items4: [{
      id: 1,
      name: '单刀赴会',
      checked: true
    }, {
      id: 2,
      name: '大意失荆州',
      checked: false
    }, {
      id: 3,
      name: '水淹七军',
      checked: false
    }],
    items5: [{
      id: 1,
      name: '日温差大',
      checked: true
    }, {
      id: 2,
      name: '年降雨量小',
      checked: false
    }, {
      id: 3,
      name: '年温差小',
      checked: false
    }, {
      id: 4,
      name: '植物根长小',
      checked: false
    }],
    items6: [{
      id: 1,
      name: '潘森',
      checked: true
    }, {
      id: 2,
      name: '提莫',
      checked: false
    }, {
      id: 3,
      name: '孙悟空',
      checked: false
    }],
    items7: [{
      id: 1,
      name: '在任何情况下都可以开启，不会被敌方打断',
      checked: true
    }, {
      id: 2,
      name: '在开启过程中，无法对敌方进行攻击，但是可以移动',
      checked: false,
      disabled: true
    }, {
      id: 3,
      name: '开启后只能免疫技能攻击，无法免疫普通攻击',
      checked: false
    }],
    items8: [{
      id: 1,
      name: 'JavaScript',
      checked: false
    }, {
      id: 2,
      name: 'CSS',
      checked: true
    }, {
      id: 3,
      name: 'NodeJS',
      checked: false
    }, {
      id: 4,
      name: 'Webpack',
      checked: false
    }],
    items9: [{
      id: 1,
      name: '篮球',
      checked: true
    }, {
      id: 2,
      name: '排球',
      checked: false
    }, {
      id: 3,
      name: '足球',
      checked: false
    }],
    items10: [{
      id: 1,
      name: '成龙',
      checked: true
    }, {
      id: 2,
      name: '甄子丹',
      checked: false
    }, {
      id: 3,
      name: '周润发',
      checked: false
    }, {
      id: 4,
      name: '周星驰',
      checked: false
    }],
    items11: [{
      id: 1,
      name: '成龙',
      checked: false
    }, {
      id: 2,
      name: '甄子丹',
      checked: false
    }, {
      id: 3,
      name: '周润发',
      checked: false
    }, {
      id: 4,
      name: '周星驰',
      checked: false
    }],
    position: 'left'
  },

  change(e) {
    let index = e.currentTarget.dataset['index'];
    let items = this.data[`items${index}`];
    items.forEach(item => {
      if(item.name === e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      [`items${index}`]: items
    });
  },

  change2(e) {
    let index = e.currentTarget.dataset['index'];
    let items = this.data[`items${index}`];
    items.forEach(item => {
      if(item.id === e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      [`items${index}`]: items
    });
  },

  tipOverflow(data) {
    let title = data.detail.type === 'overflow_max_selected' ? `最多选择${data.detail.limitNumber}个` : `至少选择${data.detail.limitNumber}个`;
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 2000
    });
  },
});
