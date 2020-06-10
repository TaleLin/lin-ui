import nodeUtil from '../core/utils/node-util';

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
      type: String,
      value: 'default'
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
    animationTime: {
      type: String,
      value: '0.3'
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
    async onTapTitle() {
      if (this.data.disable) {
        return;
      }
      let parents = this.getRelationNodes('../collapse/index');
      await parents[0].onTapCollapseItem(this);
    },

    /**
     * 折叠内容区
     */
    async foldContent() {
      // 获取 container-body-wrapper 的 css 属性信息
      const containerBodyWrapperRect =
        await nodeUtil.getNodeRectFromComponent(this, '.container-body-wrapper');

      // 这里很重要，先把高度改为固定高度，transition 才会生效
      if (this.data.isExpandContent) {
        this.setData({
          bodyHeight: containerBodyWrapperRect.height + 'px'
        });

        setTimeout(() => {
          this.setData({
            isExpandContent: false,
            bodyHeight: '0px'
          });
        }, 20);
      } else {
        this.setData({
          isExpandContent: false,
          bodyHeight: '0px'
        });
      }


    },

    /**
     * 展开内容区
     */
    async expandContent() {
      // 获取 container-body-wrapper 的 css 属性信息
      const containerBodyWrapperRect =
        await nodeUtil.getNodeRectFromComponent(this, '.container-body-wrapper');

      this.setData({
        isExpandContent: true,
        bodyHeight: containerBodyWrapperRect.height + 'px'
      });
    },

    /**
     * 过渡效果结束后，把高度改为 auto
     * 不然内容改变时，由于高度固定，内容会显示不全
     */
    onTransitionend() {
      if (this.data.isExpandContent) {
        this.setData({
          bodyHeight: 'auto'
        });
      }
    }
  }
});
