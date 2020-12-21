import eventBus from '../core/utils/event-bus.js';
import validator from '../behaviors/validator';
import rules from '../behaviors/rules';
import * as config from './config';
import formatFlags from './dete';

import { getDayByOffset, getDate, compareDay, calcDateNum, copyDates, getTime, formatMonthTitle, compareMonth, getMonths } from './util';

Component({
  externalClasses: [
    'l-class'
  ],
  behaviors: ['wx://form-field', validator, rules],
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer(val) {
        if (val) {
          this.initRect();
          this.scrollIntoView();
        }
      }
    },
    type: {
      type: String,
      value: config.TYPE_SINGLE,
      options: [config.TYPE_SINGLE, config.TYPE_MULTIPLE, config.TYPE_RANGE],
      observer() {
        this.setData({ currentDate: this.initCurrentDate() });
      }
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
      value: 'timestamp'
      // value: 'yyyy-MM-dd',
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
    allowSameDay: Boolean,
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
    },
    title: {
      type: String,
      value: '日期选择'
    }

  },
  lifetimes: {
    attached() {
      this.setData({
        currentDate: this.initCurrentDate()
      });
    },
    ready() {
      if (this.data.show) {
        this.initRect();
        this.scrollIntoView();
      }
    }
  },
  data: {
    currentDate: null,
    types: config,
    subTitle: '',
    scrollIntoViewIndex: ''
  },
  methods: {
    clickDay(event) {
      const { type, currentDate, maxLimitMessage, maxSelect, allowSameDay } = this.data;
      const { date } = event.detail;
      if(type === config.TYPE_SINGLE) {
        this.setData({
          currentDate: getTime(date)
        });
        this.triggerEvent('linclickday', copyDates(date));
        this.triggerEvent('linselect', copyDates(date));
      }
      if(type === config.TYPE_MULTIPLE) {
        let _index = null;
        const isSelected = currentDate.some((item, index) => {
          const res = compareDay(item, date) === 0;
          if(res) {
            _index = index;
          }
          return res;
        });

        if(isSelected) {
          // 取消选择
          currentDate.splice(_index, 1);
          this.setData({
            currentDate: getTime(currentDate)
          });
          this.triggerEvent('linunselect', copyDates(currentDate));
        } else {
          if(maxSelect && currentDate.length >= maxSelect) {
            wx.lin.showToast({
              title: maxLimitMessage || `选择天数不能超过 ${ maxSelect } 天`
            });
            this.triggerEvent('linclickday', copyDates(date));
            return;
          }
          // 添加
          this.setData({
            currentDate: getTime([...currentDate, date])
          });
          this.triggerEvent('linselect', copyDates([...currentDate, date]));
        }
        this.triggerEvent('linclickday', copyDates(date));
      }

      if(type === config.TYPE_RANGE) {
        const [startDay, endDay] = currentDate;
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);
          if (compareToStart === 1) {
            if(this.checkSelectRange([startDay, date])) {
              this.setData({
                currentDate: getTime([startDay, date])
              });
              this.triggerEvent('linselect', copyDates([startDay, date]));
            }
          }
          else if (compareToStart === -1) {
            // 选择结束日期在开始日期之前 重新开始选择
            this.setData({
              currentDate: getTime([date, null])
            });
          } else if(allowSameDay){
            this.setData({
              currentDate: getTime([date, date])
            });
          }
        }
        else {
          // 重新开始选择
          this.setData({
            currentDate: getTime([date, null])
          });
        }
      }
    },

    checkSelectRange(date) {
      const { maxSelect, maxLimitMessage, minSelect, minLimitMessage } = this.data;
      if (maxSelect && calcDateNum(date) > maxSelect) {

        wx.lin.showToast({
          title: maxLimitMessage || `选择天数不能超过 ${ maxSelect } 天`
        });
        return false;
      }

      if (minSelect && calcDateNum(date) < minSelect) {
        wx.lin.showToast({
          title: minLimitMessage || `选择天数不能少于 ${ minSelect } 天`
        });
        return false;
      }

      return true;
    },

    initCurrentDate() {

      const { type, minDate, defaultDate, maxDate } = this.data;
      const defaultDateIsArr = Array.isArray(defaultDate);

      if (type === config.TYPE_SINGLE) {
        if(!defaultDate) {
          return minDate;
        }
        if(defaultDateIsArr) {
          return minDate;
        }
        if(compareDay(defaultDate, minDate) === -1) {
          return minDate;
        }
        if(compareDay(defaultDate, maxDate) === 1) {
          return maxDate;
        }
        return defaultDate;
      }

      if(type === config.TYPE_MULTIPLE) {
        if(!defaultDate) {
          return [];
        }
        if(defaultDateIsArr) {
          return defaultDate.filter(item => {
            return compareDay(item, minDate) === 1 && compareDay(item, maxDate) === -1;
          });
        }
        if(compareDay(defaultDate, minDate) === -1) {
          return [minDate];
        }
        if(compareDay(defaultDate, maxDate) === 1) {
          return [maxDate];
        }
        return [minDate];
      }

      if(type === config.TYPE_RANGE) {
        if(defaultDateIsArr) {
          let [startDay = minDate, endDay] = defaultDate;
          if(compareDay(startDay, minDate) === -1 || compareDay(startDay, maxDate) !== -1) {
            startDay = minDate;
          }
          if(!endDay) {
            endDay = getDayByOffset(getDate(startDay), 1).getTime();
          }
          if(compareDay(endDay, maxDate) === 1 || compareDay(endDay, minDate) === -1) {
            endDay = getDayByOffset(getDate(startDay), 1).getTime();
          }
          return [
            startDay,
            endDay
          ];
        }
        return [
          minDate,
          getDayByOffset(getDate(minDate), 1).getTime()
        ];
      }
    },
    initRect() {
      if (!this.contentObserver !== null && this.contentObserver !== undefined) {
        this.contentObserver.disconnect();
      }
      const contentObserver = this.createIntersectionObserver({
        thresholds: [0, 0.1, 0.9, 1],
        observeAll: true
      });
      this.contentObserver = contentObserver;
      contentObserver.relativeTo('.calendar-body-wrap');
      contentObserver.observe('.month', res => {
        if (res.boundingClientRect.top <= res.relativeRect.top) {
          // @ts-ignore
          this.setData({ subTitle: formatMonthTitle(res.dataset.date) });
        }
      });
    },
    scrollIntoView() {
      setTimeout(() => {
        const { currentDate, type, show, minDate, maxDate } = this.data;
        const targetDate = type === 'single' ? currentDate : currentDate[0];
        const displayed = show;
        if (!targetDate || !displayed) {
          return;
        }
        const months = getMonths(minDate, maxDate);
        months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            this.setData({ scrollIntoViewIndex: `month${index}` });
            return true;
          }
          return false;
        });
      }, 100);
    },
    closePicker() {
      this.setData({
        show: false
      });
    },
    onClickConfirm() {
      const {format, type, currentDate} = this.data;
      eventBus.emit(`lin-form-blur-${this.id}`, this.id);
      let value = null;
      if(type === 'single') {
        value = format !== 'timestamp' ? formatFlags.format('yyyy-MM-dd', currentDate) : currentDate;
      } else {
        value = currentDate.map(item => {
          return format !== 'timestamp' ? formatFlags.format('yyyy-MM-dd', item) : item;
        });
      }
      this.triggerEvent('linconfirm', value);
    },
    getValues() {
      return this.data.currentDate;
    },
    reset() {
      this.setData({
        currentDate: null
      });
    }
  }
});
