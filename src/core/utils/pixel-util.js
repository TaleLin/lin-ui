/**
 * 像素工具
 */
class PixelUtil {
  /**
   * 构造函数
   * @param systemInfo 设备信息
   */
  constructor(systemInfo) {
    this.systemInfo = systemInfo;
  }

  /**
   * px 转 rpx
   * @param pxNumber px数值
   * @returns {number} rpx数值
   */
  px2rpx(pxNumber) {
    return (750 /  this.systemInfo.screenWidth) * pxNumber;
  }

  /**
   * rpx 转 px
   * @param rpxNumber rpx数值
   * @returns {number} px数值
   */
  rpx2px(rpxNumber){
    return (rpxNumber / 750) * this.systemInfo.screenWidth;
  }
}

const pixelUtil = new PixelUtil(wx.getSystemInfoSync());
export default pixelUtil;
