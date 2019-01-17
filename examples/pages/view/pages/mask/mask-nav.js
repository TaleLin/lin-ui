const maskNaviConfigs = [{
    title: "基本案例",
    type: 0,
    config: {
      show: true,
      opacity: .4,      
      zIndex: 99,
      center: true,
      locked: false,
      
    }
  },
  {
    title: "自定义透明度",
    type: 1,
    config: {
      show: true,
      opacity: .7,
      zIndex: 99,
      center: true,
      locked: false,
    }
  },
  {
    title: "子节点设置",
    type: 2,
    config: {
      show: true,
      opacity: .5,
      zIndex: 99,
      center: false,
      locked: false,
    }
  },
  {
    title: "垂直居中",
    type: 3,
    config: {
      show: true,
      opacity: .5,
      zIndex: 99,
      center: true,
      locked: false,
    }
  },
  {
    title: "锁定",
    type: 4,
    config: {
      show: true,
      opacity: .5,
      zIndex: 99,
      center: true,
      locked: true,
    }
  },
  // {
  //   title: "全屏模式",
  //   type: 5,
  //   config: {
  //     status: "show",
  //     opacity: .5,
  //     zIndex: 99,
  //     center: true,
  //     locked: false,
  //   }
  // },
]

export default maskNaviConfigs;