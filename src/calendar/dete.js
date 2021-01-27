const formatFlags = {
  format: function (format, date) {
    date = new Date(date);
    let ret;
    const opt = {
      'y+': date.getFullYear().toString(),        // 年
      'M+': (date.getMonth() + 1).toString(),     // 月
      'd+': date.getDate().toString(),            // 日
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(format);
      if (ret) {
        format = format.replace(ret[1], (ret[1].length === 1) ? opt[k] : this.padZero(opt[k], ret[1].length));
      }
    }
    return format;
  },

  /**
   * PC 端微信不支持 padStart，这里写一个补 0 函数
   * 如果测试已兼容，则可使用原生 padStart
   * issue #1277
   */
  padZero(str, length) {
    let res = str;
    for (let i = 0; i < length - str; i++) {
      res = '0' + res;
    }
    return res;
  }
};

formatFlags.format('yyyy/MM/dd', new Date());
formatFlags.format('yyyy-MM-dd', new Date());
formatFlags.format('yyyy-M-dd', new Date());
formatFlags.format('yyyy-M-d', new Date());
// formatFlags.format('yy-M-dd', new Date())
formatFlags.format('M-dd', new Date());
formatFlags.format('MM-dd', new Date());


export default formatFlags;
