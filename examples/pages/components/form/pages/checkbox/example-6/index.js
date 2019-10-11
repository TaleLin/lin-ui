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
    }],
    position: 'left',
  },
  properties: {},
  methods: {
    change(e) {
      let items = this.data.items;
      items.forEach(item => {
        if(item.name == e.detail.key) {
          item.checked = e.detail.checked;
        }
      });
      this.setData({
        items
      });
    }
  },
});