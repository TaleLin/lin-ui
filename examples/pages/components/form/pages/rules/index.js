// pages/form/pages/rules/index.js
const pattern = /^1(3|4|5|7|8)\d{9}$/;
Component({

  /**
   * Page initial data
   */
  data: {
    detailRules: {
      required: true,
      whitespace: true,
      len: 140,
      message: '长度需要在140个字符之间'
    },
    userRules: [{
        required: true,
        message: '请输入用户名'
      },
      {
        max: 12,
        message: '用户名需在12个字以内'
      }
    ],

    emailRules: {
      type: 'email',
      required: true
    },
    sexRules: {
      type: 'array',
      required: true
    },
    phoneRules: [{
      type: "string",
      required: true,
    }, {
      pattern: "^1(3|4|5|7|8)\\d{9}$",
      message: '手机号不正确，请重新输入'
    }],
    passwordRules: {
      type: "number",
      required: true,
      message: '请重新输入数字'
    }

  },
  methods: {
    formSubmit(e) {
      console.log(e)
    },

    linvalidate(e) {
      console.log('linvalidate', e)
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {},

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {

    }
  }
})