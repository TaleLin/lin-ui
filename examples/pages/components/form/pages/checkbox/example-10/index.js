Component({
  data: {
    items: [{
      id: 1,
      name: '青花瓷',
      checked: false
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
    position: 'left',
    disabled: false
  },
  properties: {},
  methods: {
    change(e) {
      let items = this.data.items;
      items.forEach(item => {
        if(item.name === e.detail.key) {
          item.checked = e.detail.checked;
        }
      });
      this.setData({
        items
      });
    },
    tipOverflow(data) {
      let title = data.detail.type === 'overflow_max' ? `最多选择${data.detail.number}个` : `至少选择${data.detail.number}个`;
      wx.showToast({
        title: title,
        icon: 'none',
        duration: 2000
      });
    }
    // tipMax(data) {
    //   wx.showToast({
    //     title: `最多选择${data.detail.number}个`,
    //     icon: 'none',
    //     duration: 2000
    //   });
    // }
  },
});