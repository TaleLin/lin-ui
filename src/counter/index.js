import hover from '../behaviors/hover';

Component({
  behaviors:[hover],
  externalClasses: [
    'l-class',
    'l-symbol-class',
    'l-count-class',
    'l-disabled-class'
  ],
  properties: {
    count: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 9999
    },
    min: {
      type: Number,
      value: 1
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: Boolean,
    iconSize: String,
    iconColor: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    focus: false,
    result: 1
  },

  observers: {
    'count,min,max': function () {
      this.valueRange(this.data.count, 'parameter');
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doNothing(e) {
      const { type } = e.currentTarget.dataset;
      this.triggerEvent('linout', { type, way: 'icon' }, {
        bubbles: true,
        composed: true
      });
    },

    onCount() {
      this.setData({
        focus: true
      });
    },

    onBlur(e) {
      this.setData({
        focus: false
      });
      let {
        value
      } = e.detail;
      setTimeout(() => {
        this.blurCount(Number(value), () => {
          this.data.count = this.data.result;
          this.triggerEvent('lintap', {
            count: this.data.result,
            type: 'blur'
          }, {
            bubbles: true,
            composed: true
          });
        });
      }, 50);
    },

    blurCount(value, callback) {
      if (value) {
        this.valueRange(value);
      } else {
        this.setData({
          result: this.properties.count
        });
      }
      callback && callback();
    },

    valueRange(value, way = 'input') {
      if (value > this.properties.max) {
        this.setData({
          result: this.properties.max
        }, () => {
          this.triggerEvent('linout', { type: 'overflow_max', way }, {
            bubbles: true,
            composed: true
          });
        });
      } else if (value < this.properties.min) {
        this.setData({
          result: this.properties.min
        }, () => {
          this.triggerEvent('linout', { type: 'overflow_min', way }, {
            bubbles: true,
            composed: true
          });
        });
      } else {
        this.setData({
          result: value
        });
      }
    },

    reduceTap() {
      let distance = this.data.count - this.properties.step;
      if (distance <= this.properties.min) {
        this.data.count = this.properties.min;
      } else {
        this.data.count -= this.properties.step;
      }
      this.setData({
        result: this.data.count
      });
      this.triggerEvent('lintap', {
        count: this.data.result,
        type: 'reduce'
      }, {
        bubbles: true,
        composed: true
      });
    },

    addTap() {
      let distance = this.data.count + this.properties.step;
      if (distance >= this.properties.max) {
        this.data.count = this.properties.max;
      } else {
        this.data.count += this.properties.step;
      }
      this.setData({
        result: this.data.count
      });
      this.triggerEvent('lintap', {
        count: this.data.result,
        type: 'add'
      }, {
        bubbles: true,
        composed: true
      });
    },
  }
});