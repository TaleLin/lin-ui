class DataUtil {
  /**
   * 设置差异数据
   * @param component
   * @param data
   */
  setDiffData(component, data) {
    const diffData = {};

    // 遍历获取到有差异的数据
    Object.keys(data).forEach(key => {
      if (component.data[key] !== data[key]) {
        diffData[key] = data[key];
      }
    });

    // 设置数据
    if (Object.keys(diffData).length) {
      component.setData(diffData);
    }
  }
}

const dataUtil = new DataUtil;
export default dataUtil;
