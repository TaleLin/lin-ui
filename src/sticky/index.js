import validator from '../behaviors/validator';

Component({
  externalClasses: ['l-class'],
  behaviors: [validator],
  relations: {
    '../sticky-item/index': {
      type: 'child',
      linked() {
        this.checkSupportCssSticky().then((isSupportCssSticky) => {
          if (!isSupportCssSticky) {
            this.updateStickyItemsSizeData();
          }
        }).catch(err => {
          console.error(err);
        });
      },
      linkChanged() {
        this.checkSupportCssSticky().then((isSupportCssSticky) => {
          if (!isSupportCssSticky) {
            this.updateStickyItemsSizeData();
          }
        }).catch(err => {
          console.error(err);
        });
      },
      unlinked() {
        this.checkSupportCssSticky().then((isSupportCssSticky) => {
          if (!isSupportCssSticky) {
            this.updateStickyItemsSizeData();
          }
        }).catch(err => {
          console.error(err);
        });
      }
    }
  },

  properties: {
    /**
     * 吸顶容器实现模式
     * js - 使用js实现
     * css - 使用css实现，若不支持css，则回滚到js模式
     */
    mode: {
      type: String,
      value: 'js',
      options: ['js', 'css']
    },

    /**
     * 页面垂直滚动的距离
     */
    scrollTop: Number,
  },

  observers: {
    /**
     * 监听页面滚动，实时更新吸顶容器位置
     */
    'scrollTop': function () {
      this.checkSupportCssSticky().then((isSupportCssSticky) => {
        if (!isSupportCssSticky) {
          this.updateStickyItemsPosition();
        }
      }).catch(err => {
        console.error(err);
      });
    }
  },

  lifetimes: {
    attached() {
      this.checkSupportCssSticky().then((isSupportCssSticky) => {
        if (!isSupportCssSticky) {
          this.initSticky();
        }
      }).catch(err=>{
        console.error(err);
      });
    }
  },

  methods: {

    /**
     * 创建wx.lin函数
     */
    initSticky() {
      wx.lin = wx.lin || {};
      wx.lin.flushSticky = () => {
        this.updateStickyItemsSizeData();
      };

      // 传入scrollTop的值的函数
      wx.lin.setScrollTop = (scrollTop) => {
        this.data.scrollTop = scrollTop;
        this.checkSupportCssSticky().then((isSupportCssSticky) => {
          if (!isSupportCssSticky) {
            this.updateStickyItemsPosition();
          }
        }).catch(err=>{
          console.error(err);
        });
      };
    },

    /**
     * 更新所有sticky-item组件的position属性
     */
    updateStickyItemsPosition() {
      const stickyItemNodes = this.getStickyItemNodes();
      for (let stickyItemNode of stickyItemNodes) {
        stickyItemNode.updateStickyItemPosition(this.data.scrollTop);
      }
    },

    /**
     * 更新所有sticky-item组件的基础数据
     */
    updateStickyItemsSizeData() {
      const stickyItemNodes = this.getStickyItemNodes();
      stickyItemNodes.forEach((item, index) => {
        item.updateStickyItemBaseData(index);
      });
    },

    /**
     * 获取所有的sticky-item组件
     * @return {Object} sticky-item组件集合
     */
    getStickyItemNodes() {
      return this.getRelationNodes('../sticky-item/index');
    },

    /**
     * 检测当前webview内核是否支持css设置sticky
     * @return {Boolean} css是否支持设置sticky
     */
    checkSupportCssSticky() {
      return new Promise((resolve) => {
        const stickyItemNodes = this.getStickyItemNodes();
        if (stickyItemNodes.length === 0) {
          resolve(false);
        }

        // 根据position判断是否支持position:sticky
        wx
          .createSelectorQuery()
          .in(stickyItemNodes[0])
          .select('.l-sticky-item-header')
          .fields({computedStyle: ['position']})
          .exec((res) => {
            if (res[0] === null) {
              resolve(false);
            } else {
              resolve(res[0].position === 'sticky');
            }
          });
      });
    },
  }
});
