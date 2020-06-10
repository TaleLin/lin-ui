// pages/components/form/pages/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    student: {
      name: '',
      age: '',
      address: ''
    },
    form: {
      name: '',
      music: '',
      sex: '',
      desc: '',
      score: ''
    },
    loginForm: {
      loginId: '',
      password: '',
      loginIdRules:{
        type: 'email',
        required: true,
        message: '邮箱地址不合法',
        trigger: 'change'
      },
      passwordRules: [
        { required: true, message: '请输入登录密码', trigger: 'blur' },
        { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
        { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成',trigger: 'blur'}
      ],
    },
    ruleForm: {
      name: '',
      music: '',
      sex: '',
      desc: '',
      score: ''
    },
    items: [
      {
        id: 1,
        name: '青瓷',
        checked: false
      }, {
        id: 2,
        name: '双棍',
        checked: false
      }, {
        id: 3,
        name: '明天',
        checked: false
      }],
    items2: [
      {
        id: 1,
        name: '青瓷',
        checked: false
      },
      {
        id: 2,
        name: '双棍',
        checked: false
      },
      {
        id: 3,
        name: '明天',
        checked: false
      }
    ],
    tipType: 'toast',
    isSubmitValidate: 1,
    alignType: 'start',
    nameRules: [
      { required: true, message: '请输入真实姓名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    descRules: { min: 10, max: 50, message: '请输入10到50个字符的自我描述', trigger: 'change' },
    musicRules: [
      { type:'array', required: true, message: '歌曲必选', trigger: 'change' },
    ],
    scoreRules: [
      { type:'number',required: true, message: '请选择评分', trigger: 'blur' },
      {
        validator(rule, value, callback) {
          if(value < 3) {
            callback(false);
          } else {
            callback();
          }
        },
        message: '评分必须大于等于3分',
        trigger: 'change'
      }
    ],
    register: {
      loginId: '',
      password: '',
      confirm: ''
    },
    loginIdRules: {
      type: 'email',
      required: true,
      message: '邮箱地址不合法',
      trigger: 'blur'
    },
    passwordRules: [
      { required: true, message: '请输入登录密码', trigger: 'blur' },
      { min: 8, max: 20, message: '密码长度在8-20个字符之间', trigger: 'blur' },
      { pattern: '^[A-Za-z0-9]+$', message: '密码必须由数字字母组成',trigger: 'blur'}
    ],
    confirmRules: [
      {
        validator(rule, value, callback,source) {
          const {password,confirm} = source;
          if(password !== confirm) {
            callback(false);
          }
          callback();
        },
        message: '两次密码输入不一致',
        trigger: 'change'
      }
    ]

  },

  change(e) {
    let items = this.data.items;
    items.forEach(item => {
      if(item.name === e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      items: items
    });
  },

  change2(e) {
    let items = this.data.items2;
    items.forEach(item => {
      if(item.name === e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      items2: items
    });
  },

  changeTipType(e){
    this.setData({
      tipType: e.currentTarget.dataset.type
    });
    wx.lin.resetForm('ruleForm');
  },

  changeSubmitValidate(e) {
    const {
      currentKey
    } = { ...e.detail
    };
    this.setData({
      isSubmitValidate: currentKey
    });
  },

  changeAlignType(e) {
    this.setData({
      alignType: e.currentTarget.dataset.type
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.lin.initValidateForm(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});
