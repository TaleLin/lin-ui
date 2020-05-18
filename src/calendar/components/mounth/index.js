import { compareDay, getMonthEndDay } from '../../util'
import * as config from '../../config'
Component({
  data: {
    days: []
  },
  properties: {
    minDate: {
      type: [Date,String,null],
      // observer: 'setDays'
    },
    maxDate: {
      type: [Date,String,null],
      // observer: 'setDays'
    },
    date: {
      type: null,
      observer: 'setDays'
    },
    currentDate: {
      type: [null, Array],
      observer: 'setDays'
    },
    type: {
      type: String,
      observer: 'setDays'
    }
  },
  methods: {

    /**
     * 某一天的点击事件
     */
    onClick(event) {
      const { item } = event.currentTarget.dataset;
      if (item.type !== 'disabled' && item.type !== 'empty') {
        this.triggerEvent('clickDay', item)
      }
    },
    /**
     * 设置某月分的天数
     */
    setDays() {
      let days = []
      const startDate = new Date(this.data.date)
      const year = startDate.getFullYear()
      const month = startDate.getMonth()
      const day = new Date(year, month, 1).getDay()

      const totalDay = getMonthEndDay(year, month + 1)

      for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, month, day).getTime();
        const type = this.getDayType(date);

        let config = {
          date,
          type,
          text: day,
          bottomInfo: this.getBottomInfo(type),
          topInfo: ''
        };

        if (this.data.formatter) {
          config = this.data.formatter(config);
        }
        days.push(config);
      }

      for(let i = 0; i < day; i++) {
        days.unshift({
          type: 'empty'
        })
      }

      this.setData({
        days
      })
    },

    isDateInCurrent(date) {
      const { currentDate } = this.data;
      currentDate.some(item => {
        return compareDay(item, date) === 0
      })
    },

    getMultipleDayType(date) {
      const { currentDate } = this.data;
    
      if (!Array.isArray(currentDate)) {
        return '';
      }

      if (this.isDateInCurrent(date)) {
        return 'selected'
      }

      return '';
    },

    getRangeDayType(day) {
      const { currentDate } = this.data;
      if (!Array.isArray(currentDate)) {
        return;
      }

      const [startDay, endDay] = currentDate;

      if (!startDay) {
        return;
      }

      const compareToStart = compareDay(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      const compareToEnd = compareDay(day, endDay);

      if (compareToStart === 0) {
        return 'start';
      }

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
    },

    // date 循环的某一天
    getDayType(date) {
      const { type, minDate, maxDate, currentDate } = this.data

      if (compareDay(date, minDate) < 0 || compareDay(date, maxDate) > 0) {
        return 'disabled';
      }

      if (type === config.TYPE_SINGLE) {
        return compareDay(date, currentDate) === 0 ? 'selected' : '';
      }

      if (type === config.TYPE_MULTIPLE) {
        return this.getMultipleDayType(date);
      }

      if (type === config.TYPE_RANGE) {
        return this.getRangeDayType(date);
      }
    },

    getBottomInfo(type) {
      if (this.data.type === config.TYPE_RANGE) {
        if (type === 'start') {
          return '开始';
        }
        if (type === 'end') {
          return '结束';
        }
        return ''
      }
      return ''
    }
  }
})