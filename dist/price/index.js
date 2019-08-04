Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-deleted-class', 'l-unit-class', 'l-count-class', 'l-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
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
    count: {
      type: String,
      value: '0.00',
      observer: 'reserveNumber'
    },
    countColor: String,
    countSize: String,
    countBold: String,
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

  /**
   * 组件的方法列表
   */
  methods: {
    reserveNumber() {
      const strValue = this.data.count.toString();
      const isNumber = !isNaN(Number(this.data.count));
      const dotIndex = strValue.indexOf('.');
      if (strValue.length - dotIndex - 1 > this.data.reserveDigit && dotIndex !== -1) {
        this.setData({
          result: isNumber ? strValue.substring(0, dotIndex + 1 + this.data.reserveDigit) : strValue
        });
      } else {
        if (isNumber) {
          this.addZero(strValue);
        } else {
          this.setData({
            result: strValue
          });
        }
      }
    },
    addZero(value) {
      const dotIndex = value.indexOf('.') == -1 ? value.length - 1 : value.indexOf('.');
      const realLen = dotIndex + 1 + this.data.reserveDigit;
      if (value.length < realLen && this.data.autofix) {
        const result = dotIndex == value.indexOf('.') ? value + '0'.repeat(realLen - value.length) : value + '.' + '0'.repeat(realLen - value.length);
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