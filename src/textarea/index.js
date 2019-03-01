// input/input.js
import rules from '../behaviors/rules';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field',rules],
  externalClasses: ['l-class'],
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

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached() {
    this.initRules();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInputChange(event) {
      const { detail = {} } = event;
      const { value = '' } = detail;
 
      this.setData({ value });

      this.triggerEvent('linchange', event);
    },

    handleInputFocus(event) {
      this.triggerEvent('linfocus', event);
    },

    handleInputBlur(event) {
      this.validatorData({value:event.detail.value});
      this.triggerEvent('linblur', event);
    },
    handleInputConfirm(event) {
      const { detail = {} } = event;
      const { value = '' } = detail;

      this.triggerEvent('linconfirm', event);
    },
    // onClearTap(e) {
    //   this.setData({ value: '' })
    // },
  }
})