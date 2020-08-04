Component({

  relations: {
    '../image-clipper/index': {
      type: 'parent'
    }
  },
  externalClasses: ['l-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    // 组件层级
    zIndex: {
      type: Number,
      value: 999
    },
    // 是否显示锁定裁剪框宽度按钮
    lockWidth: {
      type: Boolean,
      value: false
    },
    // 是否显示锁定裁剪框高度按钮
    lockHeight: {
      type: Boolean,
      value: false
    },
    // 是否显示锁定裁剪框比例按钮
    lockRatio: {
      type: Boolean,
      value: false
    },
    // 是否显示禁止缩放按钮
    disableScale: {
      type: Number,
      value: false
    },
    // 是否显示禁止旋转按钮
    disableRotate: {
      type: Number,
      value: false
    },
    // 是否显示限制移动范围按钮
    limitMove: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    formColor: '#3963bc',
    lockWidthValue: false,
    lockHeightValue: false,
    lockRatioValue: true,
    disableScaleValue: false,
    disableRotateValue: false,
    limitMoveValue: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * switch change事件
     */
    bindSwitchChange: async function(event) {
      const value = event.detail.value;
      const type = event.currentTarget.dataset.type;
      let parent = this.getRelationNodes('../image-clipper/index')[0];
      await parent.setData({
        [type]: value
      });
    },
  }
});
