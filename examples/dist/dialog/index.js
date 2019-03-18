// dialog
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-class-title', 'l-class-content', 'l-class-confirm', 'l-class-cancel'],
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
    },
    openApi: {
      type: Boolean,
      value: true
    }
  },
  data: {
    confirm: null,
    cancel: null,
  },
  /**
   * 组件的初始数据
   */
  attached() {
    if (this.data.openApi) {
      this.initDialog();
    }
  },

  lifetimes: {
    show() {
      if (this.data.openApi) {
        this.initDialog();
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initDialog() {
      const config = {
        type: 'alert',
        title: '提示',
        showTitle: true,
        content: '',
        locked: true,
        confirmText: '确定',
        cancelColor: '#3683d6',
        cancelText: '取消',
        confirmColor: '#45526b',
      }
      wx.lin = wx.lin || {};
      wx.lin.showDialog = (options) => {
        const {
          type = config.type,
          title = config.title,
          showTitle = config.showTitle,
          content = config.content,
          locked = config.locked,
          confirmText = config.confirmText,
          cancelColor = config.cancelColor,
          cancelText = config.cancelText,
          confirmColor = config.confirmColor,
        } = options;
        this.data.confirm = options.confirm
        this.data.cancel = options.cancel
        this.setData({
          type,
          title,
          showTitle,
          content,
          locked,
          confirmText,
          cancelColor,
          cancelText,
          confirmColor,
          show: true,
        });
        return this;
      };
    },

    // 确定按钮
    onConfirmTap(e) {
      if (this.data.confirm) this.data.confirm()
      let detail = 'confirm';
      let option = {};
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('linconfirm', detail, option);

    },

    // 取消按钮
    onCancelTap(e) {
      if (this.data.cancel) this.data.cancel()
      let detail = 'cancel';
      let option = {};
      this.setData({
        show: !this.data.show
      })
      this.triggerEvent('lincancel', detail, option);
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