const config = {
  content: '',
  icon: '',
  image: '',
  type: 'primary',
  duration: 1500,
  success: null
}

Component({
  externalClasses: ['l-class', 'l-image-class'],
  properties: {

  },

  data: {
    status: false,
    ...config
  },

  attached() {
    this.initMessage();
  },

  lifetimes: {
    show() {
      this.initMessage();
    },
  },

  methods: {
    initMessage() {
      wx.lin = wx.lin || {};
      wx.lin.showMessage = (options) => {
        const {
          content = config.content,
          icon = config.icon,
          image = config.image,
          type = config.type,
          duration = config.duration,
          success = config.success
        } = options;
        this.data.success = success
        this.setData({
          content,
          icon,
          image,
          duration,
          type
        });
        this.changeStatus()
        return this;
      };
    },

    changeStatus() {
      this.setData({
        status: true
      })
      if (this.data.timer) clearTimeout(this.data.timer)
      this.data.timer = setTimeout(() => {
        this.setData({
          status: false
        })
        if (this.data.success) this.data.success()
        this.data.timer = null
      }, this.properties.duration)
    }
  }
});