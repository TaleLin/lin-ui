import rules from '../behaviors/rules';

Component({
  behaviors: ['wx://form-field',rules],
  externalClasses: ['l-class','l-error-text'],
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
  attached() {
    this.initRules();
  },

  methods: {
    // checkbox change
    onChangeHandle(val = this.data.current) {
    },
    onEmitEventHandle(current) {
      const index = this.data.current.indexOf(current.value);
      index === -1 ? this.data.current.push(current.value) : this.data.current.splice(index, 1);
      this.setData({
        current: this.data.current,
        value: this.data.current
      },()=>{
        this.validatorData({value:this.data.value});
      });  
      this.triggerEvent('linchange', current);
    }
  }
});