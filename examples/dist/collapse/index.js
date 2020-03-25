Component({

  options: {
    pureDataPattern: /^_/
  },

  relations: {
    '../collapse-item/index': {
      type: 'child'
    }
  },

  lifetimes: {
    ready: function () {
      this.updateView();
    }
  },

  properties: {
    /**
     * 折叠面板类型
     */
    type: {
      type: String,
      value: 'normal'
    },

    /**
     * 需要展开的 collapse-item 的id
     */
    expandItemId: {
      type: Array,
      value: []
    }
  },
  data: {
    /**
     * 当前展开的collapse-item节点列表
     */
    _expandItems: []
  },
  observers: {
    'expandItemId': function () {
      this.updateView();
    }
  },
  methods: {
    updateView() {
      let expandItemId
      if (this.data.type === 'accordion') {
        expandItemId = this.data.expandItemId.slice(0, 1)
      } else {
        expandItemId = this.data.expandItemId
      }

      let children = this.getRelationNodes('../collapse-item/index');
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        let id = item.id ? item.id : i;
        if (expandItemId.indexOf(id) > -1 && !item.isExpandContent) {
          this.setCollapseItemStatus(item, true)
        } else if (item.isExpandContent || this.data.type === 'accordion') {
          this.setCollapseItemStatus(item, false)
        }
      }
    },

    onTapCollapseItem(collapseItem) {
      if (this.data.type === 'accordion') {
        this.foldAllExpandItem(collapseItem)
      }
      this.setCollapseItemStatus(collapseItem,!collapseItem.data.isExpandContent)
    },

    /**
     * 设置子组件状态
     */
    setCollapseItemStatus(collapseItem, isExpand) {
      if (isExpand) {
        collapseItem.expandContent()
        this.data._expandItems.push(collapseItem)
      } else {
        collapseItem.foldContent()
        for (let i = 0; i < this.data._expandItems.length; i++) {
          if (this.data._expandItems[i] === collapseItem) {
            this.data._expandItems.splice(i, 1)
          }
        }
      }
    },

    /**
     * 关闭所有打开的collapse-item
     */
    foldAllExpandItem(collapseItem) {
      for (let i = 0; i < this.data._expandItems.length; i++) {
        if (collapseItem !== this.data._expandItems[i]) {
          this.data._expandItems[i].foldContent()
        }
      }
      this.data._expandItems = []
    }
  }
});
