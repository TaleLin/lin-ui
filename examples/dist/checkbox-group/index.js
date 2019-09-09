import rules from '../behaviors/rules';

Component({
  behaviors: ['wx://form-field', rules],
  externalClasses: ['l-class', 'l-error-text', 'l-error-text-class'],
  relations: {
    '../checkbox/index': {
      type: 'child',
      // linked() {
      //   this.onChangeHandle();
      // },
      // linkChanged() {
      //   this.onChangeHandle();
      // },
      // unlinked() {
      //   this.onChangeHandle();
      // }
    }
  },
  properties: {
    current: {
      type: Array,
      value: [],
      observer: 'onChangeHandle'
    },
    placement: {
      type: String,
      value: 'column', //column row
    },
  },
  data: {
    value: [],
    list: [],
    length: null
  },
  attached() {
    this.initRules();
  },
  ready() {
    const len = this.items().length;
    this.data.length = len;
    this.setData({
      length: len
    });
    this.onChangeHandle();

  },
  methods: {
    items() {
      let items = this.getRelationNodes('../checkbox/index');
      return items;
    },
    // checkbox change
    onChangeHandle(val = this.data.current) {
      let items = this.getRelationNodes('../checkbox/index');
      const len = items.length;
      if (len === this.data.length) {
        items.forEach(item => {
          let type = val.indexOf(item.data.value) !== -1;
          item.onChangeHandle(type, 'init');
        });
      }
    },
    currentChange(val) {

      // const index = this.data.current.indexOf(val.value)
      this.data.list.push(val);
      this.setData({
        value: this.data.list
      });
    },

    onEmitEventHandle(current) {

      const index = this.data.current.indexOf(current.value);
      index === -1 ? this.data.current.push(current.value) : this.data.current.splice(index, 1);
      index === -1 ? this.data.list.push(current) : this.data.list.splice(index, 1);
      this.setData({
        current: this.data.current
      }, () => {
        this.validatorData({
          value: this.data.value
        });
      });

      const all = JSON.parse(JSON.stringify(this.data.list));
      for (let i = 0; i < all.length; i++) {
        delete all[i].all;
      }
      current.all = all;
      this.setData({
        value: all
      });
      this.triggerEvent('linchange', current);
    }
  }
});