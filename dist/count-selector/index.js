Component({
  externalClasses: [
    'l-class',
    'l-symbol-class',
    'l-count-class',
    'l-disabled-class'
  ],
  properties: {
    count: {
      type: Number,
      value: 1,
      observer: 'changeCount'
    },
    max: {
      type: Number,
      value: 10000
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
    focus: false
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
        this.blurCount(value);
      }, 50);
    },

    changeCount() {
      this.blurCount(this.properties.count, true);
    },

    blurCount(value, fromObserver = false) {
      if (value) {
        if (value > this.properties.max) this.setData({
          count: this.properties.max
        }, () => {
          this.triggerEvent('linout', { type: 'overflow_max', way: 'input' }, {
            bubbles: true,
            composed: true
          });
        });
        else if (value < this.properties.min) this.setData({
          count: this.properties.min
        }, () => {
          this.triggerEvent('linout', { type: 'overflow_min', way: 'input' }, {
            bubbles: true,
            composed: true
          });
        });
        else this.setData({
          count: value
        });
      } else {
        this.setData({
          count: this.properties.count
        });
      }
      let detail = {
        count: this.data.count,
        type: 'blur'
      };
      if (!fromObserver) this.triggerEvent('lintap', detail, {
        bubbles: true,
        composed: true
      });
    },

    reduceTap() {
      let distance = this.data.count - this.properties.step;
      if (distance <= this.properties.min) {
        this.data.count = this.properties.min;
      } else {
        this.data.count -= this.properties.step;
      }
      this.setData({
        count: this.data.count
      });
      let detail = {
        count: this.data.count,
        type: 'reduce'
      };
      this.triggerEvent('lintap', detail, {
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
        count: this.data.count
      });
      let detail = {
        count: this.data.count,
        type: 'add'
      };
      this.triggerEvent('lintap', detail, {
        bubbles: true,
        composed: true
      });
    },
  }
});