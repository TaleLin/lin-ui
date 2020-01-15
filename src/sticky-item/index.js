Component({
  externalClasses: ["l-class", "l-header-wrapper-class", "l-header-class", "l-header-sticky-class", "l-body-class"],
  options: {
    multipleSlots: true
  },

  relations: {
    "../sticky/index": {
      type: "parent"
    }
  },

  properties: {
    /**
     * 吸顶容器吸顶后距离视窗 顶部的距离
     */
    top: {
      type: Number,
      value: 0
    }
  },

  data: {
    /**
     * 显示模式
     */
    mode: undefined,
    /**
     * 当前sticky-item的索引值
     */
    index: undefined,

    /**
    * sticky-item是否固定到页面顶部
    */
    isFixedTop: false,

    /**
     * sticky-item组件距离页面顶部的高度
     */
    stickyItemTop: 0,

    /**
     * sticky-item组件自身的高度
     */
    stickyItemHeight: 0,

    /**
     * sticky-item组件包装高度
     */
    stickyItemWrapperHeight: undefined
  },

  lifetimes: {
    ready: function () {
      // 设置显示模式
      const parent = this.getParentComponet()
      const mode = parent.data.mode
      this.setData({ mode })
    }
  },

  methods: {

    /**
     * 更新sticky-item组件的position属性
     * 判断sticky-item组件是否固定到顶部
     * @param {Number} scrollTop 页面垂直滚动距离
     */
    updateStickyItemPosition(scrollTop) {
      const parent = this.getParentComponet()
      const { index, stickyItemTop, stickyItemHeight, top } = this.data
      const isFixedTop = scrollTop > stickyItemTop - top && scrollTop < stickyItemHeight + stickyItemTop - top

      // 避免频繁setData
      if (this.data.isFixedTop === isFixedTop) {
        return
      }

      if (isFixedTop) {
        // 触发吸附事件
        parent.triggerEvent("linsticky", { index })
      } else {
        // 触发脱落事件
        parent.triggerEvent("linunsticky", { index })
      }

      this.setData({ isFixedTop })
    },


    /**
     * 更新sticky-item组件的基础数据
     * @param {Number} index 当前sticky-item的索引值
     */
    updateStickyItemBaseData(index) {
      // 设置索引值
      this.setData({ index })
      // 从父级组件获取页面垂直滚动距离
      const parent = this.getParentComponet()
      const scrollTop = parent.data.scrollTop


      const query = wx.createSelectorQuery().in(this)

      /**
       * 设置sticky-item组件距页面顶部的距离
       * 和sticky-item组件的高度
       */
      query
        .select(".l-sticky-item")
        .boundingClientRect((res) => {
          this.setData({
            stickyItemTop: res.top + scrollTop,
            stickyItemHeight: res.height
          })
        }).exec()

      // 设置sticky-item-header外层容器高度
      query
        .select(".l-sticky-item-header")
        .boundingClientRect((res) => {
          this.setData({
            stickyItemWrapperHeight: res.height
          })
        }).exec()
    },

    /**
     * 获取父级组件-sticky实例
     */
    getParentComponet() {
      const stickys = this.getRelationNodes("../sticky/index")
      if (stickys.length === 0) {
        return
      }
      return stickys[0]
    }
  }
})
