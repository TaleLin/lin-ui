import scrollCenter from '../behaviors/scrollCenter';

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [scrollCenter],
  externalClasses: [
    'l-class',
    'l-header-class',
    'l-class-active',
    'l-active-class',
    'l-class-inactive',
    'l-inactive-class',
    'l-class-tabimage',
    'l-tab-image-class',
    'l-class-header-line',
    'l-header-line-class',
    'l-class-line',
    'l-line-class',
    'l-class-icon',
    'l-icon-class',
    'l-class-badge',
    'l-badge-class'
  ],
  options: {
    multipleSlots: true,
    pureDataPattern: /^_/
  },

  relations: {
    '../segment-item/index': {
      type: 'child',
      linked(target) {
        // 每次有子节点被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        this.initTabs(target);
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
    animatedForLine: Boolean,
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
    even: {
      type: Boolean,
      value: true
    },
    width: Number,
    height: Number,
    itemHeight: Number,
    itemWidth: Number
  },

  observers: {
    'activeKey': function (newKey) {
      if (!newKey) return;
      const index = this.data.tabList.findIndex(tab => tab.key === newKey);
      this.setData({
        currentIndex: index
      }, () => {
        if (this.data.scrollable) {
          this.queryMultipleNodes();
        }
      });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // segment-item 绑定的 data-cell 数据
    _cells:[],
    tabList: [],
    currentIndex: 0,
    _segmentItemInstances: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initTabs(segmentItemInstance) {
      const val = this.data.activeKey;
      let items = this.getRelationNodes('../segment-item/index');
      if (items.length > 0) {
        if (items.length === this.data.tabList.length && this.data._segmentItemInstances.indexOf(segmentItemInstance) > 0) return;
        let activeKey = val,
          currentIndex = this.data.currentIndex;
        let _cells = [];
        const tab = items.map((item, index) => {
          activeKey = !val && index === 0 ? item.data.key : activeKey;
          currentIndex = item.data.key === activeKey ? index : currentIndex;
          // 存储 segment-item 绑定的 data-cell 数据
          _cells[index] = item.dataset.cell;
          return {
            ...item.data
          };
        });
        this.setData({
          _cells,
          activeKey,
          tabList: tab,
          currentIndex,
          _segmentItemInstances: items
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
        currentIndex,
        cell:this.data._cells[currentIndex]
      });
    }
  }
});
