import dataUtil from '../core/utils/data-util';
import eventUtil from '../core/utils/event-util';
import {
  determineDirection,
  calcImageOffset,
  calcImageScale,
  calcImageSize,
  calcPythagoreanTheorem,
  clipTouchMoveOfCalculate,
  imageTouchMoveOfCalcOffset
} from './calculate';
const detail = true;
// 模拟enum
const IMAGE_TYPE = {
  base64: 'base64',
  url: 'url'
};
Component({
  externalClasses: ['l-class'],
  relations: {
    '../image-clipper-tools/index': {
      type: 'child'
    }
  },
  options: {
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 组件显示隐藏
    show: {
      type: Boolean,
      value: false
    },
    // 组件层级
    zIndex: {
      type: Number,
      value: 99
    },
    // 图片url
    imageUrl: {
      type: String
    },
    // 生成的图片类型
    type: {
      type: String,
      options: ['url', 'base64'],
      value: 'url'
    },
    // 生成的图片质量
    quality: {
      type: Number,
      value: 1
    },
    // 裁剪框宽度
    width: {
      type: Number,
      value: 400
    },
    // 裁剪框高度
    height: {
      type: Number,
      value: 400
    },
    // 裁剪框最小宽度
    minWidth: {
      type: Number,
      value: 200
    },
    // 裁剪框最大宽度
    maxWidth: {
      type: Number,
      value: 600
    },
    // 裁剪框最小高度
    minHeight: {
      type: Number,
      value: 200
    },
    // 裁剪框最大高度
    maxHeight: {
      type: Number,
      value: 600
    },
    // 是否锁定裁剪框宽度	
    lockWidth: {
      type: Boolean,
      value: false
    },
    // 是否锁定裁剪框高度	
    lockHeight: {
      type: Boolean,
      value: false
    },
    // 是否锁定裁剪框比例	
    lockRatio: {
      type: Boolean,
      value: true
    },
    // 生成图片相对于裁剪框的比例
    scaleRatio: {
      type: Number,
      value: 1
    },
    // 图片最小缩放比
    minRatio: {
      type: Number,
      value: 0.5
    },
    // 图片最大缩放比
    maxRatio: {
      type: Number,
      value: 2
    },
    // 是否禁止缩放
    disableScale: {
      type: Number,
      value: false
    },
    // 是否禁止旋转
    disableRotate: {
      type: Number,
      value: false
    },
    // 是否限制移动范围	
    limitMove: {
      type: Boolean,
      value: false
    },
    // 是否显示选择图片按钮
    checkImage: {
      type: Boolean,
      value: true
    },
    checkImageIcon: {
      type: String,
      value: './images/photo.png'
    },
    // 是否显示顺时针旋转按钮
    rotateAlong: {
      type: Boolean,
      value: true
    },
    rotateAlongIcon: {
      type: String,
      value: './images/rotate-along.png'
    },
    // 是否显示逆时针旋转按钮
    rotateInverse: {
      type: Boolean,
      value: true
    },
    rotateInverseIcon: {
      type: String,
      value: './images/rotate-inverse.png'
    },
    // 是否显示确定按钮
    sure: {
      type: Boolean,
      value: true
    },
    sureIcon: {
      type: String,
      value: './images/sure.png'
    },
    // 是否显示关闭按钮
    close: {
      type: Boolean,
      value: true
    },
    closeIcon: {
      type: String,
      value: './images/close.png'
    },
    // 旋转按钮每次旋转的角度
    rotateAngle: {
      type: Number,
      value: 90
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    CANVAS_WIDTH: 0,
    CANVAS_HEIGHT: 0,
    cutX: 0, // 裁剪框x轴起点，可用于裁剪框left区域宽度
    cutY: 0, // 裁剪框y轴起点，可用于裁剪框top区域高度
    clipWidth: 0, // 裁剪框宽度
    clipHeight: 0, // 裁剪框高度
    cutAnimation: false, //是否开启图片和裁剪框过渡
    imageWidth: 0, // 图片宽度
    imageHeight: 0, // 图片高度
    imageTop: 0, // 图片上边距
    imageLeft: 0, // 图片左边距
    scale: 1, // 图片缩放比
    angle: 0, // 图片旋转角度
    _SYS_INFO: {},
    _MOVE_THROTTLE: null, // 触摸移动节流setTimeout
    _MOVE_THROTTLE_FLAG: true, // 节流标识
    _TIME_CUT_CENTER: null, // 自动居中节流函数
    _flagCutTouch: false, // 是否开始拖动裁剪框
    _flagEndTouch: false, // 是否结束拖动裁剪框
    _CUT_START: {}, // 拖动裁剪框所需数据
    _cutAnimationTime: null,
    _touchRelative: [{
      x: 0,
      y: 0
    }], // 手指或鼠标和图片中心的相对位置
    _hypotenuseLength: 0, // 双指触摸时斜边长度
    _ctx: null, // canvas上下文
  },
  /**
   * 组件监听器
   */
  observers: {
    // 监听图片url改变，获取图片信息
    'imageUrl'(url) {
      if (!url) return;
      this.imageReset();
      wx.showLoading({
        title: '请稍候...',
        mask: true
      });
      wx.getImageInfo({
        src: url,
        success: res => {
          // 计算图片尺寸
          this.imgComputeSize(res.width, res.height);
          if (this.properties.limitMove) {
            // 限制移动，不留空白处理
            this.imgMarginDetectionScale();
            eventUtil.emit(this, 'linimageready', res);
          }
        },
        fail: () => {
          this.imgComputeSize();
          if (this.properties.limitMove) {
            this.imgMarginDetectionScale();
          }
        }
      });
    },
    'clipWidth, clipHeight'(widthVal, heightVal) {
      let { minWidth, minHeight } = this.data;
      minWidth = minWidth / 2;
      minHeight = minHeight / 2;
      if (widthVal < minWidth) {
        dataUtil.setDiffData(this, { clipWidth: minWidth });
      }
      if (heightVal < minHeight) {
        dataUtil.setDiffData(this, { clipHeight: minHeight });
      }
      this.computeCutSize();
    },
    'rotateAngle'(val) {
      dataUtil.setDiffData(this, { cutAnimation: true, angle: val });
    },
    'angle'(val) {
      this.moveStop();
      const {
        limitMove
      } = this.properties;
      if (limitMove && val % 90) {
        dataUtil.setDiffData(this, { angle: Math.round(val / 90) * 90 });
      }
      this.imgMarginDetectionScale();
    },
    'cutAnimation'(val) {
      // 开启过渡260毫秒之后自动关闭
      clearTimeout(this.data._cutAnimationTime);
      if (val) {
        let _cutAnimationTime = setTimeout(() => {
          dataUtil.setDiffData(this, { cutAnimation: false });
        }, 260);
        dataUtil.setDiffData(this, { _cutAnimationTime });
      }
    },
    'limitMove'(val) {
      if (val) {
        if (this.data.angle % 90) {
          dataUtil.setDiffData(this, { angle: Math.round(this.data.angle / 90) * 90 });
        }
        this.imgMarginDetectionScale();
      }
    },
    'cutY, cutX'() {
      this.cutDetectionPosition();
    },
    'width, height'(width, height) {
      if(width !== this.width) {
        dataUtil.setDiffData(this, {clipWidth: width / 2});
      }
      if(height !== this.height) {
        dataUtil.setDiffData(this, {clipHeight: height / 2});
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 设置裁剪框的一些信息
     */
    setCutInfo() {
      const {
        width,
        height
      } = this.properties;
      const {
        _SYS_INFO
      } = this.data;
      // 本组件动态style默认单位为px，需将用户传入值/2
      const clipWidth = width / 2;
      const clipHeight = height / 2;
      const cutY = (_SYS_INFO.windowHeight - clipHeight) / 2;
      const cutX = (_SYS_INFO.windowWidth - clipWidth) / 2;
      const imageLeft = _SYS_INFO.windowWidth / 2;
      const imageTop = _SYS_INFO.windowHeight / 2;
      const _ctx = wx.createCanvasContext('image-clipper', this);
      this.setData({
        clipWidth,
        clipHeight,
        cutX,
        cutY,
        CANVAS_HEIGHT: clipHeight,
        CANVAS_WIDTH: clipWidth,
        _ctx,
        imageLeft,
        imageTop
      });
    },
    /**
     * 裁剪框居中
     */
    setCutCenter() {
      const { sysInfo, clipHeight, clipWidth, imageTop, imageLeft } = this.data;
      let sys = sysInfo || wx.getSystemInfoSync();
      let cutY = (sys.windowHeight - clipHeight) * 0.5;
      let cutX = (sys.windowWidth - clipWidth) * 0.5;
      this.setData({ 
        imageTop: imageTop - this.data.cutY + cutY, 
        imageLeft: imageLeft - this.data.cutX + cutX, 
        cutY, 
        cutX 
      });
    },
    /**
     * 开始拖动裁剪框
     * 需在此处查找到是否拖动的裁剪框四角
     */
    clipTouchStart(event) {
      if (!this.properties.imageUrl) {
        wx.showToast({
          title: '请选择图片',
          icon: 'none'
        });
        return;
      }
      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const { cutX, cutY, clipWidth, clipHeight } = this.data;
      const corner = determineDirection(cutX, cutY, clipWidth, clipHeight, currentX, currentY);
      this.moveDuring();
      const _CUT_START = {
        width: clipWidth,
        height: clipHeight,
        x: currentX,
        y: currentY,
        cutY,
        cutX,
        corner
      };
      this.setData({ _flagCutTouch: true, _flagEndTouch: true, _CUT_START });
    },
    /**
     * 拖动裁剪框
     * 当拖动的裁剪框区域时处理数据
     */
    clipTouchMove(event) {
      if (!this.properties.imageUrl) {
        wx.showToast({
          title: '请选择图片',
          icon: 'none'
        });
        return;
      }
      // fix & optimize #1129
      // 只针对单指点击做处理
      if (event.touches.length !== 1) {
        return;
      }
      const { _flagCutTouch, _MOVE_THROTTLE_FLAG } = this.data;
      if (_flagCutTouch && _MOVE_THROTTLE_FLAG) {
        const { lockRatio, lockHeight, lockWidth } = this.properties;
        if (lockRatio && (lockWidth || lockHeight)) return;
        dataUtil.setDiffData(this, { _MOVE_THROTTLE_FLAG: false });
        this.moveThrottle();
        const clipData = clipTouchMoveOfCalculate(this.data, event);
        // fix #1129
        // 原因：未做 clipTouchMoveOfCalculate 方法返回 undefined 值处理
        if(clipData) {
          const { width, height, cutX, cutY } = clipData;
          if (!lockWidth && !lockHeight) {
            dataUtil.setDiffData(this, { clipWidth: width, clipHeight: height, cutX, cutY });
          } else if (!lockWidth) {
            dataUtil.setDiffData(this, { clipWidth: width, cutX });
          } else if (!lockHeight) {
            dataUtil.setDiffData(this, { clipHeight: height, cutY });
          }
          this.imgMarginDetectionScale();
        }
      }
    },
    /**
     * 拖动裁剪框结束
     * 当拖动的裁剪框区域时处理数据
     */
    clipTouchEnd() {
      this.moveStop();
      this.setData({ _flagCutTouch: false });
    },
    /**
     * 清空之前的自动居中延迟函数
     */
    moveDuring() {
      clearTimeout(this.data._TIME_CUT_CENTER);
    },
    /**
     * 停止移动时需要做的操作
     * 清空之前的自动居中延迟函数并添加最新的
     */
    moveStop() {
      clearTimeout(this.data._TIME_CUT_CENTER);
      const _TIME_CUT_CENTER = setTimeout(() => {
        //动画启动
        if (!this.data.cutAnimation) {
          dataUtil.setDiffData(this, { cutAnimation: true });
        }
        this.setCutCenter();
      }, 800);
      dataUtil.setDiffData(this, { _TIME_CUT_CENTER });
    },
    /**
     * 重置延迟函数
     */
    moveThrottle() {
      if (this.data._SYS_INFO.platform === 'android') {
        clearTimeout(this.data._MOVE_THROTTLE);
        const _MOVE_THROTTLE = setTimeout(() => {
          dataUtil.setDiffData(this, {  _MOVE_THROTTLE_FLAG: true });
        }, 800 / 40);
        dataUtil.setDiffData(this, { _MOVE_THROTTLE });
      } else {
        dataUtil.setDiffData(this, { _MOVE_THROTTLE_FLAG: true });
      }
    },
    /**
     * 图片初始化
     */
    imageReset() {
      const sys = this.data._SYS_INFO || wx.getSystemInfoSync();
      this.setData({ scale: 1, angle: 0, imageTop: sys.windowHeight / 2, imageLeft: sys.windowWidth / 2 });
    },
    /**
     * 图片加载完成
     */
    imageLoad() {
      this.imageReset();
      wx.hideLoading();
      eventUtil.emit(this, 'linimageload', detail);
    },
    /**
     * 计算图片尺寸
     */
    imgComputeSize(width, height) {
      const { imageWidth, imageHeight } = calcImageSize(width, height, this.data);
      this.setData({ imageWidth, imageHeight });
    },
    /**
     * 图片边缘检测-缩放
     */
    imgMarginDetectionScale(scale) {
      if (!this.properties.limitMove) return;
      const currentScale = calcImageScale(this.data, scale);
      this.imgMarginDetectionPosition(currentScale);
    },
    /**
     * 图片边缘检测-位置
     */
    imgMarginDetectionPosition(scale) {
      if (!this.properties.limitMove) return;
      const { scale: currentScale, left, top } = calcImageOffset(this.data, scale);
      dataUtil.setDiffData(this, { imageLeft: left, imageTop: top, scale: currentScale });
    },
    /**
     * 开始图片触摸
     */
    imageTouchStart(e) {
      this.setData({ _flagEndTouch: false });
      const { imageLeft, imageTop } = this.data;
      // 双指左指坐标
      const clientXForLeft = e.touches[0].clientX;
      const clientYForLeft = e.touches[0].clientY;

      let _touchRelative = [];
      if (e.touches.length === 1) {
        // 单指拖动
        _touchRelative[0] = {
          x: clientXForLeft - imageLeft,
          y: clientYForLeft - imageTop
        };
        this.setData({ _touchRelative });
      } else {
        // 双指右指坐标
        const clientXForRight = e.touches[1].clientX;
        const clientYForRight = e.touches[1].clientY;
        // 双指放大
        let width = Math.abs(clientXForLeft - clientXForRight);
        let height = Math.abs(clientYForLeft - clientYForRight);
        // 勾股定理求出斜边长度
        const _hypotenuseLength = calcPythagoreanTheorem(width, height);

        _touchRelative = [{
          x: clientXForLeft - imageLeft,
          y: clientYForLeft - imageTop
        },
        {
          x: clientXForRight - imageLeft,
          y: clientYForRight - imageTop
        }
        ];
        this.setData({_touchRelative, _hypotenuseLength});
      }
    },
    /**
     * 图片放大旋转等操作
     */
    imageTouchMove(e) {
      const {
        _flagEndTouch,
        _MOVE_THROTTLE_FLAG
      } = this.data;
      if (_flagEndTouch || !_MOVE_THROTTLE_FLAG) return;
      // 双指左指坐标
      const clientXForLeft = e.touches[0].clientX;
      const clientYForLeft = e.touches[0].clientY;

      dataUtil.setDiffData(this, { _MOVE_THROTTLE_FLAG: false });
      this.moveThrottle();
      this.moveDuring();
      if (e.touches.length === 1) {
        //单指拖动
        const { left, top } = imageTouchMoveOfCalcOffset(this.data, clientXForLeft, clientYForLeft);
        dataUtil.setDiffData(this, { imageLeft: left, imageTop: top});
        // 图像边缘检测,防止截取到空白
        this.imgMarginDetectionPosition();
      } else {
        // 双指右指坐标
        const clientXForRight = e.touches[1].clientX;
        const clientYForRight = e.touches[1].clientY;
        // 双指放大
        let width = Math.abs(clientXForLeft - clientXForRight),
          height = Math.abs(clientYForLeft - clientYForRight),
          // 勾股定理求出斜边长度
          hypotenuse = calcPythagoreanTheorem(width, height), // 斜边
          scale = this.data.scale * (hypotenuse / this.data._hypotenuseLength);
        // 计算出真实缩放倍率
        // 如果禁止缩放则倍率一直为1
        if (this.properties.disableScale) {
          scale = 1;
        } else {
          scale = scale <= this.properties.minRatio ? this.properties.minRatio : scale;
          scale = scale >= this.properties.maxRatio ? this.properties.maxRatio : scale;
          eventUtil.emit(this, 'linsizechange', {
            imageWidth: this.data.imageWidth * scale,
            imageHeight: this.data.imageHeight * scale
          });
        }

        this.imgMarginDetectionScale(scale);
        dataUtil.setDiffData(this, {
          _hypotenuseLength: Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)),
          scale
        });
      }
    },
    /**
     * 图片手指触摸结束
     */
    imageTouchEnd() {
      dataUtil.setDiffData(this, { _flagEndTouch: true });
      this.moveStop();
    },

    /**
     * 检测剪裁框位置是否在允许的范围内(屏幕内)
     */
    cutDetectionPosition() {
      const { cutX, cutY, _SYS_INFO, clipHeight, clipWidth } = this.data;
      let cutDetectionPositionTop = () => {
          //检测上边距是否在范围内
          if (cutY < 0) {
            dataUtil.setDiffData(this, { cutY: 0 });
          }
          if (cutY > _SYS_INFO.windowHeight - clipHeight) {
            dataUtil.setDiffData(this, { cutY: _SYS_INFO.windowHeight - clipHeight });
          }
        },
        cutDetectionPositionLeft = () => {
          //检测左边距是否在范围内
          if (cutX < 0) {
            dataUtil.setDiffData(this, { cutX: 0 });
          }
          if (cutX > _SYS_INFO.windowWidth - clipWidth) {
            dataUtil.setDiffData(this, { cutX: _SYS_INFO.windowWidth - clipWidth });
          }
        };
      //裁剪框坐标处理（如果只写一个参数则另一个默认为0，都不写默认居中）
      if (cutY === null && cutX === null) {
        let newCutY = (_SYS_INFO.windowHeight - clipHeight) * 0.5;
        let newCutX = (_SYS_INFO.windowWidth - clipWidth) * 0.5;
        dataUtil.setDiffData(this, {
          cutX: newCutX, // 截取的框上边距
          cutY: newCutY // 截取的框左边距
        });
      } else if (cutY !== null && cutX !== null) {
        cutDetectionPositionTop();
        cutDetectionPositionLeft();
      } else if (cutY !== null && cutX === null) {
        cutDetectionPositionTop();
        dataUtil.setDiffData(this, { cutX: (_SYS_INFO.windowWidth - clipWidth) / 2 });
      } else if (cutY === null && cutX !== null) {
        cutDetectionPositionLeft();
        dataUtil.setDiffData(this, { cutY: (_SYS_INFO.windowHeight - clipHeight) / 2 });
      }
    },
    /**
     * 改变截取框大小
     */
    computeCutSize() {
      const { clipHeight, clipWidth, _SYS_INFO, cutX, cutY } = this.data;
      if (clipWidth > _SYS_INFO.windowWidth) {
        // 设置裁剪框宽度
        dataUtil.setDiffData(this, { clipWidth: _SYS_INFO.windowWidth });
      } else if (clipWidth + cutX > _SYS_INFO.windowWidth) {
        dataUtil.setDiffData(this, { cutX: _SYS_INFO.windowWidth - cutX });
      }
      if (clipHeight > _SYS_INFO.windowHeight) {
        // 设置裁剪框高度
        dataUtil.setDiffData(this, { clipHeight: _SYS_INFO.windowHeight });
      } else if (clipHeight + cutY > _SYS_INFO.windowHeight) {
        dataUtil.setDiffData(this, { cutY: _SYS_INFO.windowHeight - cutY });
      }
    },
    /**
     * 获取图片数据
     */
    getImageData() {
      if (!this.properties.imageUrl) {
        wx.showToast({
          title: '请选择图片',
          icon: 'none'
        });
        return;
      }
      wx.showLoading({
        title: '加载中'
      });

      const { clipHeight, clipWidth, _ctx, scale, imageLeft, imageTop, cutX, cutY, angle } = this.data;
      let { CANVAS_HEIGHT, CANVAS_WIDTH } = this.data;
      const { scaleRatio, imageUrl, quality, type: imageType } = this.properties;
      // 绘制函数
      const draw = () => {
        // 图片真实大小
        const imageWidth = this.data.imageWidth * scale * scaleRatio;
        const imageHeight = this.data.imageHeight * scale * scaleRatio;
        // canvas和图片的相对距离
        const xpos = imageLeft - cutX;
        const ypos = imageTop - cutY;
        // 旋转画布
        _ctx.translate(xpos * scaleRatio, ypos * scaleRatio);
        _ctx.rotate((angle * Math.PI) / 180);
        _ctx.drawImage(imageUrl, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
        _ctx.draw(false, () => {
          let params = {
            width: clipWidth * scaleRatio,
            height: Math.round(clipHeight * scaleRatio),
            destWidth: clipWidth * scaleRatio,
            destHeight: Math.round(clipHeight) * scaleRatio,
            fileType: 'png',
            quality
          };

          let data = {
            url: '',
            base64: '',
            width: clipWidth * scaleRatio,
            height: clipHeight * scaleRatio
          };

          if (IMAGE_TYPE.base64 === imageType) {
            wx.canvasGetImageData({
              canvasId: 'image-clipper',
              x: 0,
              y: 0,
              width: clipWidth * scaleRatio,
              height: Math.round(clipHeight * scaleRatio),
              success: res => {
                const arrayBuffer = new Uint8Array(res.data);
                const base64 = wx.arrayBufferToBase64(arrayBuffer);
                data.url = base64;
                data.base64 = base64;
                wx.hideLoading();
                eventUtil.emit(this, 'linclip', data);
              }
            });
          } else {
            wx.canvasToTempFilePath({
              ...params,
              canvasId: 'image-clipper',
              success: res => {
                data.url = res.tempFilePath;
                data.base64 = res.tempFilePath;
                wx.hideLoading();
                eventUtil.emit(this, 'linclip', data);
              },
              fail(res) {
                throw res;
              }
            },
            this
            );
          }
        });
      };

      if (CANVAS_WIDTH !== clipWidth || CANVAS_HEIGHT !== clipHeight) {
        CANVAS_WIDTH = clipWidth;
        CANVAS_HEIGHT = clipHeight;
        _ctx.draw();
        setTimeout(() => {
          draw();
        }, 100);
      } else {
        draw();
      }
    },
    /**
     * 上传图片
     */
    uploadImage() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          this.setData({ imageUrl: tempFilePaths });
        }
      });
    },
    /**
     * 工具栏旋转
     */
    rotate(event) {
      if (this.properties.disableRotate) return;
      if (!this.properties.imageUrl) {
        wx.showToast({
          title: '请选择图片',
          icon: 'none'
        });
        return;
      }
      const { rotateAngle } = this.properties;
      const originAngle = this.data.angle;
      const type = event.currentTarget.dataset.type;
      if (type === 'along') {
        this.setData({  angle: originAngle + rotateAngle });
      } else {
        this.setData({ angle: originAngle - rotateAngle});
      }
      eventUtil.emit(this, 'linrotate', { currentDeg: this.data.angle });
    },
    /**
     * 关闭
     */
    close() {
      this.setData({ show: false });
    },
    /**
     * 空方法，占位用
     */
    doNothing() {}
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    ready() {
      const _SYS_INFO = wx.getSystemInfoSync();
      this.setData({ _SYS_INFO });
      this.setCutInfo();
      this.setCutCenter();
      this.computeCutSize();
      this.cutDetectionPosition();
    }
  }
});
