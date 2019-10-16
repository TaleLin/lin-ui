Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['l-class', 'l-disabled-class'],
  relations: {
    '../checkbox-group/index': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  properties: {
    // checkbox 按钮的位置
    placement: {
      type: String,
      value: 'left'
    },
    //  是否自定义图标内容
    custom: {
      type: Boolean,
      value: false
    },
    key: {
      type: String,
      value: ''
    },
    cell: {
      type: Object,
      value: {}
    },
    // checkbox的大小
    size: {
      type: String,
      value: '38rpx'
    },
    // 不可选状态
    disabled: {
      type: Boolean,
      value: false
    },
    //  选中后的颜色
    selectColor: {
      type: String,
      value: '#3963BC'
    },
    disabledColor: {
      type: String,
      value: '#ccc'
    },
    color: {
      type: String,
      value: '#ccc'
    },
    checked: {
      type: Boolean,
      value: false
    }
  },
  data: {
    parentPlacement: ''
  },
  ready() {
    const parent = this.getRelationNodes('../checkbox-group/index')[0];
    let {placement:parentPlacement} = parent.properties;
    this.setData({parentPlacement});
  },
  methods: {
    // 点击checkbox
    onCheckboxChangeTap() {
      if (this.properties.disabled || this.data.parentDisabled) {
        return;
      }

      const parent = this.getRelationNodes('../checkbox-group/index')[0];

      if(this.properties.checked) {
        if(this.isOverflow('minSelected')) return;
      } else {
        if(this.isOverflow('maxSelected')) return;
      }

      const item = {
        checked: !this.properties.checked,
        key: this.properties.key,
        cell: this.properties.cell
      };
      if (parent) {
        parent.onEmitEventHandle(item);
      }
    },

    /**
     *
     * @param {*} type (max/min)
     */
    isOverflow(type) {
      const parent = this.getRelationNodes('../checkbox-group/index')[0];

      const limit = parent.properties[type];
      if (!limit) return false;
      const selectedLength = Object.values(parent._selected).length;
      let isOverflow = type === 'minSelected' ? selectedLength <= limit : selectedLength >= limit;
      if (isOverflow) {
        let backType = type === 'minSelected' ? 'min_selected' : 'max_selected';
        parent.onEmitOverflowHandle && parent.onEmitOverflowHandle({key: this.properties.key, limitNumber: limit, type: `overflow_${backType}`});
      }
      return isOverflow;
    }
  }
});
