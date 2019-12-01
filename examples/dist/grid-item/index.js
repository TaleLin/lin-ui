Component({
  relations: {
    '../grid/index': {
      type: 'parent'
    },
  },
  externalClasses: ['l-grid-item', 'l-grid-item-class'],
  properties: {
    key: String,
    cell:{
      type:Object,
      value:{}
    },
  },
  data: {
    index:0,
  },
  attached() {

  },
  observers: {
    'key': function() {
      const parent = this.getRelationNodes('../grid/index')[0];
      if (parent) {
        parent.setData({
          gridItems: [],
          childNum: 0
        });
        parent.initGrids();
      }
    }
  },

  lifetimes: {
    show() {

    },
  },
  methods: {
    tapGridItem() {
      this.triggerEvent('linitemtap', {
        ...this.data
      }, { bubbles: true, composed: true });
    },
  }
});
