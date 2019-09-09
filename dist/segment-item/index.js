Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  relations: {
    '../segment/index': {
      type: 'parent',
      linked() { },
      unlinked() { }
    },
  },

  properties: {
    tab: String,
    key: String,
    icon: String,
    iconSize: {
      type: String,
      value: '20'
    },
    image: Object,
    picPlacement: {
      type: String,
      value: 'top'
    },
    dotBadge: Boolean,
    badgeCount: {
      type: Number,
    },
    badgeMaxCount: {
      type: Number,
      value: 99
    },
    badgeCountType: {
      type: String,
      value: 'overflow'
    },
  },
  observers: {
    '**': function (filed) {
      this.updateData(filed);
    }
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    updateData(filed) {
      let parent = this.getRelationNodes('../segment/index')[0];
      if (!parent) return;
      const tabList = parent.data.tabList;
      if (!(tabList && tabList.length > 0)) return;
      const index = tabList.findIndex(tab => tab.key === this.data.key);
      tabList[index] = filed;
      parent.setData({
        tabList: tabList
      }, () => {
        if (parent.data.scrollable) {
          parent.queryMultipleNodes();
        }
      });

    },
  }
});