import Schema from '../common/async-validator/index';

module.exports = Behavior({
  behaviors: [],
  properties: {
    // 校验
    rules: {
      type: Object,
    },
    tipType: {
      type: String,
      value: ''
    }
  },
  data: {
    schema: '',
    tipFun: {
      'message': 'showMessage',
      'toast': 'showToast',
    },
    tipContent: {
      'message': 'content',
      'toast': 'title',
    }

  },

  methods: {
    initRules() {
      const rulesName = this.data.name;
      const {
        rules
      } = this.data;
      if (!rules) return;
      const schema = new Schema({
        [rulesName]: this.data.rules,
      });
      this.setData({
        schema,
      });
    },
    validatorData({value}) {
      const {
        rules,
        tipType,
        tipFun,
        tipContent
      } = this.data;
      const funName = tipFun[tipType];
      const contentName = tipContent[tipType];
      if (!rules) return;
      const validateValue = {
        [this.data.name]: value
      };
      this.data.schema.validate(validateValue, (errors, fields) => {
        errors && wx.lin[funName] && wx.lin[funName]({
          [contentName]: errors[0].message,
          duration: 1500,
          mask: false,
        });

        console.log(errors)

        this.triggerEvent('linvalidate', {
          errors,
          isError: !!errors
        });
      });

    }
  }
})