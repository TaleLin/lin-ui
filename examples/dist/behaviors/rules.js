import Schema from '../common/async-validator/index';
/**
 * @param tipType String [toast , message , text]
 */
// eslint-disable-next-line no-undef
export default Behavior({
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
    },
    errorText: '',
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
    validatorData({
      value
    }) {
      const {
        rules,
        tipType,
        tipFun,
        tipContent
      } = this.data;

      if (!rules) return;
      const validateValue = {
        [this.data.name]: value
      };
      this.data.schema.validate(validateValue, (errors) => {

        this.triggerEvent('linvalidate', {
          errors,
          isError: !!errors
        });

        if (errors && tipType) {
          const funName = tipFun[tipType];
          const contentName = tipContent[tipType];
          if (tipType === 'text') {
            this.setData({
              errorText: errors[0].message
            });
            return;
          }

          if (!wx.lin || !wx.lin[funName]) {
            wx.showToast({
              icon: 'none',
              title: `请在页面内引入${tipType}组件`
            });
            return;
          }

          wx.lin[funName] && wx.lin[funName]({
            [contentName]: errors[0].message,
            duration: 1500,
            mask: false,
          });
        } else if (!errors && tipType) {
          this.setData({
            errorText: ''
          });
        }

      });

    }
  }
});