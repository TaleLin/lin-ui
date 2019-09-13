Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-deleted-class', 'l-unit-class', 'l-value-class', 'l-class'],
  properties: {
    unit: {
      type: String,
      value: '￥'
    },
    size: {
      type: String,
      value: '28'
    },
    color: {
      type: String,
      value: '#3963BC'
    },
    bold: {
      type: String,
      value: '500'
    },
    unitColor: String,
    unitSize: String,
    unitBold: String,
    value: {
      type: String,
      value: '0.00'
    },
    mode: {
      type: String,
      value: 'number'
    },
    valueColor: String,
    valueSize: String,
    valueBold: String,
    deleted: Boolean,
    delColor: String,
    reserveDigit: {
      type: Number,
      value: 2
    },
    autofix: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  observers: {
    'value': function () {
      this.reserveNumber();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    reserveNumber() {
      const countToNumber = Number(this.data.value);
      const isText = isNaN(Number(countToNumber)) || (this.data.mode === 'text');
      if (!isText && this.data.autofix) {
        const result = countToNumber.toFixed(this.data.reserveDigit);
        this.setData({
          result
        });
      } else {
        this.setData({
          result: this.data.value
        });
      }
    }
  }
});