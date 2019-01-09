Component({
  externalClasses: ['l-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    show:Boolean,
    custom:Boolean,
    line:Boolean,
    color:String,
    type:{
      type:String,
      value:'loading'
    },
    endText:{
      type:String,
      value:'我是有底线的~'
    },
    loadingText:{
      type:String,
      value:'加载中...'
    }
  },

  data: {

  },

  ready: function () {

  },
  methods: {
    onLoadmore(){
      this.triggerEvent('lintap');
      this.triggerEvent('lintapcatch',{},{ bubbles: true });
    }
  }
});
