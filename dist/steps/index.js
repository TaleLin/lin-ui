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
      value: 1
    },
    activeColor: {
      type: String,
      value: '#3963bc'
    },
    color: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'number'
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
      let length = steps.length;
      if (this.data.direction == 'row') this.setData({
        length
      });
      if (length > 0) {
        steps.forEach((step, index) => {
          step.updateDataChange({
            length,
            index,
            ...this.data
          });
        });
      }
    }
  }
});