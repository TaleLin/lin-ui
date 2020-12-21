
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultDate: 1589524969397,
    show: false,
    minSelect: '',
    maxSelect: '',
    type: 'single',
    title: '',
    color: '',
    maxDate: '',
    minDate: '',
    confirmText: '',
    formatter: '',
    base_single: {
      defaultDate: 1589524969397,
      minSelect: '',
      maxSelect: '',
      type: 'single',
      title: '选择单个日期'
    },
    base_range: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      type: 'range',
      title: '选择日期范围'
    },
    base_multiple: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      type: 'multiple',
      title: '选择多个日期'
    },
    custom_color: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      color: '#ff7487',
      type: 'range',
      title: '自定义颜色'
    },
    custom_range: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      type: 'range',
      title: '自定义日期范围',
      maxDate: new Date().setDate(new Date().getDate() + 30),
      minDate: new Date().setDate(new Date().getDate() - 30)
    },
    custom_confirmtext: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      type: 'range',
      title: '自定按钮文字',
      confirmText: '确认选中'
    },
    custom_date: {
      defaultDate: [],
      minSelect: '',
      maxSelect: '',
      type: 'range',
      title: '自定义日期文案',
      formatter: (day) => {
        const item = new Date(day.date);
        const current = new Date();

        const month = item.getMonth() + 1;
        const date = item.getDate();

        if(current.getMonth() === item.getMonth() && current.getDate() === item.getDate()){
          day.text = '今天';
        }

        if (month === 1) {
          if (date === 1) {
            day.topInfo = '元旦节';
          }
        }

        if (month === 2) {
          if (date === 14) {
            day.topInfo = '情人节';
          }
        }

        if (month === 3) {
          if (date === 8) {
            day.topInfo = '妇女节';
          }
        }

        if (month === 4) {
          if (date === 1) {
            day.topInfo = '愚人节';
          }
        }

        if (month === 5) {
          if (date === 1) {
            day.topInfo = '劳动节';
          } else if (date === 4) {
            day.topInfo = '青年节';
          }
        }

        if (month === 6) {
          if (date === 1) {
            day.topInfo = '儿童节';
          }
        }

        if (month === 8) {
          if (date === 1) {
            day.topInfo = '建军节';
          }
        }

        if (month === 10) {
          if (date === 1) {
            day.topInfo = '国庆节';
          }
        }

        if (day.type === 'start') {
          day.bottomInfo = '入住';
        } else if (day.type === 'end') {
          day.bottomInfo = '离店';
        }

        return day;


        // if (month === 5) {
        //   if (date === 1) {
        //     day.topInfo = '劳动节';
        //   } else if (date === 4) {
        //     day.topInfo = '青年节';
        //   } else if (date === 11) {
        //     day.text = '今天';
        //   }
        // }

        // if (day.type === 'start') {
        //   day.bottomInfo = '入住';
        // } else if (day.type === 'end') {
        //   day.bottomInfo = '离店';
        // }

        // return day;
      }
    },
    custom_count: {
      defaultDate: [],
      minSelect: '4',
      maxSelect: '10',
      type: 'range',
      title: '自定义可选数量',
    },
  },

  changeType(e) {
    const {defaultDate, minSelect, maxSelect, type, title, color = '', minDate = '', maxDate = '', confirmText='确定', formatter} = this.data[e.currentTarget.dataset.id];

    this.setData({
      show: true,
      defaultDate,
      minSelect,
      maxSelect,
      type,
      title,
      color,
      maxDate,
      minDate,
      confirmText,
      formatter
    });
  },

  selectCalender(e){
    console.info(e);
  }
});
