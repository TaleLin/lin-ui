Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    transitionName: 'fade',
    caseStatus: [false, false, false]
  },

  changeType(e) {
    this.setData({
      transitionName: e.currentTarget.dataset['name'],
      show: true
    });
  },

  beforeEnter() {
    console.log('入场动画准备开始')
  },

  entering() {
    console.log('入场动画正在进行中')
  },

  afterEnter() {
    setTimeout(() => {
      this.setData({
        show: false
      });
    }, 1000)
    console.log('入场动画完成')
  },

  beforeLeave() {
    console.log('出场动画准备开始')
  },

  leaving () {
    console.log('出场动画正在进行中')
  },

  afterLeave() {
    console.log('出场动画完成')
  },

  openCase(e) {
    this.data.caseStatus[e.currentTarget.dataset['name']] = true
    this.setData({
      caseStatus: this.data.caseStatus
    });
  },

  closeCase(e) {
    this.data.caseStatus[e.currentTarget.dataset['name']] = false
    this.setData({
      caseStatus: this.data.caseStatus
    });
  }

})
