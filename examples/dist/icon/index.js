Component({
  externalClasses: ['l-class'],
  options: {
    addGlobalClass: true
  },
  properties: {
    name: String,
    color: {
      type: String,
      value: '#3963bc'
    },
    size: {
      type: String,
      value: '40'
    },
  },

  ready: function () {
    if (!this.properties.name) {
      console.error('请传入Icon组件的name属性');
    }
  },
  methods: {
  }
});
