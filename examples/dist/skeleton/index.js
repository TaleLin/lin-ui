Component({
  /**
   * 组件的属性列表
   */
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
      value: 'circle'
    },
    rowsWidth: {
      type: Array,
      optionalTypes: [Array, String]
    },
    rowsHeight: {
      type: Array,
      optionalTypes: [Array, String]
    },
    rows: {
      type: Number,
      value: 3
    }
  },

  attached() {
    this.setData({
      rowsHeight: ['34rpx', '34rpx', '34rpx'],
      rowsWidth: ['100%', '100%', '60%'],
      rows: 3
    });
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
      for (let i = 0; i < n; i++) {
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