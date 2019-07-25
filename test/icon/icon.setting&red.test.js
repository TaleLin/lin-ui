const default_data = require('./icon.data');
const _ = require('../until');
const simulate = require('miniprogram-simulate');

describe('icon-setting&red', () => {
  const id = simulate.load(_('icon')); // 此处必须传入绝对路径
  const comp = simulate.render(id, {
    name: 'setting',
    color: 'red'
  }); // 渲染成自定义组件树实例
  const parent = document.createElement('parent-wrapper'); // 创建父亲节点
  comp.attach(parent); // attach 到父亲节点上，此时会触发自定义组件的 attached 钩子

  // 获取l_icon实例
  const l_icon = comp.querySelector('.l-icon');

  test('check_data', () => {
    const expect_data = default_data({ name: 'setting', color: 'red' });
    expect(comp.data).toEqual(expect_data);
  });
  test('check_html', () => {
    expect(comp.dom.innerHTML).toBe('<wx-view class="l-class l-class-self l-icon l-icon-setting" style="color:red;"></wx-view>');
  });
  test('color', () => {
    expect(window.getComputedStyle(l_icon.dom).color).toBe('red');
  });
});