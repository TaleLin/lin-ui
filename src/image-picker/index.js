import nodeUtil from '../core/utils/node-util';
import deviceUtil from '../utils/device-util';
import eventUtil from '../core/utils/event-util';
import {promisic} from '../utils/util';

Component({

  options: {
    // 纯数据字段
    pureDataPattern: /urls|cells|preview|remove|sizeType|maxImageSize|clear/
  },
  behaviors: ['wx://form-field'],
  externalClasses: ['l-class', 'l-item-class'],
  properties: {
    // 图片 url 数组，与 cells 二选一传入
    urls: {
      type: Array,
      value: null
    },
    // 图片 url 对象数组，与 urls 二选一传入
    cells: {
      type: Array,
      value: null
    },
    // 每行可显示的个数
    size: {
      type: Number,
      value: null
    },
    // 图片显示模式
    mode: {
      type: String,
      value: 'aspectFit',
    },
    // 图片是否可预览
    preview: {
      type: Boolean,
      value: true
    },
    // 图片是否可被删除
    remove: {
      type: Boolean,
      value: true
    },
    // 最大可选择图片数量
    count: {
      type: Number,
      value: 9
    },
    sizeType: {
      // 该写法经测试有效
      type: Array | String,
      value: ['original', 'compressed']
    },
    // 所选图片最大限制，单位字节
    // 0 为无限制
    maxImageSize: {
      type: Number,
      value: 0,
    },
    // 清除 value
    clear: {
      type: Boolean,
      value: false
    },
    // 是否传入自定义 slot
    // 已弃用，直接传入 slot 即可，无需修改该属性
    // todo 1.0.0 移除
    custom: {
      type: Boolean,
      value: false
    },
    // 存放图片 url 的数组
    // 放在 properties 中是因为引入了 behaviors: ['wx://form-field'],
    // wx://form-field 中的 value 为 null，会引起很多报错
    // value 放在 data 中没有 properties 优先级高，覆盖不了
    // 所以只能放在此处
    value: {
      type: Array,
      value: []
    }
  },

  data: {
    // 根据 size 不同，计算的图片显示大小不同
    itemSizePercentage: null
  },

  observers: {

    /**
     * 监听 clear
     * @param clear
     */
    clear(clear) {
      if (clear) {
        console.warn('clear 属性已废弃，请使用 linClearImage 函数' +
          ' 或 urls 属性清空图片\n 详情信息参考：');
        this.setData({
          value: [],
          clear: false
        });
      }
    },

    /**
     * 监听 urls、cells 更新 value 字段
     * @param urls
     * @param cells
     */
    'urls,cells': function (urls, cells) {
      if (!urls && !cells) {
        return;
      }

      let value = [];
      if (urls) {
        value = urls;
      } else if (cells) {
        for (const cell of cells) {
          if (Object.prototype.hasOwnProperty.call(cell, 'url')) {
            value.push(cell.url);
          }
        }
      }

      this.setData({
        value: value.slice(0, this.data.count)
      });
    },

    /**
     * size 属性变化时，重新调整图片大小
     * @param size 新值
     */
    async size(size) {
      if (!size) {
        this.setData({itemSizePercentage: null});
        return;
      }

      // 获取 .lin-image-picker__container 容器宽度
      const res = await nodeUtil.getNodeRectFromComponent(this, '.lin-image-picker__container');
      const widthRpx = deviceUtil.px2rpx(res.right - res.left);

      // 根据容器宽度计算单张图片宽度百分比
      const itemSizePercentage = ((10 / size * 10) - 20 / widthRpx * 100) + '%;';
      this.setData({itemSizePercentage});
    },

    custom(custom) {
      if (custom) {
        console.warn('custom 已弃用，请勿使用该属性，直接传入 slot 即可');
      }
    }
  },

  methods: {

    // ============== 事件监听函数 =============

    /**
     * 点击图片触发的事件
     * 进行图片预览，抛出自定义事件
     * @param e
     */
    onTapImage(e) {
      const that = this;
      const value = this.data.value;
      const imageIndex = e.currentTarget.dataset.imageIndex;
      const imageUrl = value[imageIndex];
      const detail = {
        all: value,
        index: imageIndex,
        current: imageUrl
      };

      eventUtil.emit(this, 'lintap', detail);

      // 预览图片
      if (this.data.preview) {
        wx.previewImage({
          urls: value,
          current: imageUrl,
          success() {
            eventUtil.emit(that, 'linpreview', detail);
          }
        }, true);
      }
    },

    /**
     * 点击删除按钮触发的事件
     * @param e 事件对象
     */
    onTapRemove(e) {
      const value = this.data.value;
      const imageIndex = e.currentTarget.dataset.imageIndex;
      const imageUrl = value[imageIndex];
      const detail = {
        all: value,
        index: imageIndex,
        current: imageUrl
      };

      eventUtil.emit(this, 'linremovetap', detail);

      if (this.data.remove) {
        this._removeImageByIndex(imageIndex);
      }
    },

    /**
     * 点击添加按钮触发的事件
     * @returns {Promise<void>}
     */
    async onTapAdd() {
      let {value, count, sizeType, maxImageSize} = this.data;
      const remainCount = count - value.length;
      if (value.length >= count || remainCount <= 0) {
        return;
      }

      // 调用微信 api 选择图片
      const chooseImageRes = await promisic(wx.chooseImage)({
        count: remainCount,
        sizeType,
        sourceType: ['album', 'camera'],
      });

      // 即将被添加的图片的 url 数组
      const addImageUrlArray = [];
      // 超过了大小限制的图片的 url 数组，不会被添加到 image-picker 中
      const oversizeImageUrlArray = [];

      chooseImageRes.tempFiles.forEach((tempFile) => {
        const {path, size} = tempFile;
        if (size > maxImageSize && maxImageSize > 0) {
          oversizeImageUrlArray.push(path);
        } else {
          addImageUrlArray.push(path);
        }
      });

      // 赋值并触发事件
      this.setData({
        value: value.concat(addImageUrlArray)
      }, () => {
        const detail = {
          all: this.data.value,
          current: addImageUrlArray,
          oversize: oversizeImageUrlArray
        };
        eventUtil.emit(this, 'linadd', detail);
        // todo 1.0.0 版本去除 linchange 事件
        eventUtil.emit(this, 'linchange', detail);
        // todo 1.0.0 版本去除 linoversize 事件
        eventUtil.emit(this, 'linoversize', detail);
      });
    },

    /**
     * 供 Form 组件调用的取值方法
     * @returns {*}
     */
    getValues() {
      return this.data.value;
    },

    // ======= 内部函数 =========
    /**
     * 根据图片索引删除图片
     * @param index 图片索引
     * @private
     */
    _removeImageByIndex(index) {
      const value = this.data.value;
      const current = value[index];
      value.splice(index, 1);

      const detail = {
        index,
        current,
        all: value
      };
      this.setData({value}, () => {
        eventUtil.emit(this, 'linremove', detail);
      });
    },

    // ============== 开放函数 ==============
    /**
     * 删除图片
     * @param imageIndex 图片索引
     */
    linRemoveImage(imageIndex) {
      this._removeImageByIndex(imageIndex);
    },

    /**
     * 清空所有图片
     * 不会触发 linremove 事件
     */
    linClearImage() {
      this.setData({
        value: []
      });
    },

    /**
     * 获取所有 url 图片链接
     * @returns {Array<String>}
     */
    linGetValue() {
      return this.data.value;
    }
  }
});
