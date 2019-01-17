const dialogNaviConfigs = [
  {
    title: "提示框",
    type: 0,
    config: {
      show: true,
      type: "alert",
      title: "标题",
      showTitle: true,
      locked: false,
      content: "这个是提示框",
      confirmText: '确定',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "确认框",
    type: 1,
    config: {
      show: true,
      type: "confirm",
      showTitle: true,
      title: "标题",
      content: "这个是确认框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },

  {
    title: "无标题提示框",
    type: 2,
    config: {
      show: true,
      type: "alert",
      showTitle: false,      
      content: "这个是无标题提示框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "无标题确认框",
    type: 3,
    config: {
      show: true,
      type: "confirm",
      showTitle: false,
      content: "这个是无标题确认框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "自定义按钮文字",
    type: 4,
    config: {
      show: true,
      type: "confirm",
      title: "提问",
      showTitle: true,
      content: "PHP是最好的语言吗？",
      confirmText: 'yes~',
      confirmColor: '#f60',
      cancelText: 'no~',
      cancelColor: '#999'  
    }
  },
  {
    title: "传入自定义标签",
    type: 5,
    config: {
      show: true,
      type: "confirm",
      showTitle: true,
      title:'标题',
      content: "",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  
]

export default dialogNaviConfigs;