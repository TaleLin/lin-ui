Component({
  externalClasses: ['l-class'],
  properties: {
    color: String,
    show: Boolean,
    type: {
      type: String,
      value: 'flash'
    },
    // 自定义
    custom: Boolean,
    size: {
      type: String,
      value: 'default',
    },
  },
  methods: {
  }
});