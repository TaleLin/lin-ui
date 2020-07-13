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
      value: 220
    },
    innerDiameter: {
      type: Number,
      value: 170
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
    showValue: {
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
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  /**
   * 组件的初始数据
   */
  data: {
    displayPercent: 0,
  },

  observers: {
    'percent': async function (percent) {
      if (percent > 100) {
        this.setData({
          percent: 100
        });
        return;
      }
      if (percent < 0) {
        this.setData({
          percent: 0
        });
        return;
      }
      if (this.data.active) {
        let displayPercent = this.data.displayPercent;

        if (displayPercent < percent) {
          while (displayPercent < percent) {
            await this.sleep(this.data.duration);
            displayPercent += 1;
            this.setData({
              displayPercent: displayPercent
            });
          }
        } else if (displayPercent > percent) {
          while (displayPercent > percent) {
            await this.sleep(this.data.duration);
            displayPercent -= 1;
            this.setData({
              displayPercent
            });
          }
        }
      } else {
        this.setData({
          displayPercent: percent
        });
      }
    },

    'outerDiameter': function (outerDiameter) {
      if (outerDiameter < this.data.innerDiameter) {
        outerDiameter = this.data.innerDiameter;
        this.setData({
          outerDiameter
        });
      }
    },

    'innerDiameter': function (innerDiameter) {
      if (innerDiameter < 0) {
        this.setData({
          innerDiameter: 0
        });
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sleep(milSec) {
      return new Promise(resolve => {
        setTimeout(resolve, milSec);
      });
    }
  }
});
