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
      linked() {},
      unlinked() {}
    },
  },

  properties: {
    tab: String,
    key: String,
    icon: String,
    image: Object,
    picPlacement: {
      type: String,
      value: 'top'
    },
    dotBadge: Boolean,
    badgeCount: Number,
    badgeMaxCount: {
      type: Number,
      value: 99
    },
    badgeCountType: {
      type: String,
      value: 'overflow'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})