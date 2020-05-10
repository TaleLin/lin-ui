import cityData from './city-data';

const sideBarData = [
  'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'
]

Page({
  data: {
    scrollTop: 0,
    cityData: cityData.city,
    sideBarData: sideBarData,
    showAreaChoose:true
  },

  onPageScroll(options) {
    const scrollTop = options.scrollTop
    this.setData({
      scrollTop
    })
  },

  onChangeSegement(event){
    wx.pageScrollTo({
      duration: 0,
      scrollTop: 0
    })
    this.setData({
      showAreaChoose:!event.detail.currentIndex
    })
  }
});
