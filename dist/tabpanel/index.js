// components/tab/index.js
Component({
  externalClasses: ['v-tab-active', 'tab-default'],
  relations: {
    '../tabs/index': {
      type: 'parent'
    },
    '../combined-tabs/index': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tab: String,
    subTab:String,
    subKey:String,
    key: String,
    icon:String,
    iconStyle:String,
    image:Object,
    picPlacement:{
      type:String,
      value:'top'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCurrent: false,
    index:0,
  },
})