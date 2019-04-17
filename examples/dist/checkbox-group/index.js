import rules from '../behaviors/rules';

Component({
  behaviors: ['wx://form-field', rules],
  externalClasses: ['l-class', 'l-error-text'],
  relations: {
    '../checkbox/index': {
      type: 'child',
      linked() {
        this.onChangeHandle();
      },
      linkChanged() {
        this.onChangeHandle();
      },
      unlinked() {
        this.onChangeHandle();
      }
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
  },
  attached() {
    this.initRules()
  },

  methods: {
    // checkbox change
    onChangeHandle(val = this.data.current) {
      let items = this.getRelationNodes('../checkbox/index');
      const len = items.length;
      if (len) {
        items.forEach(item => {
          let type = val.indexOf(item.data.value) !== -1
          item.onChangeHandle(type);
        });
      }
    },

    onChangeChild(current) {

      const index = this.data.current.indexOf(current.value)
      index === -1 ? this.data.list.push(current) : this.data.list.splice(index, 1);

      this.setData({
        value: this.data.list
      }, () => {
        this.validatorData({
          value: this.data.value
        })
      })
    },
    onEmitEventHandle(current) {
      const index = this.data.current.indexOf(current.value)
      index === -1 ? this.data.current.push(current.value) : this.data.current.splice(index, 1);
      index === -1 ? this.data.list.push(current) : this.data.list.splice(index, 1);
      this.setData({
        current: this.data.current,
        value: this.data.list
      }, () => {
        this.validatorData({
          value: this.data.value
        })
      })
      const all = JSON.parse(JSON.stringify(this.data.list))
      delete all.all
      current.all = all

      this.triggerEvent('linchange', current)
    }
  }
});