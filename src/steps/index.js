import validator from '../behaviors/validator';

Component({
  externalClasses: [
    'l-class'
  ],
  behaviors: [validator],
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
      value: 'row',
      options: ['row', 'column']
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    color: String,
    stepMinHeight: {
      type: String,
      value: '120'
    },
    status: {
      type: String,
      value: 'process',
      options: ['process', 'error']
    },
    dot: Boolean,
    reverse: Boolean
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
      const query = wx.createSelectorQuery().in(this);
      query.select('.steps-container').boundingClientRect().exec(res => {
        let steps = this.getRelationNodes('../step/index');
        this.data.length = steps.length;
        if (this.data.length > 0) {
          steps.forEach((step, index) => {
            step.updateDataChange({
              index,
              ...this.data,
              stepsWidth: res[0].width
            });
          });
        }
      });
    }
  }
});
