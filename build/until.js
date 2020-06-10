const fs = require('fs');
let componentArr = [];

function componentData() {
  let data = fs.readFileSync('../config/component.json', 'utf-8');
  let params = JSON.parse(data).components;
  componentArr.push(...params);
  forParams(params);
  let result = [...new Set(componentArr)].join();
  return result;
}

const forParams = (arr) => {
  let finishArr = [];
  arr.map(item => {
    let data = fs.readFileSync(`../src/${item}/index.json`, 'utf-8');
    const params = JSON.parse(data);
    const { usingComponents } = params;
    if (usingComponents && !isEmptyObj(usingComponents)) {
      for (let key in usingComponents) {
        let keyComponent = key.substring(2, key.length);
        finishArr.push(keyComponent);
      }
      componentArr.push(...finishArr);
      forParams(finishArr);
    }
  });
};

const isEmptyObj = (obj) => {
  let result = (JSON.stringify(obj) === '{}');
  return result;
};

module.exports = componentData;