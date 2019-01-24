Component({
    externalClasses: ['l-class', 'l-hover-class', 'l-img-class'],
    properties: {
      // button组建标识
      name: {
        type: String,
        value: 'lin'
      },
      type: {
        type: String,
        value: 'default',
      },
      plain: Boolean,
      size: {
        type: String,
        value: 'medium',
      },
      shape: {
        type: String,
        value: 'circle',
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
      width:Number,
      height:Number,
      icon: String,
      image: String,
      iconStyle: {
        type: String,
        value: 'size:20;color:#3683D6'
      },
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
      formType: String
    },
    methods: {
      // button点击事件
      handleTap() {
        if (this.data.disabled) return false;
        this.triggerEvent('lintap');
        this.triggerEvent('lintapcatch',{},{ bubbles: true });
      },
      // 开放能力事件回调
      openTypeEvent(data) {
        this.triggerEvent(data.type, data, {});
      }
    }
  });
