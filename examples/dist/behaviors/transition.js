const isObj = (x) => {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
};
const getClassNames = (name) => ({
  enter: `l-${name}-enter l-${name}-enter-active l-enter-class l-enter-active-class`,
  'enter-to': `l-${name}-enter-to l-${name}-enter-active l-enter-to-class l-enter-active-class`,
  leave: `l-${name}-leave l-${name}-leave-active l-leave-class l-leave-active-class`,
  'leave-to': `l-${name}-leave-to l-${name}-leave-active l-leave-to-class l-leave-active-class`
});
const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
export default (showDefaultValue) => {
  // eslint-disable-next-line no-undef
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      duration: {
        type: null,
        value: 300,
        observer: 'observeDuration'
      },
      name: {
        type: String,
        value: 'fade'
      }
    },
    data: {
      type: '',
      inited: false,
      display: false
    },
    attached() {
      if (this.data.show) {
        this.enter();
      }
    },
    methods: {
      observeShow(value) {
        value ? this.enter() : this.leave();
      },
      enter() {
        const { duration, name } = this.data;
        const classNames = getClassNames(name);
        const currentDuration = isObj(duration) ? duration.enter : duration;
        this.status = 'enter';
        this.triggerEvent('linbeforeenter');
        Promise.resolve()
          .then(nextTick)
          .then(() => {
            this.checkStatus('enter');
            this.triggerEvent('linenter');
            this.setData({
              inited: true,
              display: true,
              classes: classNames.enter,
              currentDuration
            });
          })
          .then(nextTick)
          .then(() => {
            this.checkStatus('enter');
            this.transitionEnded = false;
            this.setData({
              classes: classNames['enter-to']
            });
          })
          .catch(() => { });
      },
      leave() {
        if (!this.data.display) {
          return;
        }
        const { duration, name } = this.data;
        const classNames = getClassNames(name);
        const currentDuration = isObj(duration) ? duration.leave : duration;
        this.status = 'leave';
        this.triggerEvent('linbeforeleave');
        Promise.resolve()
          .then(nextTick)
          .then(() => {
            this.checkStatus('leave');
            this.triggerEvent('linleave');
            this.setData({
              classes: classNames.leave,
              currentDuration
            });
          })
          .then(nextTick)
          .then(() => {
            this.checkStatus('leave');
            this.transitionEnded = false;
            setTimeout(() => this.onTransitionEnd(), currentDuration);
            this.setData({
              classes: classNames['leave-to']
            });
          })
          .catch(() => { });
      },
      checkStatus(status) {
        if (status !== this.status) {
          throw new Error(`incongruent status: ${status}`);
        }
      },
      onTransitionEnd() {
        if (this.transitionEnded) {
          return;
        }
        this.transitionEnded = true;
        this.triggerEvent(`linafter${this.status}`);
        const { show, display } = this.data;
        if (!show && display) {
          this.setData({ display: false });
        }
      }
    }
  });
};
