const formatFlags = {
  format: function(format, date) {
    date = new Date(date)
    let ret;
    const opt = {
      'y+': date.getFullYear().toString(),        // 年
      'M+': (date.getMonth() + 1).toString(),     // 月
      'd+': date.getDate().toString(),            // 日
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(format);
      if (ret) {
        format = format.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
      }
    }
    return format;
  }
}

formatFlags.format('yyyy/MM/dd', new Date())
formatFlags.format('yyyy-MM-dd', new Date())
formatFlags.format('yyyy-M-dd', new Date())
formatFlags.format('yyyy-M-d', new Date())
// formatFlags.format('yy-M-dd', new Date())
formatFlags.format('M-dd', new Date())
formatFlags.format('MM-dd', new Date())


export default formatFlags