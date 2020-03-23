Component({
  properties: {},
  data: {
    /**
     * 内容区高度
     */
    bodyHeight: '0',
    /**
     * 内容区是否展开
     */
    bodyExpand: false
  },
  methods: {
    /**
     * 点击标题
     */
    onTapTitle() {
      if (this.data.bodyExpand) {
        this.setData({
          bodyExpand: !this.data.bodyExpand,
          bodyHeight: 0
        });
        return;
      }
      wx.createSelectorQuery()
        .in(this)
        .select('.container-body-wrapper')
        .fields({size: true}, (res) => {
          this.setData({
            bodyExpand: !this.data.bodyExpand,
            bodyHeight: res.height
          });
        })
        .exec();


    }
  }
});
