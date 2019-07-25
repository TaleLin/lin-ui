// components/tabs/index.js
Component({
  externalClasses: ['l-class-header', 'l-class-active', 'l-class-inactive', 'l-class-line', 'l-class-tabimage'],
  relations: {
    '../tabpanel/index': {
      type: 'child',
    },
    linked(target) {
      // 每次有子节点被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      this.initTabs();
    },
    unlinked(target) {
      this.initTabs();
    }
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
    scrollable: Boolean,
    swipeable: {
      type: Boolean,
      value: true,
    },
    hasLine: {
      type: Boolean,
      value: true
    },
    activeColor: {
      type: String,
      value: '#333333'
    },
    inactiveColor: {
      type: String,
      value: '#bbbbbb'
    },

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
    initTabs() {
      this.initTabList();
      this.initActiveIndex();
    },
    initActiveIndex(val = this.data.activeKey) {
      let activeKey = val,
        currentIndex = this.data.currentIndex;
      this.data.tabList.forEach((item, index) => {
        activeKey = !val && index == 0 ? item.key : activeKey;
        currentIndex = item.key === activeKey ? index : currentIndex;
      });
      this.setData({
        activeKey,
        currentIndex,
      }, () => {
        if (this.data.scrollable) {
          this.queryMultipleNodes();
        }
      });
    },

    initTabList() {
      let items = this.getRelationNodes('../tabpanel/index');
      if (items.length > 0) {
        const tabList = [];
        items.forEach((item, index) => {
          const tabIndex = tabList.findIndex(tabItem => tabItem.tab === item.data.tab);
          let tab = {};
          if (tabIndex === -1) {
            tab = {
              tab: item.data.tab,
              key: item.data.key,
              icon: item.data.icon,
              iconStyle: item.data.iconStyle,
              image: item.data.image,
              subTabs: [],
            };
            tabList.push(tab);
          }
          const targetTab = tabIndex === -1 ? tab : tabList[tabIndex];
          if (item.data.subTab) {
            targetTab.subTabs = targetTab.subTabs || [];
            const subTabItem = {
              tab: item.data.subTab,
              key: item.data.subKey,
            };
            targetTab.subTabs.push(subTabItem);
            targetTab.activeSubKey = this.data.subActiveKey || targetTab.subTabs[0].key;
            targetTab.subCurrentIndex = 0;
          }
        });
        this.setData({
          tabList,
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
        const subCurrentIndex = this.data.tabList[currentIndex].subCurrentIndex;
        const activeSubKey = this.data.tabList[currentIndex].activeSubKey;
        this._setChangeData({
          activeKey,
          currentIndex,
          subCurrentIndex,
          activeSubKey,
        });
      }
    },
    subSwiperChange(e) {
      const {
        source,
        current
      } = e.detail;
      if (source == 'touch') {
        const {
          currentIndex,
          activeKey
        } = this.data;
        const subCurrentIndex = current;
        const activeSubKey = this.data.tabList[currentIndex].subTabs[subCurrentIndex].key;
        const tabs = this.data.tabList[currentIndex];
        tabs.activeSubKey = activeSubKey;
        tabs.subCurrentIndex = subCurrentIndex;

        this.setData({
          [`tabList[${currentIndex}]`]: tabs
        });

        this._setChangeData({
          activeKey,
          currentIndex,
          activeSubKey,
          subCurrentIndex
        });
      }
    },
    handleChange(e) {
      const isSubHeader = e.currentTarget.dataset.headerType === 'subTab';
      const {
        currentIndex,
        activeKey
      } = this.data;

      const clickIndex = e.currentTarget.dataset.index;
      const subCurrentIndex = isSubHeader ? clickIndex : this.data.tabList[clickIndex].subCurrentIndex;
      const activeSubKey = isSubHeader ? this.data.tabList[currentIndex].subTabs[subCurrentIndex].key : this.data.tabList[clickIndex].activeSubKey;
      if (isSubHeader) {
        const tabs = this.data.tabList[currentIndex];
        tabs.activeSubKey = activeSubKey;
        tabs.subCurrentIndex = subCurrentIndex;
        this.setData({
          [`tabList[${currentIndex}]`]: tabs
        });
        this._setChangeData({
          activeKey,
          currentIndex,
          activeSubKey,
          subCurrentIndex
        });

      } else {
        const activeKey = e.currentTarget.dataset.key;
        this._setChangeData({
          activeKey,
          currentIndex: clickIndex,
          subCurrentIndex,
          activeSubKey
        });
      }
    },

    _setChangeData({
      activeKey,
      currentIndex,
      activeSubKey = '',
      subCurrentIndex = null,
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
        currentIndex,
        activeSubKey,
        subCurrentIndex,
      });
    },

    queryMultipleNodes() {
      const {
        placement,
        activeKey,
        tabList
      } = this.data;
      this._getRect('#' + activeKey)
        .then((res) => {
          if (['top', 'bottom'].indexOf(placement) !== -1) {
            this.setData({
              transformX: res.left - tabList.length / 2 * res.width,
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
          resolve(res);
        }).exec();
      });
    }
  }
});