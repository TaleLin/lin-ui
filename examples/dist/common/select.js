function getCtx(selector) {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件');
    return null;
  }
  return componentCtx;
}

// 调用showToast
function selectToast(options) {
  const { selector = '#toast' } = options;
  const ctx = getCtx(selector);

  ctx.handleShow(options);
}

// 调用showMessage
function selectMessage(options) {
  const { selector = '#message' } = options;
  const ctx = getCtx(selector);

  ctx.handleShow(options);
}

module.exports = {
  $Toast: selectToast,
  $Message: selectMessage
};