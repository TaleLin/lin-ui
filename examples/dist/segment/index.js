Component({
    /**
     * 组件的属性列表
     */
    externalClasses: ['l-class', 'l-class-active', 'l-class-inactive','l-class-tabimage','l-class-header-line','l-class-line','l-class-icon','l-class-badge'],
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },

    relations: {
        '../segment-item/index': {
            type: 'child',
            linked() {
                // 每次有子节点被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
                this.initTabs();
            },
            unlinked() {
                this.initTabs();
            }
        },
    },
    properties: {
        activeKey: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        placement: {
            type: String,
            value: 'top',
        },
        scrollable: Boolean,
        hasLine: {
            type: Boolean,
            value: true
        },
        aminmatedForLine: Boolean,
        activeColor: {
            type: String,
        },
        inactiveColor: {
            type: String,
        },
        equalWidth: {
            type: Boolean,
            value: true
        },
        even:{
            type: Boolean,
            value: true
        },
        width:Number,
        height:Number,
        itemHeight:Number,
        itemWidth:Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        tabList: [],
        currentIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        initTabs(val = this.data.activeKey) {
            let items = this.getRelationNodes('../segment-item/index');       
            if (items.length > 0) {
                if(items.length === this.data.tabList.length ) return;
                let activeKey = val,
                    currentIndex = this.data.currentIndex;
                const tab = items.map((item, index) => {
                    activeKey = !val && index == 0 ? item.data.key : activeKey;
                    currentIndex = item.data.key === activeKey ? index : currentIndex;
                    return {
                        ...item.data
                    }
                });
                this.setData({
                    tabList: tab,
                    activeKey,
                    currentIndex,
                }, () => {
                    if (this.data.scrollable) {
                        this.queryMultipleNodes();
                    }
                });
            }
        },

        handleChange(e) {
            const activeKey = e.currentTarget.dataset.key;
            const currentIndex = e.currentTarget.dataset.index;
            this._setChangeData({
                activeKey,
                currentIndex
            });
        },

        _setChangeData({
            activeKey,
            currentIndex
        }) {
            this.setData({
                activeKey,
                currentIndex
            }, () => {
                if (this.data.scrollable) {
                    this.queryMultipleNodes();
                }
            });
            this.triggerEvent('linchange', {
                activeKey,
                currentIndex
            });
        },

        queryMultipleNodes() {
            const {
                placement,
                activeKey,
                tabList,
                currentIndex
            } = this.data;
            
            this._getRect('#key-' + activeKey)
                .then((res) => {
            
                    if (['top', 'bottom'].indexOf(placement) !== -1) {
                        this.setData({
                            transformX: res.left > 0 ? res.left : 'auto',
                            transformY: 0
                        });
                    } else {
                        const height = res.height;
                        this._getRect('.l-tabs-header')
                            .then((navRect) => {
                                const transformY = height * currentIndex - height / 2;
                                this.setData({
                                    transformX: 0,
                                    transformY: transformY > 0 ? transformY : 0
                                });
                            });
                    }
                });
        },

        _getRect(selector) {
            return new Promise((resolve, reject) => {
                const query = wx.createSelectorQuery().in(this);
                query.select(selector).boundingClientRect((res) => {
                    if (!res) return reject('找不到元素');
                    resolve(res)
                }).exec();
            });
        }
    }
})