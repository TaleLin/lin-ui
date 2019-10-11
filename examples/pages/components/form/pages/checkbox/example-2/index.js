Component({
  data: {
    items: [{
      id: 1,
      name: '青花瓷',
      checked: false,
      disabled: false
    }, {
      id: 2,
      name: '双截棍',
      checked: false,
      disabled: false
    }, {
      id: 3,
      name: '一千年以后',
      checked: false,
      disabled: true
    }, {
      id: 4,
      name: '江南',
      checked: false,
      disabled: false
    }],
    position: 'left',
  },
  properties: {},
  methods: {
    change(e) {
      let items = this.data.items;
      items.forEach(item => {
        if(item.id == e.detail.key) {
          item.checked = e.detail.checked;
        }
      });
      this.setData({
        items
      });
    }
  },
});