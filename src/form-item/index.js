import rules from '../behaviors/rules';

Component({
  /**
     * 组件的属性列表
     */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['l-form-item-class', 'l-form-label-class', 'l-form-content-class', 'l-error-text-class'],
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
    // 描述文字
    label: String,
    // 文字区域的位置
    labelPlacement: {
      type: String,
      value: 'row'
    },
    // 对齐方式
    alignItems: {
      type: String,
      value: 'start'
    },
    // label宽度
    labelWidth: {
      type: String,
      value: 'auto'
    },
    labelSlot: {
      type: Boolean,
      value: false
    },
    // required: {
    //   type: Boolean,
    //   value: false
    // },
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
    isRequired: false
  },
  attached(){
    this.initRules();
    this.isRequired();
  },

  /**
     * 组件的方法列表
     */
  methods: {
    isRequired() {
      this.data.rules.forEach(item => {
        if(item.required) {
          this.setData({
            isRequired: true
          });
        }
      });
    }
  }
});
