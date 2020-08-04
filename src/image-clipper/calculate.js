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
   * left_x：  裁剪框左边线距离视口最左侧两点位置 [3,4]
   * right_x： 裁剪框右边线距离视口最右侧两点位置 [1,2]
   * top_y：   裁剪框顶部线距离视口最顶部两点位置 [2,3]
   * bottom_y：裁剪框底部线距离视口最底部两点位置 [1,4]
   */
  // 用户体验优化，增加裁剪框四角可触摸区域
  const EXPAND_SIZE = 24;

  let left_x1 = cutX - EXPAND_SIZE;
  let left_x2 = cutX + EXPAND_SIZE;

  let top_y1 = cutY - EXPAND_SIZE;
  let top_y2 = cutY + EXPAND_SIZE;

  let right_x1 = cutX + clipWidth - EXPAND_SIZE;
  let right_x2 = cutX + clipWidth + EXPAND_SIZE;

  let bottom_y1 = cutY + clipHeight - EXPAND_SIZE;
  let bottom_y2 = cutY + clipHeight + EXPAND_SIZE;
  /*
   * 四角
   * (右下>>1 右上>>2 左上>>3 左下>>4)
   */
  let corner;

  const isRight = currentX > right_x1 && currentX < right_x2;
  const isLeft = currentX > left_x1 && currentX < left_x2;
  const isBottom = currentY > bottom_y1 && currentY < bottom_y2;
  const isTop = currentY > top_y1 && currentY < top_y2;

  if (isRight && isBottom) {
    corner = 1;
  } else if (isRight && isTop) {
    corner = 2;
  } else if (isLeft && isTop) {
    corner = 3;
  } else if (isLeft && isBottom) {
    corner = 4;
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
