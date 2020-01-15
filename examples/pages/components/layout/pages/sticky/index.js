// pages/components/layout/pages/sticky/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    addresses:[
      {
        index:"A",
        items:[
          "阿坝",
          "阿克苏",
        ]
      },
      {
        index:"B",
        items:[
          "百色",
          "白沙",
        ]
      },
      {
        index:"C",
        items:[
          "重庆",
          "长白山",
        ]
      }
    ],
    grids2: [{
      image: 'cart',
      text: '我的购物车'
    }, {
      image: 'help',
      text: '帮助中心'
    }, {
      image: 'address',
      text: '地址管理'
    }, {
      image: 'order',
      text: '我的订单'
    }, {
      image: 'customer-service',
      text: '联系客服'
    },],
    dynamicCard:[
      {
        title:"动态插入数据示例",
        content:"点击下面按钮动态插入一条数据，模拟上拉加载更多的业务场景"
      }
    ]
  },

  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },

  onAddData(){
    let size = this.data.dynamicCard.length
    let tempData = this.data.dynamicCard
    let data = {
      title:`这是第${size+1}条数据`,
      content:`这是动态增加的第${size+1}条数据。点击下面按钮动态插入一条数据，模拟上拉加载更多的业务场景`
    }
    tempData.push(data)
    this.setData({
      dynamicCard:tempData
    })

    wx.lin.flushSticky()
  },

  linunsticky(){
    wx.showToast({title:"容器脱落！"})
  },

  linsticky(){
    wx.showToast({title:"容器吸附！"})
  }
})