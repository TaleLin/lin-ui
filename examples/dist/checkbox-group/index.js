Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['l-class', 'l-error-text', 'l-error-text-class'],
  relations: {
    '../checkbox/index': {
      type: 'child',
      linked(target) {
        this.init(target);
      },
      linkChanged() {
      },
      unlinked() {
        // this.init(target);
      }
    }
  },
  properties: {
    // 选项的排列方式 一行显示 or 多行显示
    placement: {
      type: String,
      value: 'column', //column row
    },
    // 最多选中值
    maxSelected: {
      type: [Number,null],
      value: null
    },
    minSelected: {
      type: [Number,null],
      value: null
    }
  },
  data: {
  },
  attached() {
    let { minSelected, maxSelected} = this.properties;
    this.checkMax(minSelected, maxSelected);
  },
  methods: {

    init(target) {
      if(this._keys === undefined) this._keys = {};
      // if(this._selected === undefined) this._selected = {};
      // this.checkDefaultItem(target);
      this.checkedKeyRepeat(target);
    },

    checkedKeyRepeat(target) {
      let { key } = target.properties;
      if(this._keys[key]) {
        throw new Error(`keys有重复元素, chekbox的key属性不能重复：${key}`);
      } else {
        this._keys[key] = true;
      }
    },

    checkDefaultItem(target) {
      const { key, checked } = target.properties;
      if(checked) {
        this._selected[key] = checked;
      }
    },

    checkMax(min, max) {
      if(min !== null && min < 0) {
        throw new Error('最小选择个数必须大于等于0');
      }
      if(max !== null && max < 0) {
        throw new Error('最多选择个数必须大于0');
      }
      if(max !== null && min !== null && min >= max) {
        throw new Error('最多选择个数必须大于最小选择个数');
      }
    },

    onEmitEventHandle(currentItem) {
      // currentItem.checked ? this.addSelect(currentItem.key):this.removeSelect(currentItem.key);

      this.triggerEvent('linchange', currentItem, {
        bubbles: true,
        composed: true
      });
    },
    onEmitOverflowHandle(data){
      this.triggerEvent('linout', data, {
        bubbles: true,
        composed: true
      });
    },
    removeSelect(key) {
      delete this._selected[key];
    },
    addSelect(key) {
      this._selected[key] = key;
    },
    _selected(){
      const items = this.getRelationNodes('../checkbox/index');
      let num = 0;
      items.map(item=> {
        item.properties.checked ? num++ : '';
      });
      return num;
    }

  }
});
