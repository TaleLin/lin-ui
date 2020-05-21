//创建EventBus对象
let EventBus = function () {};
//准备数组容器
var objBus = [], arrBus = [];
//添加方法
EventBus.prototype = {
  obj: {
    set: function (key, action) {
      if (key && action) {
        var map = {};
        map.k = key;
        map.v = action;
        //如果存在，则删除之前添加的事件
        for (var i = 0, busLength = objBus.length; i < busLength; i++) {
          var tempMap = objBus[i];
          if (tempMap.k === key) {
            objBus.splice(i, 1);
          }
        }
        objBus.push(map);
      }
    },
    get: function (key) {
      if (key) {
        for (var i = 0, busLength = objBus.length; i < busLength; i++) {
          var map = objBus[i];
          if (map.k === key) {
            return map.v();
          }
        }
      }
    }
  },
  emit: function (key, data) {
    if (key) {
      for (var i = 0, busLength = arrBus.length; i < busLength; i++) {
        var map = arrBus[i];
        if (map.k === key) {
          return map.v(data);
        }
      }
    }
    return new Promise((resolve) => { resolve();});
  },
  on: function (key, action) {
    if (key && action) {
      var map = {};
      map.k = key;
      map.v = action;
      arrBus.push(map);
    }
  },
  arr: {
    push: function (key, action) {
      if (key && action) {
        var map = {};
        map.k = key;
        map.v = action;
        arrBus.push(map);
      }
    },
    pop: function (key) {
      if (key) {
        for (var i = 0, busLength = arrBus.length; i < busLength; i++) {
          var map = arrBus[i];
          if (map.k === key) {
            map.v();
          }
        }
      }
    }
  }
};
var eventBus = new EventBus();
export default  eventBus;
// module.exports = {
//   eventBus: eventBus
// }
