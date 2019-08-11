Component({
  externalClasses: ['l-class', 'l-class-self'],
  properties: {
    // 红点模式
    dot: {
      type: Boolean,
      value: false
    },
    // 数字
    count: {
      type: Number,
      value: 0,
      observer: 'finalCount'
    },
    // 数字最大值
    maxCount: {
      type: Number,
      value: 99
    },
    // 数字形式
    countType: {
      type: String,
      value: 'overflow'
    },
    // 文字内容
    content: String,
    show: {
      type: Boolean,
      value: true
    }
  },
  data: {
    finalCount: 0
  },
  methods: {
    // 最终数字
    finalCount() {
      switch (this.data.countType) {
      case 'overflow':
        this.setData({
          finalCount: parseInt(this.data.count) >= parseInt(this.data.maxCount) ? `${this.data.maxCount}+` : this.data.count
        });
        break;
      case 'ellipsis':
        this.setData({
          finalCount: parseInt(this.data.count) >= parseInt(this.data.maxCount) ? `...` : this.data.count
        });
        break;
      case 'limit':
        this.setData({
          finalCount: parseInt(this.data.count) >= 999 ? (parseInt(this.data.count) >= 9999 ? Math.floor(this.data.count / 10000 * 100) / 100 + `w` : Math.floor(this.data.count / 1000 * 100) / 100 + `k`) : this.data.count
        });
        break;
      default:
        this.setData({
          finalCount: parseInt(this.data.count)
        });
        break;
      }
    },
    // 点击事件
    handleTap() {
      this.triggerEvent('lintap', {}, {
        bubbles: true,
        composed: true
      });
    },
  }
});