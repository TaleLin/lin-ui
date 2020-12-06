/**
 * 判断手指触摸位置
 *
 * @param {*} cutX
 * @param {*} cutY
 * @param {*} clipWidth
 * @param {*} clipHeight
 * @param {*} currentX
 * @param {*} currentY
 * @returns
 */
export function determineDirection(cutX, cutY, clipWidth, clipHeight, currentX, currentY) {
  /*
   * (右下>>1 右上>>2 左上>>3 左下>>4)
   */

  let corner;

  /**
   * fix & optimize #1129
   * 思路：（利用直角坐标系）
   *  1.找出裁剪框中心点
   *  2.如点击坐标在上方点与左方点区域内，则点击为左上角
   *  3.如点击坐标在下方点与右方点区域内，则点击为右下角
   *  4.其他角同理
   */
  const mainPoint = [cutX + clipWidth / 2, cutY + clipHeight / 2]; // 中心点
  const currentPoint = [currentX, currentY]; // 触摸点

  if (currentPoint[0] <= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 3; // 左上
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 2; // 右上
  } else if (currentPoint[0] <= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 4; // 左下
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 1; // 右下
  }

  return corner;
}

/**
 * 图片边缘检测检测时，计算图片偏移量
 *
 * @param {*} data
 * @param {*} scale
 * @returns
 */
export function calcImageOffset(data, scale) {
  let left = data.imageLeft;
  let top = data.imageTop;
  scale = scale || data.scale;

  let imageWidth = data.imageWidth;
  let imageHeight = data.imageHeight;
  if ((data.angle / 90) % 2) {
    imageWidth = data.imageHeight;
    imageHeight = data.imageWidth;
  }
  const {
    cutX,
    clipWidth,
    cutY,
    clipHeight
  } = data;
  // 当前图片宽度/高度
  const currentImageSize = (size) => (size * scale) / 2;
  const currentImageWidth = currentImageSize(imageWidth);
  const currentImageHeight = currentImageSize(imageHeight);

  left = cutX + currentImageWidth >= left ? left : cutX + currentImageWidth;
  left = cutX + clipWidth - currentImageWidth <= left ? left : cutX + clipWidth - currentImageWidth;
  top = cutY + currentImageHeight >= top ? top : cutY + currentImageHeight;
  top = cutY + clipHeight - currentImageHeight <= top ? top : cutY + clipHeight - currentImageHeight;
  return {
    left,
    top,
    scale
  };
}

/**
 * 图片边缘检测时，计算图片缩放比例
 *
 * @param {*} data
 * @param {*} scale
 * @returns
 */
export function calcImageScale(data, scale) {
  scale = scale || data.scale;
  let imageWidth = data.imageWidth;
  let imageHeight = data.imageHeight;
  if ((data.angle / 90) % 2) {
    imageWidth = data.imageHeight;
    imageHeight = data.imageWidth;
  }
  if (imageWidth * scale < data.clipWidth) {
    scale = data.clipWidth / imageWidth;
  }
  if (imageHeight * scale < data.clipHeight) {
    scale = Math.max(scale, data.clipHeight / imageHeight);
  }
  return scale;
}

/**
 * 计算图片尺寸
 *
 * @export
 * @param {*} width
 * @param {*} height
 * @param {*} data
 * @returns
 */
export function calcImageSize(width, height, data) {
  // 默认按图片最小边 = 对应裁剪框尺寸
  let imageWidth = width,
    imageHeight = height;
  if (imageWidth && imageHeight) {
    if (imageWidth / imageHeight > (data.clipWidth || data.width) / (data.clipWidth || data.height)) {
      imageHeight = data.clipHeight || data.height;
      imageWidth = (width / height) * imageHeight;
    } else {
      imageWidth = data.clipWidth || data.width;
      imageHeight = (height / width) * imageWidth;
    }
  } else {
    let sys = data._SYS_INFO || wx.getSystemInfoSync();
    imageWidth = sys.windowWidth;
    imageHeight = 0;
  }
  return {
    imageWidth,
    imageHeight
  };
}

/**
 * 勾股定理求斜边
 *
 * @param {*} width
 * @param {*} height
 * @returns
 */
export function calcPythagoreanTheorem(width, height) {
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

/**
 * 拖动裁剪框时计算
 *
 * @export
 * @param {*} data
 * @param {*} event
 * @returns
 */
export function clipTouchMoveOfCalculate(data, event) {
  const clientX = event.touches[0].clientX;
  const clientY = event.touches[0].clientY;

  const {
    clipWidth,
    clipHeight,
    cutY: oldCutY,
    cutX: oldCutX,
    _CUT_START,
    lockRatio
  } = data;
  let {
    maxWidth,
    minWidth,
    maxHeight,
    minHeight
  } = data;
  maxWidth = maxWidth / 2;
  minWidth = minWidth / 2;
  minHeight = minHeight / 2;
  maxHeight = maxHeight / 2;
  let width = clipWidth,
    height = clipHeight,
    cutY = oldCutY,
    cutX = oldCutX,
    // 获取裁剪框实际宽度/高度
    // 如果大于最大值则使用最大值
    // 如果小于最小值则使用最小值
    size_correct = () => {
      width = width <= maxWidth ? (width >= minWidth ? width : minWidth) : maxWidth;
      height = height <= maxHeight ? (height >= minHeight ? height : minHeight) : maxHeight;
    },
    size_inspect = () => {
      if ((width > maxWidth || width < minWidth || height > maxHeight || height < minHeight) && lockRatio) {
        size_correct();
        return false;
      } else {
        size_correct();
        return true;
      }
    };
  height = _CUT_START.height + (_CUT_START.corner > 1 && _CUT_START.corner < 4 ? 1 : -1) * (_CUT_START.y - clientY);
  switch (_CUT_START.corner) {
  case 1:
    width = _CUT_START.width - _CUT_START.x + clientX;
    if (lockRatio) {
      height = width / (clipWidth / clipHeight);
    }
    if (!size_inspect()) return;
    break;
  case 2:
    width = _CUT_START.width - _CUT_START.x + clientX;
    if (lockRatio) {
      height = width / (clipWidth / clipHeight);
    }
    if (!size_inspect()) return;
    cutY = _CUT_START.cutY - (height - _CUT_START.height);
    break;
  case 3:
    width = _CUT_START.width + _CUT_START.x - clientX;
    if (lockRatio) {
      height = width / (clipWidth / clipHeight);
    }
    if (!size_inspect()) return;
    cutY = _CUT_START.cutY - (height - _CUT_START.height);
    cutX = _CUT_START.cutX - (width - _CUT_START.width);
    break;
  case 4:
    width = _CUT_START.width + _CUT_START.x - clientX;
    if (lockRatio) {
      height = width / (clipWidth / clipHeight);
    }
    if (!size_inspect()) return;
    cutX = _CUT_START.cutX - (width - _CUT_START.width);
    break;
  default:
    break;
  }

  return {
    width,
    height,
    cutX,
    cutY
  };
}

/**
 * 单指拖动图片计算偏移
 *
 * @export
 * @param {*} data
 * @param {*} clientXForLeft
 * @param {*} clientYForLeft
 * @returns
 */
export function imageTouchMoveOfCalcOffset(data, clientXForLeft, clientYForLeft) {
  let left = clientXForLeft - data._touchRelative[0].x,
    top = clientYForLeft - data._touchRelative[0].y;
  return {
    left,
    top
  };
}
