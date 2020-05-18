import validator from '../behaviors/validator';
import * as config from './config'
import { getDayByOffset, getDate, compareDay } from './util'

Component({
  externalClasses: [
    'l-class'
  ],
  behaviors: [validator],
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: config.TYPE_SINGLE,
      options: [config.TYPE_SINGLE, config.TYPE_MULTIPLE, config.TYPE_RANGE]
    },
    color: {
      type: String,
      value: ''
    },
    defaultDate: {
      type: [String, Number, Date, Array],
      value: '',
      observer() {
        this.setData({ currentDate: this.initCurrentDate() });
      }
    },
    format: {
      type: String,
      value: 'yyyy-MM-dd'
    },
    formatter: {
      type: [Function, null],
      value: null
    },
    minDate: {
      type: [String, Number, null],
      value: Date.now()
    },
    maxDate: {
      type: [String, Number, null],
      value: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 6,
        new Date().getDate()
      ).getTime()
    },
    minSelect: {
      type: [Number, null],
      value: null
    },
    maxSelect: {
      type: [Number, null],
      value: null
    },
    showConfirm: {
      type: Boolean,
      value: true
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    maxLimitMessage: {
      type: String
    },
    minLimitMessage: {
      type: String
    },
    showTitle: {
      type: Boolean,
      value: true
    },
    showSubtitle: {
      type: Boolean,
      value: true
    }
    
  },
  lifetimes: {
    attached() {
      this.setData({
        currentDate: this.initCurrentDate()
      });
    }
  },
  data: {
    currentDate: null,
    types: config
  },
  methods: {
    clickDay(event) {
      const { type, currentDate } = this.data
      const { date } = event.detail
      if(type === config.TYPE_SINGLE) {
        this.setData({
          currentDate: date
        })
      }
      if(type === config.TYPE_MULTIPLE) {
        let _index = null
        const isSelected = currentDate.some((item, index) => {
          const res = compareDay(item, date) === 0
          if(res) {
            _index = index
          }
          return res
        })

        if(isSelected) {
          // 取消选择
          currentDate.splice(_index, 1)
          this.setData({
            currentDate
          })
        } else {
          // 添加
          this.setData({
            currentDate: [...currentDate, date]
          })
        }
      }
    },
    initCurrentDate() {
      const { type, minDate, defaultDate } = this.data

      const defaultDateIsArr = Array.isArray(defaultDate)

      if (type === config.TYPE_SINGLE) {
        if(defaultDateIsArr) {
          return minDate
        }
        return defaultDate || minDate
      }

      if(type === config.TYPE_MULTIPLE) {
        if(defaultDateIsArr) {
          return defaultDate
        }
        return [defaultDate || minDate];
      }

      if(type === config.TYPE_RANGE) {
        if(defaultDateIsArr) {
          const [startDay = minDate, endDay] = defaultDate;
          return [
            startDay,
            endDay || getDayByOffset(getDate(startDay), 1).getTime()
          ]
        }
        return [
          minDate,
          getDayByOffset(getDate(minDate), 1).getTime()
        ]
      }
    }

  }
});
