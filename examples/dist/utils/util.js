const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (error) => {
          reject(error);
        }
      });
      func(args);
    });
  };
};

const px2rpx = function (pxNumber) {
  const { screenWidth } = wx.getSystemInfoSync();
  return (750 / screenWidth) * pxNumber;
};

export {
  promisic,
  px2rpx
};
