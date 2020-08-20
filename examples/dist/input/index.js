// input/input.js
import eventBus from '../core/utils/event-bus.js';
import validator from '../behaviors/validator';
import rules from '../behaviors/rules';

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
  },
  behaviors: ['wx://form-field', validator, rules],
  externalClasses: ['l-class', 'l-label-class', 'l-error-text', 'l-error-text-class','l-input-class','l-row-class'],
  properties: {
    // 表单标题（label）的文本
    label: String,
    // 是否隐藏label
    hideLabel: Boolean,
    // 是否自定义label部分
    labelCustom: Boolean,
    // 是否显示下划线
    showRow: {
      type: Boolean,
      value: true
    },
    // 是否必选
    required: Boolean,
    // 占位文本
    placeholder: String,
    // 输入框类型
    type: {
      type: String,
      value: 'text',
      options: ['text', 'idcard', 'digit', 'password', 'number']
    },
    // 输入框的值
    value: String,
    // 是否需要冒号
    colon: Boolean,
    // 获取焦点
    focus: Boolean,
    // 是否显示清除按钮
    clear: Boolean,
    // 最大输入长度
    maxlength: {
      type: Number,
      value: 140
    },
    // 表单项的宽度，单位rpx
    width: {
      type: Number,
      value: null
    },
    // 表单项标题部分的宽度，单位rpx
    labelWidth: {
      type: Number,
      value: 200
    },
    // label标题的显示位置 left top right
    labelLayout: {
      type: String,
      value: 'left',
      options: ['left', 'right']
    },
    // 是否禁用
    disabled: Boolean,
    // 占位文字的样式
    placeholderStyle: String,
    // 是否显示显隐密码图标
    showEye: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},
  attached() {
    // this.initRules();
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
      const {
        detail = {}
      } = event;
      const {
        value = ''
      } = detail;

      this.setData({
        value
      });

      this.triggerEvent('linconfirm', event.detail);
    },
    onClearTap(event) {
      this.setData({
        value: ''
      });
      this.triggerEvent('linclear', event.detail);
    },
    getValues() {
      return this.data.value;
    },
    reset() {
      this.setData({
        value: ''
      });
    },

    /**
     * 监听：点击输入框右侧显隐密码图标
     */
    onTapEyeIcon() {
      const type = this.data.type;
      if (type === 'text') {
        this.setData({
          type: 'password'
        });
      } else if (type === 'password') {
        this.setData({
          type: 'text'
        });
      }
    }
  }
});
