// input/input.js
import rules from '../behaviors/rules';
import eventBus from '../core/utils/event-bus';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field', rules],
  externalClasses: ['l-class', 'l-error-text', 'l-error-text-class', 'l-inner-class'],
  properties: {
    // 占位文本
    placeholder: {
      type: String,
      value: ''
    },
    // 输入框的值
    value: {
      type: String,
      value: ''
    },
    // 获取焦点
    focus: {
      type: Boolean,
      value: false
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      value: 140
    },
    // 表显示文字长度的计数器
    indicator: {
      type: Boolean,
      value: true
    },
    // label标题的显示位置 left top right
    autoHeight: {
      type: Boolean,
      value: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 是否显示边框
    border: {
      type: Boolean,
      value: true
    },
    // 校验
    rules: {
      type: Object,
    },
    // 占位文字的样式
    placeholderStyle: {
      type: String,
      value: ''
    },
    // 光标与键盘的距离
    cursorSpacing: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  attached() {
    this.initRules();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInputChange(event) {
      const {
        detail = {}
      } = event;
      const {
        value = ''
      } = detail;

      this.setData({
        value
      });
      eventBus.emit(`lin-form-change-${this.id}`, this.id);
      this.triggerEvent('lininput', event.detail);
    },

    handleInputFocus(event) {
      this.triggerEvent('linfocus', event.detail);
    },

    handleInputBlur(event) {
      this.validatorData({
        [this.data.name]: event.detail.value
      });
      eventBus.emit(`lin-form-blur-${this.id}`, this.id);
      this.triggerEvent('linblur', event.detail);
    },
    handleInputConfirm(event) {
      this.triggerEvent('linconfirm', event.detail);
    },
    getValues() {
      return this.data.value;
    },
    reset() {
      this.data.value = '';
    }
  }
});
