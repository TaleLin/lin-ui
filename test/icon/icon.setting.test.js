const default_data = require('./icon.data');
const _ = require('../until');
const simulate = require('miniprogram-simulate');

describe('icon-setting', () => {
  const id = simulate.load(_('icon')); // 此处必须传入绝对路径
  const comp = simulate.render(id, {
    name: 'setting'
  }); // 渲染成自定义组件树实例
  const parent = document.createElement('parent-wrapper'); // 创建父亲节点
  comp.attach(parent); // attach 到父亲节点上，此时会触发自定义组件的 attached 钩子

  // 获取l_icon实例
  test('check_data', () => {
    const expect_data = default_data({name:'setting'})
    expect(comp.data).toEqual(expect_data);

  });
  test('check_html', () => {
    expect(comp.dom.innerHTML).toBe('<wx-view class="l-class l-class-self l-icon l-icon-setting" style=""></wx-view>');
  });
});