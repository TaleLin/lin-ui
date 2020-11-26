import validator from '../behaviors/validator';

Component({
  externalClasses: [
    'l-class',
    'l-label-class',
    'l-hover-class',
    'l-img-class',
    'l-icon-class'
  ],
  behaviors: [validator],
  properties: {
    // button组建标识
    name: {
      type: String,
      value: 'lin'
    },
    type: {
      type: String,
      value: 'default',
      options: ['warning', 'success', 'error', 'default']
    },
    plain: Boolean,
    size: {
      type: String,
      value: 'medium',
      options: ['medium', 'large', 'mini', 'long']
    },
    shape: {
      type: String,
      value: 'circle',
      options: ['square', 'circle', 'semicircle']
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    special: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    // 微信原生接口
    width: Number,
    height: Number,
    icon: String,
    image: String,
    bgColor: String,
    iconColor: String,
    iconSize: String,
    openType: String,
    appParameter: String,
    lang: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    formType: String,
    disabledHover: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    // button点击事件
    handleTap() {
      if (this.data.disabled || this.data.loading) return false;
      this.triggerEvent('lintap', {}, {
        bubbles: true,
        composed: true
      });
    },
    // 开放能力事件回调
    openTypeEvent(data) {
      this.triggerEvent(data.type, data.detail, {});
    }
  }
});
