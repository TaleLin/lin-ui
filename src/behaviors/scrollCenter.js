// eslint-disable-next-line no-undef
export default Behavior({
  methods: {
    getRect(selector, all = false) {
      return new Promise((resolve, reject) => {
        const query = wx.createSelectorQuery().in(this);
        const type = all ? query.selectAll(selector) : query.select(selector);
        type.boundingClientRect((res) => {
          if (!res) return reject('找不到元素');
          resolve(res);
        }).exec();
      });
    },
    queryScrollNode(res, currentIndex, type = 'width') {
      if (currentIndex < 0) return;
      const currentRect = res[currentIndex];
      this.getRect('.l-tabsscroll').then(_ => {
        if (!_) return console.error('找不到元素');
        const scrollWidth = _[type];
        let transformDistance = res
          .slice(0, currentIndex)
          .reduce((prev, curr) => prev + curr[type], 0);
        transformDistance += (currentRect[type] - scrollWidth) / 2;

        if (type === 'width') {
          this.setData({
            transformX: transformDistance,
            transformY: 0
          });
        } else {
          this.setData({
            transformX: 0,
            transformY: transformDistance
          });
        }
      }).catch(err => {
        console.error(err);
      });
    },
    queryMultipleNodes() {
      const {
        placement,
        currentIndex
      } = this.data;
      this.getRect('.l-tabs-item', true)
        .then((res) => {
          if (['top', 'bottom'].indexOf(placement) !== -1) {
            this.queryScrollNode(res, currentIndex);
          } else {
            this.queryScrollNode(res, currentIndex, 'height');
          }
        }).catch(err => {
          console.error(err);
        });
    }
  }
});
