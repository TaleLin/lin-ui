import dataUtil from '../core/utils/data-util';

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
    isHover: true
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
    ready() {
      const parent = this.getRelationNodes('../grid/index')[0];
      if(parent) {
        dataUtil.setDiffData(this, { isHover: parent.data.isHover });
      }
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
