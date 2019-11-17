// pages/components/form/pages/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email: '',
    age: '',
    password: '',
    password2: '',
    love: '',
    name: '',
    items1: [
      {
      id: 1,
      name: '青花瓷',
      checked: true
    }, {
      id: 2,
      name: '双截棍',
      checked: false
    }, {
      id: 3,
      name: '一千年以后',
      checked: false
    }, {
      id: 4,
      name: '江南',
      checked: true
    }],
    items2: [
      {
      id: 1,
      name: '青花瓷',
      checked: false
    }, {
      id: 2,
      name: '双截棍',
      checked: false
    }, {
      id: 3,
      name: '一千年以后',
      checked: false
    }, {
      id: 4,
      name: '江南',
      checked: false
    }],
    emailRules: [
      {
        type: 'email',
        required: true,
        message: '邮箱地址不合法'
      },
      // {
      //   validator(rule, value, callback, source) {
      //     console.log(value)
      //     console.log(source)
      //     // var errors = [];
      //     // errors.push(new Error())
      //     callback([new Error('111')]);
      //   },
      //   message: 'Value is not equal to "test".',
      // }
    ],
    ageRules: {
      validator(rule, value, callback) {
        if(value < 10) {
          callback(false);
        } else {
          callback()
        }

        // var errors = [];
        // errors.push(false)
        // callback([new Error('222')]);
      },
      message: '年龄必须大于等于10岁'
    },
    passwordRules: {
      validator(rule, value, callback,source) {
        // console.log(source)
        const {password,password2} = source;
        if(password !== password2) {
          callback(false);
        }
        callback()
      },
      message: '两次密码输入不一致'
    },
    password2Rules: [
      {
        type: 'email',
        required: true,
        message: '密码必须邮箱格式邮箱地址不合法'
      },
      {
        validator(rule, value, callback,source) {
          // console.log(source)
          const {password,password2} = source;
          if(password !== password2) {
            callback(false);
          }
          callback()
        },
        message: '两次密码输入不一致'
      }
    ]

  },

  change(e) {
    let items = this.data.items1;
    items.forEach(item => {
      if(item.id == e.detail.key) {
        item.checked = e.detail.checked;
      }
    });
    this.setData({
      items1: items
    });
  },

  submit(data){
    console.log(data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.lin.initValidateForm(this)
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
})
