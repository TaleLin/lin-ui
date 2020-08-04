const priceNaviConfigs = [{
  title: '基础用法（max=10,min=1,count=1）',
  config: [{
    count: 1,
    min: 1,
    max: 10,
    step: 1,
    disabled: false
  }]
}, {
  title: '设置步长（step=2）',
  config: [{
    count: 1,
    min: 1,
    max: 10,
    step: 2,
    disabled: false
  }]
}, {
  title: '禁用状态',
  config: [{
    count: 1,
    min: 1,
    max: 10000,
    step: 1,
    disabled: true
  }]
}];

export default priceNaviConfigs;