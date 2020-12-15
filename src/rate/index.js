import eventBus from '../core/utils/event-bus';

Component({
  /**
     * 组件的属性列表
     */
  externalClasses: ['l-class', 'l-class-icon', 'l-class-image', 'l-icon-class', 'l-image-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    count: {
      type: Number,
      value: 5
    },
    score: {
      type: Number,
      value: 0
    },
    size: {
      type: String,
      value: '36'
    },
    disabled: Boolean,
    activeColor: {
      type: String,
      value: '#FF5252'
    },
    inActiveColor: {
      type: String,
      value: '#FFE5E5'
    },
    name: {
      type: String,
      value: 'favor-fill'
    },
    activeImage: String,
    inActiveImage: String,
    itemGap: {
      type: Number,
      value: 10
    }
  },

  /**
     * 组件的初始数据
     */
  data: {

  },

  /**
     * 组件的方法列表
     */
  methods: {
    handleClick(e) {
      if (this.data.disabled) return;
      const { index } = e.currentTarget.dataset;
      this.setData({
        score: index + 1
      });
      this.triggerEvent('linchange', { score: index + 1 });
      eventBus.emit(`lin-form-change-${this.id}`, this.id);
    },
    getValues() {
      return this.data.score;
    },
    reset() {
      this.setData({
        score: 0
      });
    }
  }
});
