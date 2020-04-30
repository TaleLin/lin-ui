// components/progress/index.js
import {
  px2rpx
} from '../utils/util.js';
import validator from '../behaviors/validator';
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-text-class', 'l-active-class', 'l-background-class'],
  behaviors: [validator],
  properties: {
    percent: {
      type: Number,
      value: 0,
    },
    strokeWidth: {
      type: Number,
      value: 12
    },
    borderRadius: {
      type: Number,
      value: 6,
    },
    activeColor: {
      type: String,
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB',
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    textPosition: {
      type: String,
      value: 'right',
      options: ['left', 'right']
    },
    textColor: {
      type: String,
    },
    interval: {
      type: Number,
      value: 20,
    },
    active: {
      type: Boolean,
      value: false
    },
    duration: {
      type: Number,
      value: 30
    }
  },

  options: {
    multipleSlots: true,
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  /**
   * 组件的初始数据
   */
  data: {
    _slotWidth: 0,
    _slotHeight: 0,
    _progressWidth: 0,
    _progressHeight: 0,
    _marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    _useSlot: false,
  },

  observers: {
    '_slotWidth, _slotHeight, _progressWidth, _progressHeight, percent,_useSlot': function (_slotWidth, _slotHeight, _progressWidth, _progressHeight, percent, _useSlot) {
      if (_useSlot) {
        const marginTop = -(_slotHeight - _progressHeight) / 2;
        const marginLeft = (_progressWidth - _slotWidth) * percent / 100;
        this.setData({
          marginTop,
          marginLeft
        });
      }
    }
  },

  lifetimes: {
    attached() {
      if (this.data.percent > 100) {
        this.setData({
          percent: 100
        });
      }

      const querySlot = wx.createSelectorQuery().in(this);
      querySlot.select('.slot').boundingClientRect(res => {
        let _useSlot = this.data._useSlot;
        if (res.width) {
          _useSlot = true;
        }
        this.setData({
          _useSlot,
          _slotWidth: px2rpx(res.width),
          _slotHeight: px2rpx(res.height)
        });
      }).exec();
      const queryProgress = wx.createSelectorQuery().in(this);
      queryProgress.select('.progress').boundingClientRect(res => {
        this.setData({
          _progressHeight: px2rpx(res.height),
          _progressWidth: px2rpx(res.width)
        });
      }).exec();

      const percent = this.data.percent;
      let now = 0;
      if (this.data.active) {
        setInterval(() => {
          if (now < percent) {
            now += 1;
            this.setData({
              percent: now
            });
          }
        }, this.data.duration);
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {}
});