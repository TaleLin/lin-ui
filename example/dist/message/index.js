Component({
  externalClasses: ['l-class', 'l-image-class'],
  properties: {
    show: {
      type: Boolean,
      vlaue: false,
      observer: function () {
        this.setData({
          status: true
        })
        setTimeout(() => {
          this.setData({
            status: false
          })
          this.properties.show = false
        }, this.properties.duration)
      }
    },
    duration: {
      type: Number,
      value: 1500
    },
    content: {
      type: String
    },
    type: {
      type: String,
      value: 'primary'
    },
    icon: {
      type: String
    },
    openApi: {
      type: Boolean,
      value: true,
    },
    image:String
  },

  data: {
    status: false
  },

  attached() {
    if (this.data.openApi) {
      this.initMessage();
    }
  },

  lifetimes: {
    show() {
      if (this.data.openApi) {
        this.initMessage();
      }
    },
},

  methods: {
    initMessage() {
      wx.lin = wx.lin || {};
      wx.lin.showMessage = (options) => {
        const {
            content = this.data.content,
            icon = this.data.icon,
            image = this.data.image,
            type = this.data.type,
            duration = this.data.duration,
        } = options;
        this.setData({
          content,
          icon,
          image,
          duration,
          type,
          show: true,
        });
        return this;
      };
    },
  }
});