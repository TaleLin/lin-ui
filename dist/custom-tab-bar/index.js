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
    isSwitchTab: {
      type: Boolean,
      value: true
    },
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    // show: true,
    // isSwitchTab: true
    // selected: 0,
    // color: '#707070',
    // selectedColor: "#3963BC",
    // borderStyle: "#f6f6f6",
    // fontSize: '24',
    // backgroundColor: "#fff",
    // list: [
    //   {
    //     pagePath: "/index/index",
    //     iconPath: "/image/home.png",
    //     selectedIconPath: "/image/home_fill.png",
    //     text: "首页"
    //   }, {
    //     pagePath: "/index2/index",
    //     iconPath: "/image/add.png",
    //     style: "circle",
    //     iconSize: 100,
    //     selectedIconPath: "/image/add.png",
    //     text: "发布"
    //   }, {
    //     reddot: true,
    //     pagePath: "/index3/index",
    //     iconPath: "/image/my.png",
    //     selectedIconPath: "/image/my_fill.png",
    //     text: "我的"
    //   }
    // ]
  },
  attached() {
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if(this.data.isSwitchTab) {
        wx.switchTab({
          url
        })
      } else {
        wx.navigateTo({
          url
        })
      }

      this.showItem(data.index)
    },
    show() {
      this.setData({
        show: true
      })
    },
    hide() {
      this.setData({
        show: false
      })
    },
    showItem(idx) {
      this.setData({
        selected: idx
      })
      let detail = idx;
      let option = {};
      this.triggerEvent('lintap', detail, option);
    },
    showRedDot(idx) {
      const redDot = `list[${idx}].redDot`
      this.setData({
        [redDot]: true
      })
    },
    hideRedDot(idx) {
      const redDot = `list[${idx}].redDot`
      this.setData({
        [redDot]: false
      })
    },
    setTabBarBadge(idx, text) {
      const badge = `list[${idx}].badge`
      this.setData({
        [badge]: text
      })
    },
    removeTabBarBadge(idx) {
      const badge = `list[${idx}].badge`
      this.setData({
        [badge]: ''
      })
    }
  }
})