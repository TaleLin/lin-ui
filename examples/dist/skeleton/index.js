import validator from '../behaviors/validator';

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: [
    'l-class',
    'l-title-class',
    'l-avatar-class',
    'l-row-class'
  ],
  behaviors: [validator],
  properties: {
    loading: {
      type: Boolean,
      value: true
    },
    title: {
      type: Boolean,
      value: true
    },
    paragraph: {
      type: Boolean,
      value: true
    },
    active: {
      type: Boolean,
      value: true
    },
    avatar: Boolean,
    titleWidth: String,
    avatarSize: String,
    avatarShape: {
      type: String,
      value: 'circle',
      options: ['circle', 'square']
    },
    rowsWidth: {
      type: Array,
      optionalTypes: [Array, String],
      value: '60%'
    },
    rowsHeight: {
      type: Array,
      optionalTypes: [Array, String],
      value: '34rpx'
    },
    rows: Number
  },

  observers: {
    'rows,rowsWidth,rowsHeight': function(rows, rowsWidth, rowsHeight) {
      this._getResult(rows, rowsWidth, 'rowsW', '100%');
      this._getResult(rows, rowsHeight, 'rowsH', '34rpx');
      this._toRows(rows);
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _arrRepeat(target, n) {
      const r = [];
      for (let i = 0; i < n-1; i++) {
        r.push(target);
      }
      return r;
    },
    _getResult(rows, rowsPro, key, target) {
      if (Array.isArray(rowsPro)) {
        this.data[key] = rowsPro;
      } else {
        const r = this._arrRepeat(target, rows);
        r.push(rowsPro);
        this.data[key] = r;
      }
    },
    _toRows(rows) {
      let r = [];
      for (let i = 0; i < rows; i++) {
        r.push({
          width: this.data.rowsW[i],
          height: this.data.rowsH[i]
        });
      }
      this.setData({
        r
      });
    }
  }
});