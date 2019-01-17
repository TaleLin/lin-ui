// mask
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [],
  properties: {
    // 显示与隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 类型 【 alert: 提示框， confrim: 确认框 】
    type: {
      type: String,
      value: 'alert'
    },
    // 标题文字
    title: {
      type: String,
      value: '提示'
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      value: true
    },
    // 内容
    content: {
      type: String,
      value: ''
    },
    // 锁定
    locked: {
      type: Boolean,
      value: true
    },
    // 确定按钮的文本
    confirmText: {
      type: String,
      value: '确定'
    },
    // 确定按钮的颜色
    confirmColor: {
      type: String,
      value: '#3683d6'
    },
    // 取消按钮的文本
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelColor: {
      type: String,
      value: '#45526b'
    }
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

    // 确定按钮
    onConfirmTap(e) {
      let detail = 'confirm';
      let option = {};
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('confirm', detail, option);

    },

    // 取消按钮
    onCancelTap(e) {
      let detail = 'cancel';
      let option = {};
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('cancel', detail, option);
    },

    // 背景点击事件
    onDialogTap(e) {
      let detail = true;
      let option = {};

      if (this.data.locked !== true) {
        this.setData({
          show: !this.data.show
        })
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
})