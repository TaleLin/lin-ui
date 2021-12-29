import eventBus from '../core/utils/event-bus';

Component({
  externalClasses: ['l-class', 'l-disabled-class'],
  properties: {
    checked: {
      type: null,
      optionalTypes: [Boolean, String, Number],
      value: false
    },
    size: {
      type: String,
      value: '38rpx'
    },
    color: {
      type: String,
      value: '#fff'
    },
    //  选中后的颜色
    selectColor: {
      type: String,
      value: '#3963BC'
    },
    activeValue: {
      type: null,
      value: true,
    },
    inactiveValue: {
      type: null,
      value: false,
    },
    // 不可选状态
    disabled: {
      type: Boolean,
      value: false
    },
  },
  methods: {
    onClick() {
      const { activeValue, inactiveValue, disabled } = this.data;

      if (disabled) {
        return;
      }

      const checked = this.data.checked === activeValue;
      const value = checked ? inactiveValue : activeValue;

      this.setData({
        checked: value
      });

      this.triggerEvent('linchange', { checked: value });
      eventBus.emit(`lin-form-change-${this.id}`, this.id);
    },

    getValues() {
      return this.data.checked;
    },

    reset() {
      this.setData({
        checked: this.data.inactiveValue
      });
    }
  }
});