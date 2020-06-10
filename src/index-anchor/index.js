import nodeUtil from '../core/utils/node-util';

Component({

  externalClasses:['l-anchor-class'],

  options: {
    multipleSlots: true,
    pureDataPattern: /^_/
  },

  relations: {
    '../index-list/index': {
      type: 'parent'
    }
  },

  data: {
    // 锚点 Slot 节点信息
    anchorSlot: {
      height: -1
    },
    // Anchor 节点高度
    anchor: {
      height: 0
    },
    // 锚点文本内容
    anchorText: '',
    // 锚点样式
    anchorStyle: '',
    // Anchor 设置为 fixed 布局后
    // 用来支持原来 Anchor 节点的高度
    anchorWrapperStyle: ''
  },

  lifetimes: {
    attached() {
      this.parseAnchorSlotRect();
    },
  },

  methods: {
    /**
     * 把 Anchor 锚点 Slot位置信息放入 data
     */
    async parseAnchorSlotRect() {
      const anchorSlotRect = await nodeUtil.getNodeRectFromComponent(this, '.anchor-slot');
      if (anchorSlotRect) {
        this.setData({
          ['anchorSlot.height']: anchorSlotRect.height
        });
      } else {
        this.setData({
          ['anchorSlot.height']: 0
        });
      }
    },

    /**
     * 获取 Anchor 节点信息
     * @returns {Promise<void>}
     */
    async parseAnchorRect() {
      const anchorRect = await nodeUtil.getNodeRectFromComponent(this, '.anchor');
      if (anchorRect) {
        this.setData({
          ['anchor.height']: anchorRect.height
        });
      }
    },

    /**
     * 把 Anchor 设置为吸附状态
     */
    setFixed(stickOffsetTop, anchorHeight) {
      const anchorStyle = `
        position:fixed;
        top:${stickOffsetTop}rpx;
      `;
      const anchorWrapperStyle = `height:${anchorHeight}px;`;
      this.setData({anchorStyle, anchorWrapperStyle});
    },

    /**
     * 把 Anchor 设置为相对定位
     * @param translateY
     */
    setRelative(translateY) {
      const anchorStyle = `
        position:relative;
        transform: translate3d(0, ${translateY}px, 0);
       `;
      this.setData({anchorStyle});
    },


    /**
     * 把 Anchor 样式复原
     */
    clearStyle() {
      this.setData({anchorStyle: '', anchorWrapperStyle: ''});
    },

    /**
     * 当前 Anchor 是否是 relative 布局
     */
    isRelative() {
      return this.data.anchorStyle.indexOf('relative') > 0;
    },

    isFixed(){
      return this.data.anchorStyle.indexOf('fixed') > 0;
    }
  }
});
