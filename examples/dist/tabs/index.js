// components/tabs/index.js
Component({
  externalClasses: ['l-class-tabs','l-class-header', 'l-class-active', 'l-class-content', 'l-class-inactive', 'l-class-line', 'l-class-tabimage', 'l-class-header-line','l-class-icon'],
  relations: {
    '../tabpanel/index': {
      type: 'child',
      linked(target) {
        // 每次有子节点被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        this.initTabs();
      },
      unlinked(target) {
        this.initTabs();
      }
    },

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
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
    aminmated: Boolean,
    swipeable: Boolean,
    scrollable: Boolean,
    hasLine: {
      type: Boolean,
      value: true
    },
    aminmatedForLine:Boolean,
    activeColor: {
      type: String,
      value: '#333333'
    },
    inactiveColor: {
      type: String,
      value: '#bbbbbb'
    },
    equalWidth:{
      type:Boolean,
      value:true
    }

  },

  data: {
    tabList: [],
    currentIndex: 0,
    transformX: 0,
    transformY: 0,
  },

  ready() {
    this.initTabs();
  },


  /**
   * 组件的方法列表
   */
  methods: {
    initTabs(val = this.data.activeKey) {
      let items = this.getRelationNodes('../tabpanel/index');
      if (items.length > 0) {
        let activeKey = val,
          currentIndex = this.data.currentIndex;
        const tab = items.map((item, index) => {

          activeKey = !val && index == 0 ? item.data.key : activeKey;
          currentIndex = item.data.key === activeKey ? index : currentIndex;
          return {
            tab: item.data.tab,
            key: item.data.key,
            icon: item.data.icon,
            image: item.data.image,
            picPlacement: item.data.picPlacement,
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
    swiperChange(e) {
      const {
        source,
        current
      } = e.detail;
      if (source == 'touch') {
        const currentIndex = current;
        const activeKey = this.data.tabList[current].key;
        this._setChangeData({
          activeKey,
          currentIndex
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
        tabList
      } = this.data;
      this._getRect('#key-' + activeKey)
        .then((res) => {
          if (['top', 'bottom'].indexOf(placement) !== -1) {
            this.setData({
              transformX: res.left>0 ? res.left : 'auto',
              transformY: 0
            });
          } else {
            this._getRect('.l-tabs-header')
              .then((navRect) => {
                const transformY = res.top - navRect.top - navRect.height / 2;
                this.setData({
                  transformX: 0,
                  transformY: transformY
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
});