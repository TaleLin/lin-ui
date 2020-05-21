const sideBarData = [
  'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'
]

Page({
  data: {
    scrollTop: 0,
    sideBarData: sideBarData
  },

  onPageScroll(options) {
    const scrollTop = options.scrollTop
    this.setData({
      scrollTop
    })
  }
});
