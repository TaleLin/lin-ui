Component({
  externalClasses: ['l-class', 'l-image-class'],
  properties: {
    show: Boolean,
    icon: String,
    image: String,
    content: String,
    type: {
      type: String,
      value: 'primary'
    },
    duration: {
      type: Number,
      value: 1500
    },
    openApi: {
      type: Boolean,
      value: true
    }
  },

  data: {
    status: false
  },

  attached() {
    this.initMessage();
  },

  pageLifetimes: {
    show() {
      this.initMessage();
    },
  },

  observers: {
    'show': function (show) {
      show && this.changeStatus();
    }
  },

  methods: {
    initMessage() {
      wx.lin = wx.lin || {};
      wx.lin.showMessage = (options = {}) => {
        const {
          content = '',
          icon = '',
          image = '',
          type = 'primary',
          duration = 1500,
          success = null
        } = options;
        this.data.success = success;
        this.setData({
          content,
          icon,
          image,
          duration,
          type
        });
        this.changeStatus();
        return this;
      };
    },

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