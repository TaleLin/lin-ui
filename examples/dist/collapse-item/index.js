Component({

  externalClasses: ['l-class', 'l-title-class', 'l-body-class'],

  relations: {
    '../collapse/index': {
      type: 'parent'
    }
  },

  options: {
    multipleSlots: true,
    pureDataPattern: /^_/
  },

  properties: {
    /**
     * 折叠面板子项自定义id
     */
    itemId: {
      type:String,
      value:'default'
    },
    /**
     * 标题文字
     */
    title: {
      type: String,
      value: '默认标题'
    },
    /**
     * 是否开启自定义标题
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
     * 内容区域展开动画速度
     */
    animationTime:{
      type:String,
      value:'0.3'
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
    /**
     * 默认id
     */
    _idDefault: -1,
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
