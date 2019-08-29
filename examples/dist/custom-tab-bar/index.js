Component({
  properties: {
    position: {
      type: String,
      value: 'bottom'
    },
    show: {
      type: Boolean,
      value: true
    },
    selected: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: '#707070'
    },
    selectedColor: {
      type: String,
      value: '3963BC'
    },
    borderStyle: {
      type: String,
      value: '#f6f6f6'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    backgroundImg: {
      type: String,
      value: ''
    },
    fontSize: {
      type: Number,
      value: 24
    },
    isRedirectToTab: {
      type: Boolean,
      value: true
    },
    // 是否跳转
    isNav: {
      type: Boolean,
      value: true
    },
    list: {
      type: Array,
      value: []
    }
  },
  data: {},
  attached() {},

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      if (this.data.isNav) {
        if (this.data.isRedirectToTab) {
          wx.switchTab({
            url
          });
        } else {
          wx.switchTab({
            url
          });
        }
      }


      this.showItem(data.index);
    },
    show() {
      this.setData({
        show: true
      });
    },
    hide() {
      this.setData({
        show: false
      });
    },
    showItem(idx) {
      this.setData({
        selected: idx
      });
      let detail = {
        idx,
        path:this.route
      };
      let option = { bubbles: true, composed: true };
      this.triggerEvent('lintap', detail, option);
    },
    showRedDot(idx) {
      const redDot = `list[${idx}].redDot`;
      this.setData({
        [redDot]: true
      });
    },
    hideRedDot(idx) {
      const redDot = `list[${idx}].redDot`;
      this.setData({
        [redDot]: false
      });
    },
    setTabBarBadge(idx, text) {
      const badge = `list[${idx}].badge`;
      this.setData({
        [badge]: text
      });
    },
    removeTabBarBadge(idx) {
      const badge = `list[${idx}].badge`;
      this.setData({
        [badge]: ''
      });
    }
  }
});