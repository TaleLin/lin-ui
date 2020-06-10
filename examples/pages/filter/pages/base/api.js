export const isAPI = {
  name: 'Is',
  describe: '类型判断',
  wxsName: 'is',
  apiList: [
    '```javascript\n is.isNumber(val)\n```',
    '```javascript\n is.isString(val)\n```',
    '```javascript\n is.isObject(val)\n```',
    '```javascript\n is.isBoolean(val)\n```',
    '```javascript\n is.isFunction(val)\n```',
    '```javascript\n is.isDate(val)\n```',
    '```javascript\n is.isArray(val)\n```',
    '```javascript\n is.isRegExp(val)\n```'
  ]
};

export const stringAPI = {
  name: 'String',
  describe: '字符',
  wxsName: 'string',
  apiList: [
    '```javascript\nstring.toString(targetString)\n```',
    '```javascript\nstring.charAt(targetString, index)\n```',
    '```javascript\nstring.indexOf(targetString,searchValue,fromIndex)\n```',
    '```javascript\nstring.lastIndexOf(targetString,searchValue,fromIndex)\n```',
    '```javascript\nstring.slice(targetString,beginSlice,endSlice)\n```',
    '```javascript\nstring.split(targetString,[separator[, limit]])\n```',
    '```javascript\nstring.substring(targetString,indexStart[, indexEnd])\n```',
    '```javascript\nstring.toLowerCase(targetString)\n```',
    '```javascript\nstring.toUpperCase(targetString)\n```',
    '```javascript\nstring.trim(targetString)\n```'
  ]
};

export const arrayAPI = {
  name: 'Array',
  describe: '数组',
  wxsName: 'array',
  apiList: [
    '```javascript\n array.join(targetArray,spearator)\n```',
    '```javascript\n array.pop(targetArray)\n```',
    '```javascript\n array.push(targetArray,element1[, ...[, elementN]])\n```',
    '```javascript\n array.reverse(targetArray)\n```',
    '```javascript\n array.shift(targetArray)\n```',
    '```javascript\n array.slice(targetArray[,beginSlice[, endSlice]])\n```',
    '```javascript\n array.concat(targetArray[,value1[, value2[, ...[, valueN]]]])\n```',
    '```javascript\n array.splice(targetArray,start[, deleteCount[, item1[, item2[, ...]]]])\n```',
    '```javascript\n array.unshift(targetArray,element1[, ...[, elementN]])\n```',
    '```javascript\n array.indexOf(targetArray)\n```',
    '```javascript\n array.lastIndexOf(targetArray)\n```'
  ]
};