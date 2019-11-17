import eventBus from '../utils/eventBus.js'
Component({
  /**
     * 组件的属性列表
     */
  externalClasses: [],
  options: {
    multipleSlots: true,
  },
  relations: {
    '../form-item/index': {
      type: 'child',
      linked: function(target) {
        this._initFormKey(target);
      },
      linkChanged: function() {
      },
      unlinked: function() {
      }
    }
  },

  properties: {
    name: {
      type: String,
      value: ''
    }
  },

  attached() {
    this._init();
    // eventBus.on(`lin-input-blur`, (id) => {
    //   this._validateItem(id)
    // })
  },

  /**
     * 组件的初始数据
     */
  data: {
    _this: null
  },

  /**
     * 组件的方法列表
     */
  methods: {
    _init() {
      // const formName = this.data.name
      // const _wx = this;
      // wx.lin = wx.lin || {};
      // wx.lin.form = wx.lin.form || {}
      // wx.lin.form[formName] = {
      //   _wx,
      //   _page: null
      // }
      wx.lin.initValidateForm = function(_this) {
        return _this;
        // let keys = Object.keys(wx.lin.form)
        // keys.forEach(item => {
        //   wx.lin.form[item]._page = _this
        // })
      }
    },
    _initFormKey(target) {
      this._keys = this._keys || {};
      this._errors = this._errors || {};
      const key = target.properties.name;
      eventBus.on(`lin-input-blur-${key}`, (id) => {
        this._validateItem(id)
      })
      if(this._keys[key]) {
        throw new Error(`表单项存在重复的name：${key}`);
      }
      this._keys[key] = '';
      this._errors[key] = [];
    },

    _validateForm() {
      let _this =  wx.lin.initValidateForm();
      // 校验name的rule
      let formErrors = [];
      let params = this._getValues();
      const items = this.getRelationNodes('../form-item/index');
      items.forEach(item => {
        const id = item.properties.name;
        const formItem = _this.selectComponent(`#${id}`);
        if(formItem) {
          item.validatorData(params);
        } else {
          throw new Error(`表单项不存在name：${id}`);
        }
        // 收集error-text数量
        formErrors = formErrors.concat(item.data.errors);
      });
      return formErrors;
    },

    _validateItem(id) {
      let _this =  wx.lin.initValidateForm();

      let params = this._getValues();

      const items = this.getRelationNodes('../form-item/index');
      const currentTarget =  items.find(item => item.properties.name === id);
      const formItem = _this.selectComponent(`#${id}`);
      if(formItem) {
        currentTarget.validatorData(params);
      } else {
        throw new Error(`表单项不存在name：${id}`);
      }
      return currentTarget.data.errors;
    },

    _getValues() {
      let params = {};
      let _this =  wx.lin.initValidateForm();
      const items = this.getRelationNodes('../form-item/index');
      items.forEach(item => {
        const _id = item.properties.name;
        const formItem = _this.selectComponent(`#${_id}`);
        if(formItem) {
          params[_id] = formItem.getValues();
        }
      });
      return params
    },

    submit() {
      let errors = this._validateForm();
      // wx.lin.validateForm()
      this.triggerEvent('linsubmit', {
        values: this._getValues(),
        errors,
        isValidate: errors.length === 0
      });
    }
  }
});
