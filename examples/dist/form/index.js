import eventBus from '../core/utils/event-bus.js';
import eventUtil from '../core/utils/event-util';
Component({
  /**
     * 组件的属性列表
     */
  externalClasses: ['l-form-container-class', 'l-form-submit-class', 'l-form-reset-class', 'l-form-btn-class'],
  options: {
    multipleSlots: true,
  },
  relations: {
    '../form-item/index': {
      type: 'child',
      linked: function (target) {
        this._initItem(target);
      },
      linkChanged: function () {
      },
      unlinked: function () {
      }
    }
  },

  properties: {
    name: {
      type: String,
      value: ''
    },
    isSubmitValidate: {
      type: Boolean,
      value: true
    }
  },

  attached() {
    this._init();
  },
  detached() {
    for (let key in this._keys) {
      if (Object.prototype.hasOwnProperty.call(this._keys, key)) {
        eventBus.off(`lin-form-blur-${key}`);
        eventBus.off(`lin-form-change-${key}`);
      }
    }
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
      wx.lin = wx.lin || {};
      wx.lin.forms = wx.lin.forms || {};
      wx.lin.forms[this.properties.name] = this;
      wx.lin.initValidateForm = (_this) => {
        wx.lin._instantiation = _this;
      };
      wx.lin.submitForm = function (name) {
        wx.lin.forms[name].submit();
      };
      wx.lin.resetForm = function (name) {
        wx.lin.forms[name].reset();
      };

    },

    _initItem(target) {
      this._keys = this._keys || {};
      this._errors = this._errors || {};
      const key = target.properties.name;
      eventBus.on(`lin-form-blur-${key}`, (id) => {
        this._validateItem(id, 'blur');
        // clearTimeout(this.blur_time)
        // this.blur_time = setTimeout(()=>{
        //   this._validateItem(id, 'blur');
        // }, 200)
      });
      eventBus.on(`lin-form-change-${key}`, (id) => {
        clearTimeout(this.change_time);
        this.change_time = setTimeout(() => {
          this._validateItem(id, 'change');
        }, 200);
      });
      if (this._keys[key]) {
        throw new Error(`表单项存在重复的name：${key}`);
      }
      this._keys[key] = '';
      this._errors[key] = [];
    },

    _validateItem(id, type) {
      let _this = wx.lin._instantiation;

      let params = this._getValues();

      const items = this.getRelationNodes('../form-item/index');
      const currentTarget = items.find(item => item.properties.name === id);
      const formItem = _this.selectComponent(`#${id}`);
      if (formItem) {
        currentTarget.validatorData(params, type);
      } else {
        throw new Error(`表单项不存在name：${id}`);
      }
      this._errors[id] = currentTarget.data.errors;
      return currentTarget.data.errors;
    },

    _forEachNodes(func, isReverse) {
      let items = this.getRelationNodes('../form-item/index');
      if (isReverse) {
        items.reverse();
      }
      items.forEach((item, index) => {
        func(item, index);
      });
    },

    _validateForm() {
      let _this = wx.lin._instantiation;
      // 校验name的rule
      let formErrors = [];
      let params = this._getValues();
      this._forEachNodes(item => {
        const id = item.properties.name;
        const formItem = _this.selectComponent(`#${id}`);
        if (formItem) {
          item.validatorData(params);
        } else {
          throw new Error(`表单项不存在name：${id}`);
        }
        this._errors[id] = item.data.errors;
        formErrors = formErrors.concat(item.data.errors);
      }, true);
      return formErrors;
    },

    _getValues() {
      let params = {};
      let _this = wx.lin._instantiation;

      this._forEachNodes(item => {
        const _id = item.properties.name;
        const formItem = _this.selectComponent(`#${_id}`);
        if (formItem) {
          params[_id] = formItem.getValues();
        }
      });
      return params;
    },

    submit() {
      let errors = this.data.isSubmitValidate ? this._validateForm() : [];
      this.triggerEvent('linsubmit', {
        values: this._getValues(),
        errors: this.data.isSubmitValidate ? this._errors : {},
        isValidate: errors.length === 0
      });
    },
    reset() {
      let _this = wx.lin._instantiation;
      this._forEachNodes((item) => {
        item.setData({
          errorText: ''
        });
        const _id = item.properties.name;
        const formItem = _this.selectComponent(`#${_id}`);
        if (formItem) {
          formItem.reset();
        }
      });
      eventUtil.emit(this, 'linreset');
    }
  }
});
