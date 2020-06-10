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

  afterEnter() {
    setTimeout(() => {
      this.setData({
        show: false
      });
    }, 1000);
  },

  openCase(e) {
    this.data.caseStatus[e.currentTarget.dataset['name']] = true;
    this.setData({
      caseStatus: this.data.caseStatus
    });
  },

  closeCase(e) {
    this.data.caseStatus[e.currentTarget.dataset['name']] = false;
    this.setData({
      caseStatus: this.data.caseStatus
    });
  }

});
