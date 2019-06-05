const loadingNaviConfigs = [{
    title: "加载类型",
    type: 0,
    config: [{
        type: 'flash',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'flash'
      },
      {
        type: 'circle',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'circle'
      },
      {
        type: 'rotate',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'rotate'
      },
      {
        type: 'flip',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'flip'
      },
      {
        type: 'change',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'change'
      }
    ]
  },
  {
    title: "加载动画大小",
    type: 1,
    config: [{
        type: 'rotate',
        show: true,
        size: 'mini',
        color: '#3683d6',
        name: 'mini'
      },
      {
        type: 'rotate',
        show: true,
        size: 'default',
        color: '#3683d6',
        name: 'default'
      },
      {
        type: 'rotate',
        show: true,
        size: 'large',
        color: '#3683d6',
        name: 'large'
      }
    ]
  },
  {
    title: "更改加载动画颜色",
    type: 2,
    config: [{
      type: 'flash',
      show: true,
      size: 'default',
      color: '#6cd5e6',
      name: '自定义颜色'
    }]
  },
  {
    title: "自定义加载动画",
    type: 3,
    config: [{
      type: '',
      image: '/images/static/loading.gif',
      show: true,
      size: '',
      color: '',
      custom: true,
      name: '自定义加载动画'
    }]
  }
]

export default loadingNaviConfigs;