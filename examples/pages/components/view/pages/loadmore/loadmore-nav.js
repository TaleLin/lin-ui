const loadmoreNaviConfigs = [{
  title: '提示类型',
  config: [{
    type: 'loading',
    custom: false,
    line: false,
    color: '',
    loadingText: '加载中...(loading)',
    endText: '我是有底线的~'
  },
  {
    type: 'end',
    line: false,
    custom: false,
    color: '',
    loadingText: '加载中...',
    endText: '我是有底线的~(end)'
  }
  ]
}, {
  title: '分割线',
  config: [{
    type: 'loading',
    line: true,
    custom: false,
    color: '',
    loadingText: '加载中...',
    endText: '我是有底线的~'
  }]
}, {
  title: '自定义页底加载文案',
  config: [{
    type: 'loading',
    line: true,
    custom: false,
    color: '',
    loadingText: '努力加载中...',
    endText: '已经到底了~'
  }, {
    type: 'end',
    line: true,
    custom: false,
    color: '',
    loadingText: '努力加载中...',
    endText: '已经到底了~'
  }]
}, {
  title: '自定义页底加载文案颜色',
  config: [{
    type: 'loading',
    line: true,
    custom: false,
    color: '#3963BC',
    loadingText: '加载中...',
    endText: '我是有底线的~'
  }]
}];

export default loadmoreNaviConfigs;