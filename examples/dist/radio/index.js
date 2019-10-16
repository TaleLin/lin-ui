Component({
  externalClasses: ['l-class', 'l-disabled-class'],
  behaviors: ['wx://form-field'],
  relations: {
    '../radio-group/index': {
      type: 'parent'
    }
  },
  properties: {
    key: String,
    cell: Object,
    // radio的大小
    size: {
      type: String,
      value: '38rpx'
    },
    disabled: {
      type: Boolean
    },
    custom: Boolean,
    color: {
      type: String,
      value: '#ccc'
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
    placement: {
      type: String,
      value: 'left'
    },
    transition: {
      type: Boolean,
      value: true
    }
  },
  data: {
    checked: false
  },
  methods: {
    setChecked(checked) {
      this.setData({
        checked,
      });
    },
    // 点击radio
    onRadioChangeTap() {
      if (this.properties.disabled) {
        return;
      }
      const parent = this.getRelationNodes('../radio-group/index')[0];
      const noneChecked = parent.properties.noneChecked;
      const isCurrent = this.isCurrentSelectedKey(parent);
      let select = true;
      if (isCurrent) {
        select = false;
        if (!noneChecked) {
          return;
        }
      }
      const checked = !this.data.checked;
      this.data.checked = checked;

      // 子组件不能修改父组件属性
      // parent.properties.current = null
      const item = {
        checked,
        key: this.properties.key,
        cell: this.properties.cell
      };
      if (parent) {
        parent.onEmitEventHandle(item, select);
      }
    },

    isCurrentSelectedKey(parent) {
      const currentKey = parent.properties.current;
      if (currentKey == this.properties.key) {
        return true;
      }
      return false;
    }
  }
});
