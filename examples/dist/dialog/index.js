import computeOffset from '../behaviors/computeOffset';
import zIndex from '../behaviors/zIndex';
import hover from '../behaviors/hover';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computeOffset,zIndex,hover],
  externalClasses: ['l-class', 'l-title-class', 'l-content-class', 'l-confirm-class', 'l-cancel-class', 'l-bg-class'],
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
    titleColor: String,
    contentColor: {
      type: String,
      value: 'rgba(89,108,142,1)'
    },
    openApi: {
      type: Boolean,
      value: true
    }
  },
  data: {
    success: null,
    fail: null,
  },
  /**
   * 组件的初始数据
   */
  attached() {
    if (this.data.openApi) {
      this.initDialog();
    }
  },

  pageLifetimes: {
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
      wx.lin = wx.lin || {};
      wx.lin.showDialog = (options) => {
        const {
          type = 'alert',
          title = '提示',
          showTitle = true,
          content = '',
          locked = true,
          confirmText = '确定',
          contentColor = 'rgba(89,108,142,1)',
          cancelColor = '#45526b',
          cancelText = '取消',
          confirmColor = '#3683d6',
          success = null,
          fail = null,
        } = options;
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
          contentColor,
          show: true,
          fail,
          success
        });
        return this;
      };
    },

    // 确定按钮
    onConfirmTap() {
      let detail = 'confirm';
      let option = { bubbles: true, composed: true };

      const {
        success
      } = this.data;
      success && success({
        confirm: true,
        cancel: false,
        errMsg: 'showDialog: success'
      });
      this.setData({
        show: !this.data.show
      });
      this.triggerEvent('linconfirm', detail, option);

    },

    // 取消按钮
    onCancelTap() {

      let detail = 'cancel';
      let option = { bubbles: true, composed: true };

      const {
        success
      } = this.data;
      success && success({
        confirm: false,
        cancel: true,
        errMsg: 'showDialog: success'
      });
      this.setData({
        show: !this.data.show
      });

      this.triggerEvent('lincancel', detail, option);
    },

    // 背景点击事件
    onDialogTap() {
      let detail = true;
      let option = { bubbles: true, composed: true };

      if (this.data.locked !== true) {
        this.setData({
          show: !this.data.show
        });
      }

      this.triggerEvent('lintap', detail, option);
    }
  }
});