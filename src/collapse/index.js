Component({

  options: {
    pureDataPattern: /^_/
  },

  relations: {
    '../collapse-item/index': {
      type: 'child',
      linked: function () {
        this._setAllItemId();
      },
      linkChanged: function () {
        this._setAllItemId();
      },
      unlinked: function () {
        this._setAllItemId();
      }
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
    async updateView() {
      let expandItemId;
      if (this.data.type === 'accordion') {
        expandItemId = this.data.expandItemId.slice(0, 1);
      } else {
        expandItemId = this.data.expandItemId;
      }

      let children = this.getRelationNodes('../collapse-item/index');
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        let id = item.data.itemId === 'default' ? i : item.data.itemId;
        if (expandItemId.indexOf(id) > -1 && !item.isExpandContent) {
          await this.setCollapseItemStatus(item, true);
        } else if (item.isExpandContent || this.data.type === 'accordion') {
          await this.setCollapseItemStatus(item, false);
        }
      }
    },

    /**
     * 点击折叠面板子项回调函数
     * @param collapseItem
     */
    async onTapCollapseItem(collapseItem) {
      if (this.data.type === 'accordion') {
        await this.foldAllExpandItem(collapseItem);
      }
      this.setCollapseItemStatus(collapseItem, !collapseItem.data.isExpandContent);

      if (!collapseItem.data.isExpandContent) {
        this.triggerEvent('linexpand', { id: collapseItem.data.itemId ? collapseItem.data.itemId : collapseItem.data._idDefault });
      } else {
        this.triggerEvent('linfold', { id: collapseItem.data.itemId ? collapseItem.data.itemId : collapseItem.data._idDefault });
      }
    },

    /**
     * 设置子组件状态
     */
    async setCollapseItemStatus(collapseItem, isExpand) {
      if (isExpand) {
        collapseItem.expandContent();
        this.data._expandItems.push(collapseItem);
      } else {
        await collapseItem.foldContent();
        for (let i = 0; i < this.data._expandItems.length; i++) {
          if (this.data._expandItems[i] === collapseItem) {
            this.data._expandItems.splice(i, 1);
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
          this.data._expandItems[i].foldContent();
        }
      }
      this.data._expandItems = [];
    },

    /**
     * 重新设置子项组件的默认id
     */
    _setAllItemId() {
      let children = this.getRelationNodes('../collapse-item/index');
      children.forEach((item, index) => {
        item.data._idDefault = index;
      });
    }
  }
});
