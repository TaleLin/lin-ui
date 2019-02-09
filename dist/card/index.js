Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-img-class'],
  properties: {
    image: String,
    title: String,
    describe: String,
    plaintext: Boolean,
    full: Boolean,
    position:{
      type:String,
      value:'left'
    },
    type: {
      type: String,
      value: 'primary'
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

  }
})