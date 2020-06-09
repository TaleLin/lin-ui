class NodeUtil {
  /**
   * 获取组件内部节点位置信息（单个）
   * @param component 组件实例
   * @param selector {String} css选择器
   * @returns boundingClientRect() 回调函数的值
   */
  async getNodeRectFromComponent(component, selector) {
    return await new Promise((resolve) => {
      component
        .createSelectorQuery()
        .select(selector)
        .boundingClientRect((res) => {
          resolve(res);
        }).exec();
    });
  }

  /**
   * 获取组件内部节点位置信息（多个）
   * @param component 组件实例
   * @param selector {String} css选择器
   * @returns boundingClientRect() 回调函数的值
   */
  async getNodesRectFromComponent(component, selector) {
    return await new Promise((resolve) => {
      component
        .createSelectorQuery()
        .selectAll(selector)
        .boundingClientRect((res) => {
          resolve(res);
        }).exec();
    });
  }

  async getNodeFieldsFromComponent(component, selector, fields) {
    return await new Promise((resolve) => {
      component
        .createSelectorQuery()
        .select(selector)
        .fields(fields, (res) => {
          resolve(res);
        }).exec();
    });
  }
}

const nodeUtil = new NodeUtil();
export default nodeUtil;
