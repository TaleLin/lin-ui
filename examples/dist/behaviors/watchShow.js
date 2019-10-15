// eslint-disable-next-line no-undef
export default Behavior({
  observers: {
    'show': function (show) {
      show && this.changeStatus();
      if (!show) this.setData({
        status: show
      });
    }
  },
  methods: {
    changeStatus() {
      this.setData({
        status: true
      });
      if (this.data.timer) clearTimeout(this.data.timer);
      this.data.timer = setTimeout(() => {
        this.setData({
          status: false
        });
        if (this.data.success) this.data.success();
        this.data.timer = null;
      }, this.properties.duration);
    }
  }
});