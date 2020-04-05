// 过渡动画
import transition from '../behaviors/transition';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [transition(true)],
  externalClasses: [
    'l-class',
    'l-enter-class',
    'l-enter-active-class',
    'l-enter-to-class',
    'l-leave-class',
    'l-leave-active-class',
    'l-leave-to-class'
  ],

  /**
   * 组件的方法列表
   */
  methods: {

  }
});
