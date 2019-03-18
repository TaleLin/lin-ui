Component({
    externalClasses: ['l-class-title', 'l-class-item', 'l-class-cancel'],
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
        openApi: {
            type: Boolean,
            value: true,
        }
    },
    data: {
        success: '',
        fail: '',
    },
    attached() {
        if (this.data.openApi) {
            this.initActionSheet();
        }
    },

    lifetimes: {
        show() {
            if (this.data.openApi) {
                this.initActionSheet();
            }
        },
    },
    methods: {
        initActionSheet() {
            const config = {
                itemList: [],
                success: null,
                fail: null,
                title: '',
                locked: true,
                cancelText: '取消',
                showCancel: false
            }
            wx.lin = wx.lin || {};
            wx.lin.showActionSheet = (options) => {
                const {
                    itemList = config.itemList,
                    success = config.success,
                    fail = config.fail,
                    title = config.title,
                    locked = config.locked,
                    cancelText = config.cancelText,
                    showCancel = config.showCancel,
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
            this.triggerEvent('linitemtap', { ...e.currentTarget.dataset });
            this._hideActionSheet();
        },

        _showActionSheet() {
            this.setData({
                show: true
            })
        },

        _hideActionSheet() {
            this.setData({
                show: false
            })
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
            })
            this._hideActionSheet();
        },

        handleClickPopUp() {
            if (!this.data.locked) {
                this.handleClickCancel();
            }
        },
    }
});