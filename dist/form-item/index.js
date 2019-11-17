import rules from '../behaviors/rules';

Component({
  /**
     * 组件的属性列表
     */
  externalClasses: ['l-require-class'],
  behaviors: [rules],
  relations: {
    '../form/index': {
      type: 'parent',
      linked: function() {
      },
      linkChanged: function() {
      },
      unlinked: function() {
      }
    }
  },
  properties: {
    label: String,
    labelPlacement: {
      type: String,
      value: 'row'
    },
    labelRowAlign: {
      type: String,
      value: 'left'
    },
    labelColumnAlign: {
      type: String,
      value: 'top'
    },
    labelWidth: {
      type: String,
      value: '120rpx'
    },
    required: {
      type: Boolean,
      value: false
    },
    // rules: {
    //   type: Array,
    //   value: []
    // },
    name: {
      type: String,
      value: ''
    },
  },

  /**
     * 组件的初始数据
     */
  data: {

  },
  attached(){
    this.initRules();
  },

  /**
     * 组件的方法列表
     */
  methods: {

  }
});
