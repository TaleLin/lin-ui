const priceNaviConfigs = [{
  title: '基础用法',
  config: [{
    value: '666',
    unit: '￥',
    unitColor: '',
    unitSize: 28,
    unitBlod: 500,
    countColor: '',
    countSize: 28,
    countBlod: 'normal',
    delete: false,
    delColor: ''
  },
  {
    value: '666',
    unit: '$',
    unitColor: '',
    unitSize: 28,
    unitBlod: '',
    countColor: '',
    countSize: 28,
    countBlod: '',
    delete: false,
    delColor: ''
  }, {
    value: '666~777',
    unit: '¥',
    unitColor: '',
    unitSize: 28,
    unitBlod: '',
    countColor: '',
    countSize: 28,
    countBlod: '',
    delete: false,
    delColor: ''
  }
  ]
}, {
  title: '设置价格单位及价格颜色和大小',
  config: [{
    value: '666',
    unit: '￥',
    unitColor: '#333',
    unitSize: 28,
    unitBlod: '600',
    countColor: '#333',
    countSize: 28,
    countBlod: '600',
    delete: false,
    delColor: ''
  },
  {
    value: '666',
    unit: '￥',
    unitColor: '#3963BC',
    unitSize: 22,
    unitBlod: '',
    countColor: '#3963BC',
    countSize: 32,
    countBlod: '',
    delete: false,
    delColor: ''
  }
  ]
}, {
  title: '删除态价格',
  config: [{
    value: '666',
    unit: '￥',
    unitColor: '',
    unitSize: 28,
    unitBlod: '600',
    countColor: '',
    countSize: 28,
    countBlod: '600',
    del: true,
    delColor: ''
  }]
}, {
  title: '自动补零、保留小数位数',
  config: [{
    value: '666',
    unit: '￥',
    unitColor: '',
    unitSize: 28,
    unitBlod: '600',
    countColor: '',
    countSize: 28,
    countBlod: '600',
    autofix: true,
    reserveDigit: 2,
    delColor: ''
  },{
    value: '666.66',
    unit: '￥',
    unitColor: '',
    unitSize: 28,
    unitBlod: '600',
    countColor: '',
    countSize: 28,
    countBlod: '600',
    reserveDigit: 3,
    autofix: true,
    delColor: ''
  }]
}];

export default priceNaviConfigs;