// slide-view/slide-view.js
const _windowWidth = wx.getSystemInfoSync().windowWidth;
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
  },
  properties: {
    // 组件显示区域的宽度
    width: {
      type: Number,
      value: _windowWidth
    },
    // 组件显示区域的高度
    height: {
      type: Number,
      value: 100,
    },
    // 组件滑动显示区域的宽度
    slideWidth: {
      type: Number,
      value: 0
    },
    // 阈值
    threshold: {
      type: Number,
      value: 0
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 自动关闭
    autoClose: {
      type: Boolean,
      value: false
    },
    // 主动关闭
    close: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        if (newVal) {
          this.setData({
            popup: false,
            x: 0
          });
          this.onCloseTap();
        } 
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    viewWidth: _windowWidth,
    //  movable-view偏移量
    x: 0,
    //  movable-view是否可以出界
    out: false,
  },

  /**
   * 组件的方法列表
   */
  ready() {
    this.updateRight();
  },
  methods: {
    updateRight() {

      // 获取右侧滑动显示区域的宽度
      const that = this; 
      const query = wx.createSelectorQuery().in(this);
      query.select('.right').boundingClientRect(function (res) {
        that._slideWidth = res.width;
        let width = res.width <=50 ? res.width : 50;
        that._threshold = that.properties.threshold ? that.properties.threshold : width;
        that._viewWidth = that.data.width + res.width * (750 / _windowWidth);
        that.setData({
          viewWidth: that._viewWidth
        });
      }).exec();
    },
    onTouchStart(e) {
      this._startX = e.changedTouches[0].pageX;
    },
    //  当滑动范围超过阈值自动完成剩余滑动
    onTouchEnd(e) {
      if (this.properties.disabled) return;

      this._endX = e.changedTouches[0].pageX;
      this._length = this._endX - this._startX;

      const {
        _endX,
        _startX,
        _threshold
      } = this;

      if (this._length > _threshold) {
        this.setData({
          popup: false,
          x: 0,
        });
        this.onCloseTap();

      }
      if (_endX > _startX && this.data.out === false) return;
      if (_startX - _endX >= _threshold) {
        this.setData({
          x: -this._slideWidth,
          popup: true,
          close: false
        });
        this.onOpenTap();
      } else if (_startX - _endX < _threshold && _startX - _endX > 0 && this.data.popup != true) {
        this.setData({
          x: 0
        });
        this.onCloseTap();

      } else if (_endX - _startX >= _threshold) {
        this.setData({
          x: 0
        });
        this.onCloseTap();

      } else if (_endX - _startX < _threshold && _endX - _startX > 0) {
        this.setData({
          x: -this._slideWidth,
          close: false
        });
        this.onOpenTap();

      }
    },
    //  根据滑动的范围设定是否允许movable-view出界
    onChange(e) {
      if (!this.data.out && e.detail.x < -this._threshold) {
        this.setData({
          out: true
        });
      } else if (this.data.out && e.detail.x >= -this._threshold) {
        this.setData({
          out: false
        });
      }
    },

    // 点击 右边区域
    onRightTap() {
      let detail = 'click right';
      let option = { bubbles: true, composed: true };
      if (this.properties.autoClose) {
        this.setData({
          popup: false,
          x: 0
        });
        this.onCloseTap();
      }

      this.triggerEvent('lintap', detail, option);
    },

    // 打开后触发
    onOpenTap() {
      let detail = true;
      let option = { bubbles: true, composed: true };

      this.triggerEvent('slideopen', detail, option);
    },

    // 关闭后触发
    onCloseTap() {
      let detail = false;
      let option = { bubbles: true, composed: true };

      this.triggerEvent('slideclose', detail, option);
    }
  }
});