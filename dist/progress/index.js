// miniprogram_npm/lin-ui/progress/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['progress-outclass', 'progress-innerclass', 'progress-textclass'],

  properties: {
    percent: {
      type: Number,
      value: 50,
      observer: function (newVal, oldVal) {
        this.triggerEvent("linchange", {
          newVal,
          oldVal,
        }, {
          bubbles: true
        })
      }
    },
    innerColor: {
      type: String,
      value: "#4164B7"
    },
    outColor: {
      type: String,
      value: "#DEE2E6"
    },
    height: {
      type: String,
      value: "10"
    },
    round: {
      type: Boolean,
      value: false
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    infoRound: {
      type: Boolean,
      value: false
    },
    fontSize: {
      type: String,
      value: "10"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    outWidth: 0,
    percentWidth: 0,
    pianyi: "",
  },

  /**
   * 组件生命周期函数
   */
  lifetimes: {
    ready: function () {
      // 在组件实例进入页面节点树时执行
      this.getWidth("lifetimes")
    },
  },

  observers: {
    "percent": function (newVal) {
      if (newVal > 100) {
        console.error("百分比的值超过100%，请注意！")
      } else if (newVal < 0) {
        console.error("百分比的值小于0%，请注意！")
      } else {
        this.getWidth("observers")
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getWidth(come) {
      const that = this
      const query = this.createSelectorQuery()
      query.select('.l-progress').boundingClientRect()
      query.select('.percent').boundingClientRect()
      query.exec(function (res) {
        if (res[1] != null) {
          const outWidth = res[0].width
          const percentWidth = res[1].width
          const pianyi = (outWidth - percentWidth) * that.data.percent / 100 + 'px';
          console.log(come, outWidth, percentWidth, pianyi)
          that.setData({
            pianyi: 'width:' + pianyi + ';'
          })
        }
      })
    }
  }
})