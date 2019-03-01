Component({
  externalClasses: ['l-class', 'l-symbol-class', 'l-count-class'],
  properties: {
    count: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 10
    },
    min: {
      type: Number,
      value: 1
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: Boolean
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
    doNothing() {

    },

    reduceTap() {
      let distance = this.data.count - this.properties.step
      if (distance <= this.properties.min) {
        this.data.count = this.properties.min
      } else {
        this.data.count -= this.properties.step
      }
      this.setData({
        count: this.data.count
      })
      let detail = {
        count: this.data.count,
        type: 'reduce'
      }
      this.triggerEvent('lintap', detail)
    },

    addTap() {
      let distance = this.data.count + this.properties.step;
      if (distance >= this.properties.max) {
        this.data.count = this.properties.max
      } else {
        this.data.count += this.properties.step;
      }
      this.setData({
        count: this.data.count
      })
      let detail = {
        count: this.data.count,
        type: 'add'
      }
      this.triggerEvent('lintap', detail)
    },
  }
})