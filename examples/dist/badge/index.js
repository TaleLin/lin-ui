Component({
  externalClasses: ['l-class'],
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
    content: String
  },
  data: {
    finalCount: 0
  },
  methods: {
    // 最终数字
    finalCount() {
      if (this.data.countType == 'overflow') {
        this.setData({
          finalCount: parseInt(this.data.count) >= parseInt(this.data.maxCount) ? `${this.data.maxCount}+` : this.data.count
        });
      } else if (this.data.countType == 'ellipsis') {
        this.setData({
          finalCount: parseInt(this.data.count) >= parseInt(this.data.maxCount) ? `...` : this.data.count
        });
      } else {
        this.setData({
          finalCount: parseInt(this.data.count)
        })
      }
    },
    // 点击事件
    handleTap() {
      this.triggerEvent('lintap');
      this.triggerEvent('lintapcatch', {}, { bubbles: true });
    },
  }
});