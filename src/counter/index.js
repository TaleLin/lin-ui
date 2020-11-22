import eventUtil from '../core/utils/event-util';

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
    focus: false
  },

  observers: {
    'count': function (count) {
      eventUtil.emit(this, 'linchange', { count });
    },
    'count,min,max': function () {
      this.valueRange(this.data.count, 'parameter');
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doNothing(e) {
      const { type } = e.currentTarget.dataset;
      eventUtil.emit(this, 'linout', { type, way: 'icon' });
    },

    onCount() {
      this.setData({ focus: true });
    },

    onBlur(e) {
      let {
        value
      } = e.detail;
      setTimeout(() => {
        this.blurCount(Number(value), () => {
          eventUtil.emit(this, 'lintap', { count: this.data.count, type: 'blur' });
        });
      }, 50);
    },

    blurCount(value, callback) {
      if (value) {
        this.valueRange(value);
      }
      callback && callback();
    },

    valueRange(value, way = 'input') {
      const { count, min, max } = this.data;

      // 数据错误，显示警告
      way === 'parameter' && value > max && console.error(`Counter 组件：初始值 ${count} 大于了最大值 ${max}，请注意修正`);
      way === 'parameter' && value < min && console.error(`Counter 组件：初始值 ${count} 小于了最小值 ${min}，请注意修正`);

      // 触发相应事件
      value > max && eventUtil.emit(this, 'linout', { type: 'overflow_max', way });
      value < min && eventUtil.emit(this, 'linout', { type: 'overflow_min', way });

      // 如果 value 越界，则修正其值
      value = value > max ? max : value;
      value = value < min ? min : value;

      // 更新页面显示数值
      value === this.data.count && this.setData({ focus: false });
      value !== this.data.count && this.setData({ count: value }, () => {
        this.setData({ focus: false });
      });
    },

    /**
     * 点击 +/- 改变数值的监听函数
     *
     * @param {Object} e 事件对象
     */
    onTapChange(e) {
      const type = e.currentTarget.dataset.changeType;
      const { count, step, min, max } = this.data;
      let result;

      // 根据 +/- 做不同运算
      if (type === 'add') {
        result = count + step > max ? max : count + step;
      } else if (type === 'reduce') {
        result = count - step < min ? min : count - step;
      }

      this.setData({ count: result });
      eventUtil.emit(this, 'lintap', {
        count: this.data.count,
        type
      });
    },

    onInput(e) {
      eventUtil.emit(this, 'lininput', e.detail);
    }
  }
});
