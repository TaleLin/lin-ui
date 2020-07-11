import validator from '../behaviors/validator';

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-deleted-class', 'l-unit-class', 'l-value-class', 'l-class', 'l-decimal-class', 'l-dot-class'],
  behaviors: [validator],
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
      value: 'number',
      options: ['number', 'text']
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
    // 价格整数部分
    priceInteger: {
      type: String,
      value: '0'
    },
    // 价格小数部分
    priceDecimal: {
      type: String,
      value: '00'
    }
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
      this.setData({
        priceInteger: null,
        priceDecimal: null
      });
      const countToNumber = Number(this.data.value);
      const isText = isNaN(Number(countToNumber)) || (this.data.mode === 'text');
      if (!isText && this.data.autofix) {
        const result = countToNumber.toFixed(this.data.reserveDigit);
        const price = result.toString().split('.');
        this._setPrice(price);
      } else {
        const price = this.data.value.split('.');
        this._setPrice(price);
      }
    },

    _setPrice(price) {
      if (price.length === 1) {
        this.setData({
          priceInteger: price[0]
        });
      }else if(price.length === 2){
        this.setData({
          priceInteger: price[0],
          priceDecimal: price[1]
        });
      }else{
        throw 'price 格式有误，请仔细检查！';
      }
    }
  }
});
