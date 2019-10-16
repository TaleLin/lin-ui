Component({
  externalClasses: ['l-class', 'l-error-text', 'l-error-text-class'],
  behaviors: ['wx://form-field'],
  relations: {
    '../radio/index': {
      type: 'child',
      linked() {
        // const currentLength = this.add();
        // if (currentLength === this.properties.length) {
        this.init();
        // }
      },
      linkChanged() {
      },
      unlinked() {
        this.init();
      }
    }
  },
  properties: {
    current: {
      type: String
    },
    noneChecked: {
      type: Boolean,
      value: true
    },
    placement: {
      type: String,
      value: 'column', //column row
    },
  },
  data: {
    currentLength: 0
  },

  methods: {
    // add() {
    //   if (this.properties.length <= 0) {
    //     throw new Error('为提高性能，请主动设置radio-group的length属性');
    //   }
    //   return this.data.currentLength += 1;
    // },
    // reduce() {
    //   this.length -= 1;
    //   return this.data.currentLength -= 1;
    // },

    checkedKeyRepeat(items) {
      let keys = items.map(item => {
        return item.data.key;
      });
      const repeat = this.isRepeat(keys);
      if (repeat !== false) {
        throw new Error(`keys有重复元素, radio的key属性不能重复：${repeat}`);
      }
    },

    isRepeat(arr) {
      let hash = {};
      for (let i in arr) {
        if (hash[arr[i]]) //hash 哈希
          return arr[i];
        hash[arr[i]] = true;
      }
      return false;
    },

    init() {
      const items = this.getRelationNodes('../radio/index');
      this.checkedKeyRepeat(items);
      this.onChangeHandle(items);
    },

    onChangeHandle(items) {
      items.forEach((item) => {
        let checked = this.properties.current == item.data.key;
        item.setChecked(checked, item.data.key);
      });
    },

    onEmitEventHandle(currentItem, select) {
      this.properties.current = select?currentItem.key:null;
      const items = this.getRelationNodes('../radio/index');
      this.onChangeHandle(items);
      // currentItem.currentKey = this.properties.current
      Object.assign(currentItem, {
        currentKey: this.properties.current
      });
      this.triggerEvent('linchange', currentItem, {
        bubbles: true,
        composed: true
      });
    }
  },
  observers: {
    'current': function() {
      this.init();
    }
  }
});
