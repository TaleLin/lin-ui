// pages/form/pages/rules/index.js
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
      type: 'string',
      required: true,
      message: '请选择性别'
    },
    habbitRules: {
      type: 'array',
      required: true,
      message: '至少选择一个兴趣爱好'
    },
    phoneRules: [{
      type: 'string',
      required: true,
    }, {
      pattern: '^1(3|4|5|7|8)\\d{9}$',
      message: '手机号不正确，请重新输入'
    }],
    passwordRules: {
      type: 'number',
      required: true,
      message: '请重新输入数字'
    },
    likes: ['读书']

  },
  methods: {
    changeCheckbox(e){
      const key = e.detail.key;
      const checked = e.detail.checked;
      let likes = this.data.likes;
      if (checked) {
        likes.push(key);
      } else {
        likes = likes.filter(item => {
          return item !== key;
        });
      }
      this.setData({
        likes: likes
      });
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function() {

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
});
