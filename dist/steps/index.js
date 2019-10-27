Component({
  externalClasses: [
    'l-class'
  ],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../step/index': {
      type: 'child',
      linked() {
        this._initSteps();
      },
      unlinked() {
        this._initSteps();
      }
    },
  },

  properties: {
    direction: {
      type: String,
      value: 'row'
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    color: String,
    status: {
      type: String,
      value: 'process'
    },
    dot: Boolean
  },

  observers: {
    'activeIndex': function () {
      this._initSteps();
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
    _initSteps() {
      let steps = this.getRelationNodes('../step/index');
      this.data.length = steps.length;
      if (this.data.length > 0) {
        if (this.data.activeIndex > this.data.length || this.data.activeIndex < 0) {
          console.error(`active-index值:${this.data.activeIndex}不在合理范围内`);
        }
        steps.forEach((step, index) => {
          step.updateDataChange({
            index,
            ...this.data
          });
        });
      }
    }
  }
});