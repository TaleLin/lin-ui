// components/tab/index.js
Component({
  externalClasses: ["v-tab-active", "tab-default"],
  relations: {
    "../tabs/index": {
      type: "parent",
      linked: function(target) {
        !this.data.parent && this.setData({
          parent: target
        });
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      }
    },
    "../combined-tabs/index": {
      type: "parent",
      linked: function(target) {
        !this.data.parent && this.setData({
          parent: target
        });
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tab: String,
    subTab: String,
    subKey: String,
    key: String,
    icon: String,
    iconStyle: String,
    image: Object,
    picPlacement: {
      type: String,
      value: "top"
    }
  },

  observers: {
    "**": function(filed) {
      this.updateData(filed);
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isCurrent: false,
    index: 0,
    parent: null
  },

  methods: {
    updateData(filed) {
      let parent = this.data.parent;
      if (!parent) return;
      parent.initTabs()
    }
  }
});
