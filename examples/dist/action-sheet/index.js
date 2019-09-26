import zIndex from '../behaviors/zIndex';
import hover from '../behaviors/hover';

Component({
  behaviors: [zIndex,hover],
  externalClasses: ['l-class-title', 'l-class-item', 'l-class-cancel','l-title-class','l-item-class','l-cancel-class'],
  properties: {
    locked: Boolean,
    showCancel: Boolean,
    show: Boolean,
    itemList: Array,
    cancelText: {
      type: String,
      value: '取消'
    },
    title: String,
    zIndex:{
      type:Number,
      value: 777
    },
    openApi: {
      type: Boolean,
      value: true,
    }
  },
  data: {
    success: '',
    fail: '',
    isIphoneX: false
  },
  attached() {
    if (this.data.openApi) {
      this.initActionSheet();
    }
    this.initUIAdapter();
  },

  pageLifetimes: {
    show() {
      if (this.data.openApi) {
        this.initActionSheet();
      }

    },
  },
  methods: {
    /**
   * 区分UI尺寸
   */
    initUIAdapter() {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            isIphoneX: res.model == 'iPhone X' ? true : false,
          });
        }
      });
    },
    initActionSheet() {
      wx.lin = wx.lin || {};
      wx.lin.showActionSheet = (options={}) => {
        const {
          itemList = [],
          success = null,
          fail = null,
          title = '',
          locked = false,
          cancelText = '取消',
          showCancel = false,
        } = options;
        this.setData({
          itemList: itemList.slice(0, 10),
          success,
          fail,
          title,
          locked,
          cancelText,
          showCancel,
          show: true,
        });
        return this;
      };
    },
    handleClickItem(e) {
      const {
        success
      } = this.data;
      success && success({ ...e.currentTarget.dataset });
      this.triggerEvent('linitemtap', { ...e.currentTarget.dataset },{ bubbles: true, composed: true });
      this._hideActionSheet();
    },

    _showActionSheet() {
      this.setData({
        show: true
      });
    },

    _hideActionSheet() {
      this.setData({
        show: false
      });
    },

    handleClickCancel() {
      const {
        fail
      } = this.data;
      fail && fail({
        errMsg: 'showactionsheet:fail cancel'
      });
      this.triggerEvent('lincancel', {
        errMsg: 'showactionsheet:fail cancel'
      },{ bubbles: true, composed: true });
      this._hideActionSheet();
    },

    handleClickPopUp() {
      if (!this.data.locked) {
        this.handleClickCancel();
      }
    },
  }
});