// miniprogram_npm/lin-ui/circle/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-value-class'],
  properties: {
    percent: {
      type: Number,
      value: 0
    },
    outerDiameter: {
      type: Number,
      value: 100
    },
    innerDiameter: {
      type: Number,
      value: 90
    },
    activeColor: {
      type: String
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB',
    },
    innerColor: {
      type: String,
      value: '#FFFFFF',
    },
    active: {
      type: Boolean,
      value: false
    },
    duration: {
      type: Number,
      value: 30
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    valueColor: {
      type: String,
    },
    valueSize: {
      type: Number,
      value: 25
    }
  },

  options: {
    multipleSlots: true,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached() {
      if (this.data.percent > 100) {
        this.setData({
          percent: 100
        });
      }

      const percent = this.data.percent;
      let now = 0;
      if (this.data.active) {
        setInterval(() => {
          if (now < percent) {
            now += 1;
            this.setData({
              percent: now
            });
          }
        }, this.data.duration);
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
