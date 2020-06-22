import eventUtil from '../core/utils/event-util';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    columnGap: {
      type: String,
      value: '20rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    data: [],
    leftData: [],
    rightData: []
  },

  attached() {
    this._init();
  },

  pageLifetimes: {
    show() {
      this._init();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _init() {
      wx.lin = wx.lin || {};
      wx.lin.renderWaterFlow = (data = [], refresh = false, success) => {
        if (Object.prototype.toString.call(data) !== '[object Array]') {
          console.error('[data]参数类型错误，渲染失败');
          return false;
        }
        // 绑定data，判断data是否为[]
        this.setData({ data });
        if (refresh) {
          this.data.leftData = [];
          this.data.rightData = [];
        }
        this._select(data, refresh).then(() => {
          success && success();
        }).catch(err => {
          console.error(err);
        });
      };
    },
    _select(data, refresh) {
      const query = wx.createSelectorQuery().in(this);
      this.columnNodes = query.selectAll('#left, #right');
      return new Promise((resolve) => {
        this._render(data, 0, refresh, () => {
          resolve();
        });
      });
    },
    _render(data, i, refresh, success) {
      if ((data.length > i || refresh) && this.data.data.length !== 0) {
        this.columnNodes.boundingClientRect().exec(res => {
          const rects = res[0];
          this.data.leftHeight = rects[0].height;
          this.data.rightHeight = rects[1].height;
          if (this.data.leftHeight <= this.data.rightHeight || refresh) {
            this.data.leftData.push(data[i]);
          } else {
            this.data.rightData.push(data[i]);
          }

          this.setData({
            leftData: this.data.leftData,
            rightData: this.data.rightData
          }, () => {
            this._render(data, ++i, false, success);
          });
        });
      } else {
        success && success();
      }
    },

    /**
     * 监听：点击 water-flow-item
     * @param e 事件对象
     */
    onTapItem(e) {
      eventUtil.emit(this, 'linitemtap', { item: e.currentTarget.dataset.item });
    }
  }
});
