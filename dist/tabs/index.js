// components/tab/index.js
Component({
  externalClasses: ['v-tab-active', 'tab-default'],
  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    key: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCurrent: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(isCurrent) {
      if (isCurrent===this.data.isCurrent) return;
      this.setData({
        isCurrent
      })
    },

    changeActiveTab(e) {
      const {
        dataset: {
          key
        }
      } = e.currentTarget;
      this.getRelationNodes('../tabs/index')[0].handleChange(key);
    }
  }
})