import validator from '../behaviors/validator';

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [
    'l-class',
    'l-container-class',
    'l-placeholder-class',
    'l-icon-class',
    'l-input-class',
    'l-cancel-class'
  ],
  behaviors: [validator],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    confirmType: {
      type: String,
      value: 'search'
    },
    placeholder: String,
    cancelText: {
      type: String,
      value: '取消'
    },
    frontText: String,
    custom: Boolean,
    value: String,
    type: String,
    icon: {
      type: String,
      value: 'research'
    },
    iconColor: {
      type: String,
      value: '#bdbdbd'
    },
    iconSize: {
      type: String,
      value: '28'
    },
    bgColor: {
      type: String,
      value: '#f3f3f3'
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    shape: {
      type: String,
      value: 'primary',
      options: ['circle', 'primary']
    },
    textAlign: {
      type: String,
      value: 'left',
      options: ['left', 'right']
    },
    // 获取焦点
    focus: Boolean,
    // 是否显示清除按钮
    clear: {
      type: Boolean,
      value: true
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      value: 140
    },
    // 是否禁用
    disabled: Boolean,
    // 占位文字的样式
    placeholderStyle: String
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
    onCancel() {
      this.triggerEvent('lincancel', {}, {
        bubbles: true,
        composed: true
      });
    },
    // input属性列表
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

      this.triggerEvent('linchange', detail);
    },

    handleInputFocus(event) {
      this.triggerEvent('linfocus', event.detail);
    },

    handleInputBlur(event) {
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

      this.triggerEvent('linconfirm', detail);
    },

    onClearTap(event) {
      this.setData({
        value: ''
      });
      this.triggerEvent('linclear', event.detail, {
        bubbles: true,
        composed: true
      });
    },

    /**
     * 监听点击地址事件
     * @param event
     */
    handleTapFrontText(event){
      this.triggerEvent('linfronttap',event.detail);
    }
  }
});
