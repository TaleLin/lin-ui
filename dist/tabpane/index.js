// components/tabs/index.js
Component({
  externalClasses: ['v-class'],
  relations: {
    '../tabpanel/index': {
      type: 'child',
      linked: function(target) {
        this.changeCurrent();
      },
      linkChanged: function(target) {
        this.changeCurrent();
       
      },
      unlinked: function(target) {
        this.changeCurrent();
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    }
  },

  attached(){
    this.changeCurrent(this.data.current)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(val = this.data.current) {
      let items = this.getRelationNodes('../tabpanel/index');
      items.length > 0 && items.forEach((item) => {
        item.changeCurrent(item.data.key === val)
      })
    },
    handleChange(currentKey) {
      this.setData({
        current: currentKey
      })
      this.triggerEvent('change', {
        current: this.data.current
      })

    },
  }
})