Component({

  externalClasses:['l-class','l-title-class','l-body-class'],

  relations: {
    '../collapse/index': {
      type: 'parent'
    }
  },

  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      value: '默认标题'
    },
    /**
     * 自定义标题部分内容
     */
    customTitle: {
      type: Boolean,
      value: false
    },
    /**
     * 是否禁用内容区展开
     */
    disable: {
      type: Boolean,
      value: false
    },
    /**
     * 是否显示分隔线
     */
    divide: {
      type: Boolean,
      value: true
    }

  },
  data: {
    /**
     * 内容区高度
     */
    bodyHeight: '0',
    /**
     * 内容区是否展开
     */
    isExpandContent: false,

  },
  methods: {
    /**
     * 点击标题
     */
    onTapTitle() {

      if (this.data.disable) {
        return;
      }

      let parents = this.getRelationNodes('../collapse/index');
      parents[0].onTapCollapseItem(this);
    },

    /**
     * 折叠内容区
     */
    foldContent() {
      this.setData({
        isExpandContent: false,
        bodyHeight: 0
      });
    },

    /**
     * 展开内容区
     */
    expandContent() {
      this.createSelectorQuery()
        .select('.container-body-wrapper')
        .fields({size: true}, (res) => {
          this.setData({
            isExpandContent: true,
            bodyHeight: res.height
          });
        })
        .exec();
    }
  }
});
