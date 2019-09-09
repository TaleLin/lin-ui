// eslint-disable-next-line no-undef
export default Behavior({
  behaviors: [],
  properties: {},
  data: {
    distance: 0
  },
  attached(){
    this.offsetMargin();
  },
  methods: {
    offsetMargin() {
      const { windowHeight, screenHeight } = wx.getSystemInfoSync();
      this.setData({
        distance: (screenHeight-windowHeight )
      });
    }
  }
});