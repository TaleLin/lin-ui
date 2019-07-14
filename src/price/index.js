Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-unit-class', 'l-count-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    unit: {
      type: String,
      value: '￥'
    },
    unitColor: {
      type: String,
      value: '#333'
    },
    unitSize: {
      type: [String, Number],
      value: 28
    },
    unitBold: {
      type: String,
      value: 'normal'
    },
    count: {
      type: Number,
      value: 0.00,
      observer: 'reserveNumber'
    },
    countColor: {
      type: String,
      value: '#333'
    },
    countSize: {
      type: [String, Number],
      value: 28
    },
    countBold: {
      type: String,
      value: 'normal'
    },
    delete: Boolean,
    delColor: {
      type: String,
      value: '#777'
    },
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

  /**
   * 组件的方法列表
   */
  methods: {
    reserveNumber(value) {
      const strValue = value.toString();
      const dotIndex = strValue.indexOf('.');
      if (strValue.length - dotIndex - 1 > this.data.reserveDigit && dotIndex !== -1) {
        this.setData({
          result: strValue.substring(0, dotIndex + this.data.reserveDigit)
        });
      } else {
        this.addZero(strValue);
      }
    },
    addZero(value) {
      const realLen = value.indexOf('.') + 1 + this.data.reserveDigit;
      if (value.length < realLen && this.data.autofix) {
        const result = value + '0'.repeat(realLen - value.length);
        this.setData({
          result
        });
      } else {
        this.setData({
          result: value
        });
      }
    }
  }
});