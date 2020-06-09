const toastNaviConfigs = [
  {
    title: '无文本的提示框',
    type: 0,
    config: {
      show: true,
      title: '是兄弟就来砍我~',
      icon: '',      
      iconStyle: '',
      image: '',
      imageStyle: '',
      placement: 'bottom',
      duration: 2000,
      center: false,
      mask: false   
    }
  },
  {
    title: '显示成功的提示框',
    type: 1,
    config: {
      show: true,
      title: '您击倒了渣渣辉！',
      icon: 'success',
      iconStyle: 'size:60; color:#00C292',
      image: '',
      imageStyle: '',
      placement: '',
      duration: 1500,
      center: false,
      mask: false
    }
  },

  {
    title: '自定义持续时间的提示框',
    type: 2,
    config: {
      show: true,
      title: '打开宝箱中...',
      icon: 'loading',
      iconStyle: '',
      image: '',
      imageStyle: '',
      placement: '',
      duration: 2000,
      center: false,
      mask: false
    }
  },

  {
    title: '显示自定义图片的提示框',
    type: 3,
    config: {
      show: true,
      title: '恭喜您！获得屠龙宝刀*1！',
      icon: '',
      iconStyle: '',
      image: '/images/static/tlbd.jpg',
      imageStyle: '80*80',
      placement: 'right',
      duration: 2000,
      center: false,
      mask: false
    }
  },

];

export default toastNaviConfigs;