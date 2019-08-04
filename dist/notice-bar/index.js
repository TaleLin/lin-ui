Component({
  externalClasses: ['l-class'],

  properties: {
    type: {
      type: String,
      value: 'still'
    },
    // 轮播数组
    swipArr: Array,
    // 前置图标
    frontIconName: {
      type: String,
      value: ''
    },
    frontIconSize: {
      type: Number,
      value: 28
    },
    frontIconColor: {
      type: String,
      value: '#3683D6'
    },
    endIconName: {
      type: String,
      value: ''
    },
    endIconSize: {
      type: Number,
      value: 28
    },
    endIconColor: {
      type: String,
      value: '#3683D6'
    },
    // 背景颜色
    backgroundcolor: {
      type: String,
      value: '#DFEDFF'
    },
    // 字体及图标颜色
    color: {
      type: String,
      value: '#3683D6'
    },
    // 滚动速度
    speed: {
      type: Number,
      value: 1500
    },
    show: {
      type: Boolean,
      value: true
    },
    close: {
      type: Boolean,
      value: false
    }
  },

  data: {
    wrapWidth: 0,
    width: 0,
    duration: 0,
    animation: null,
    timer: null,
  },

  detached() {
    this.destroyTimer();
  },

  ready() {
    if (this.properties.type == 'roll' && this.properties.show) {
      this.initAnimation();
    }
  },

  methods: {
    initAnimation() {
      wx.createSelectorQuery().in(this).select('.l-noticebar-content-wrap').boundingClientRect((wrapRect) => {
        wx.createSelectorQuery().in(this).select('.l-noticebar-content').boundingClientRect((rect) => {
          const duration = rect.width / 40 * this.data.speed;
          const animation = wx.createAnimation({
            duration: duration,
            timingFunction: 'linear',
          });
          this.setData({
            wrapWidth: wrapRect.width,
            width: rect.width,
            duration: duration,
            animation: animation
          }, () => {
            this.startAnimation();
          });
        }).exec();

      }).exec();
    },
    startAnimation() {
      //reset
      if (this.data.animation.option.transition.duration !== 0) {
        this.data.animation.option.transition.duration = 0;
        const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
        this.setData({
          animationData: resetAnimation.export()
        });
      }
      this.data.animation.option.transition.duration = this.data.duration;
      const animationData = this.data.animation.translateX(-this.data.width).step();
      setTimeout(() => {
        this.setData({
          animationData: animationData.export()
        });
      }, 100);
      const timer = setTimeout(() => {
        this.startAnimation();
      }, this.data.duration);
      this.setData({
        timer,
      });
    },
    destroyTimer() {
      if (this.data.timer) {
        clearTimeout(this.data.timer);
      }
    },
    handleTap() {
      this.triggerEvent('lintap',{},{ bubbles: true, composed: true });
      this.setData({
        timer: null
      });
    },
    onSwip(e) {
      this.triggerEvent('lintap', {
        ...e.currentTarget.dataset
      },{ bubbles: true, composed: true });
    },
    onIconTap(){
      this.triggerEvent('linicontap',{},{ bubbles: true, composed: true });
      this.setData({
        timer: null
      });
    },
    onClose() {
      this.setData({
        timer: null,
        show: false
      });
    },
  }
});