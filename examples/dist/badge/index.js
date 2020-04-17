import validator from '../behaviors/validator';

Component({
  externalClasses: ['l-class', 'l-class-self', 'l-self-class'],
  behaviors: [validator],
  properties: {
    // 红点模式
    dot: {
      type: Boolean,
      value: false
    },
    shape: {
      type: String,
      value: 'horn',
      options: ['horn', 'circle']
    },
    value: {
      type: String,
      value: '0'
    },
    mode: {
      type: String,
      value: 'number',
      options: ['number', 'text']
    },
    // 数字最大值
    maxCount: {
      type: Number,
      value: 99
    },
    // 数字形式
    numberType: {
      type: String,
      value: 'overflow',
      options: ['overflow', 'limit', 'ellipsis']
    },
    show: {
      type: Boolean,
      value: true
    }
  },
  data: {
    finalCount: 0
  },
  observers: {
    'value': function () {
      this.finalCount();
    }
  },
  methods: {
    // 最终数字
    finalCount() {
      if (isNaN(Number(this.data.value)) || (this.data.mode === 'text')) {
        this.setData({
          finalCount: this.data.value
        });
      } else {
        this.switchType();
      }
    },
    switchType() {
      switch (this.data.numberType) {
      case 'overflow':
        this.setData({
          finalCount: Number(this.data.value) > Number(this.data.maxCount) ? `${this.data.maxCount}+` : this.data.value
        });
        break;
      case 'ellipsis':
        this.setData({
          finalCount: Number(this.data.value) > Number(this.data.maxCount) ? '...' : this.data.value
        });
        break;
      case 'limit':
        this.setData({
          finalCount: Number(this.data.value) > 999 ? (Number(this.data.value) >= 9999 ? Math.floor(this.data.value / 10000 * 100) / 100 + 'w' : Math.floor(this.data.value / 1000 * 100) / 100 + 'k') : this.data.value
        });
        break;
      default:
        this.setData({
          finalCount: Number(this.data.value)
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
