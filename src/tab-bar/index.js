import eventUtil from '../core/utils/event-util';
Component({
  properties: {
    // 背景色
    bgColor: {
      type: String,
      value: null
    },
    // 背景图
    bgImg: {
      type: String,
      value: null
    },
    // 当前选中索引
    selectedIndex: {
      type: Number,
      value: 0
    },
    // tab 项
    list: {
      type: Array,
      value: []
    },
    // 文字选中颜色
    textSelectedColor: {
      type: String,
      value: '#3963bc'
    },
    // 文字未选中颜色
    textColor: {
      type: String,
      value: '#666'
    }
  },

  data: {
    // 当前选中项索引
    selectedIndex: 0
  },

  pageLifetimes: {
    show: function () {
      // 切换 tab 选中项
      this.parseCurrentPage();
    }
  },

  methods: {

    /**
     * 根据当前页 path，切换 tab 选中项
     */
    parseCurrentPage() {
      const currentPagePath = '/' + getCurrentPages()[0].route;
      const list = this.data.list;

      let index;
      for (let i = 0; i < list.length; i++) {
        if (list[i].pagePath === currentPagePath) {
          index = i;
          break;
        }
      }

      if (index === undefined) {
        return;
      }

      this.setData({
        selectedIndex: index
      });

      // 触发事件
      const item = this.data.list[index];
      eventUtil.emit(this, 'linchange', { index, item });

    },

    /**
     * 事件：点击 tab 项
     */
    onTapItem(e) {
      const index = e.currentTarget.dataset.index;
      const url = this.data.list[index].pagePath;

      eventUtil.emit(this, 'lintap', { index, item: this.data.list[index] });

      if (!url) {
        return;
      }
      // 切换路由
      wx.switchTab({
        url,
        fail() {
          wx.navigateTo({
            url,
            fail(error) {
              console.warn('路由跳转错误，错误信息为：', error);
            }
          });
        }
      });
    }
  }
});
