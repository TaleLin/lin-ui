Component({
  externalClasses: ['l-class','l-error-text'],
  behaviors: ['wx://form-field'],
  relations: {
    '../radio/index': {
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
      type: String,
      value: '',
      observer: 'onChangeHandle'
    },
    placement: {
      type: String,
      value: 'column', //column row
    },
  },
  methods: {
    // radio change
    onChangeHandle(val = this.data.current) {
      let items = this.getRelationNodes('../radio/index');
      const len = items.length;
      if (len) {
        items.forEach(item => {
          let type = val === item.data.value
          item.onChangeHandle(type);
        });
      }
    },
    onEmitEventHandle(current) {
      this.setData({
        value: current.value
      })
      this.triggerEvent('linchange', current);
    }
  }
});