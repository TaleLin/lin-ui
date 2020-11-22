import nodeUtil from '../core/utils/node-util';
import dataUtil from '../core/utils/data-util';
import eventUtil from '../core/utils/event-util';
import pixelUtil from '../core/utils/pixel-util';

// 默认的 Sidebar 数据
const defaultSidebarData = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


Component({

  externalClasses: [
    'l-tip-class', 'l-tip-text-class', 'l-sidebar-class', 'l-selected-class', 'l-unselected-class', 'l-sidebar-item-class'
  ],

  relations: {
    '../index-anchor/index': {
      type: 'child'
    }
  },

  options: {
    multipleSlots: true,
    pureDataPattern: /^_/
  },

  lifetimes: {
    attached() {
      this.init();
    }
  },

  properties: {
    // Anchor 是否吸附
    isStick: {
      type: Boolean,
      value: false
    },

    // 页面垂直滚动距离
    // 微信官方 onScrollTop() 监听函数获取
    scrollTop: {
      type: Number,
      value: 0
    },

    // Sidebar 显示的索引内容
    sidebarData: {
      type: Array,
      value: defaultSidebarData
    },

    // 是否显示 Sidebar
    showSidebar: {
      type: Boolean,
      value: true
    },

    // Anchor 吸附时距离顶部的距离（单位 rpx）
    stickOffsetTop: {
      type: Number,
      value: 0
    }
  },

  data: {
    // Sidebar 节点信息
    _sidebar: {
      top: 0,
      height: 0,
      sidebarItemCenterPoints: [],
      // 该变量用于标识是否正在滑动 Sidebar
      // 滑动侧栏的时候需要禁止页面滚动去改变 Sidebar 激活项
      // 不然会出现 Sidebar 激活项乱跳动的问题
      isMoving: false,
      // sidebar-item 节点 rect 信息
      sidebarItemRect: {}
    },
    // Anchor 节点信息
    _anchor: {
      // 每个 Anchor 距离页面顶部的像素
      anchorTopLocations: [],
      // index-anchor 所有组件实例
      indexAnchorComponents: [],
      // 当前吸附的 Anchor 索引
      currentStickAnchorIndex: -1,
      // 每个 Anchor 的高度
      anchorItemsHeight: []
    },
    // stickOffsetTop px数值
    _stickOffsetTopPx: 0,
    // 当前激活的索引项 的索引
    activeSidebarItem: 0,
    // Tip 提示绝对定位的top值
    tipTop: 0,
    // 是否显示 Tip
    showTip: false,
    // tip 高度
    tipHeight: 0
  },

  observers: {
    'scrollTop': function (scrollTop) {
      this.setIndexListStyle(scrollTop);
    },
    'stickOffsetTop': function (stickOffsetTop) {
      this.setData({
        _stickOffsetTopPx: pixelUtil.rpx2px(stickOffsetTop)
      });
    }
  },


  methods: {

    // ================================== 组件初始化函数 ==================================

    /**
     * 组件初始化函数，主要计算一些必要的信息
     * 该函数内的多个异步函数调用顺序非常重要，不要随意更改，否则会出错
     */
    async init() {
      // 解析 Sidebar Rect 信息
      await this.parseSidebarRect();
      // 解析 SidebarItem Rect 信息
      await this.parseSidebarItemRect();
      // 获取 index-anchor 所有组件实例
      await this.parseIndexAnchors();
      // 解析 Anchor Rect 信息
      this.parseAnchorRect();

      wx.lin = wx.lin || {};
      // 传入scrollTop的值的函数
      wx.lin.setScrollTop = (scrollTop) => {
        dataUtil.setDiffData(this, { scrollTop });
      };
    },

    // ================================== 节点信息获取函数 ==================================

    /**
     * 把 Sidebar 在页面中的位置信息存到 data 中
     */
    async parseSidebarRect() {
      const sidebarRect = await nodeUtil.getNodeRectFromComponent(this, '.sidebar');
      this.setData({
        ['_sidebar.height']: sidebarRect.height,
        ['_sidebar.top']: sidebarRect.top
      });
    },

    /**
     * 把 Sidebar 每个 Item 的中点位置存到 data 中
     * 用于 Tip 定位使用
     */
    async parseSidebarItemRect() {
      // Sidebar 索引个数
      const sidebarLength = this.data.sidebarData.length;
      // 获取 sidebar-item 节点
      const sidebarItemRect = await nodeUtil.getNodeRectFromComponent(this, '.sidebar-item');
      // Sidebar 单个索引高度(包含了 margin 空隙)
      const sidebarItemHeight = this.data._sidebar.height / sidebarLength;
      // Sidebar 单个索引真实高度
      const sidebarItemRealHeight = sidebarItemRect.height;
      // 获取 sidebar-item margin-top 属性
      const sidebarItemFields = await nodeUtil.getNodeFieldsFromComponent(this, '.sidebar-item', {
        computedStyle: ['margin-top']
      });
      // 获取 tip height 属性
      // 只能用 height 获取高度，因为 tip 旋转后，rect的宽高发生了变化
      const tipFields = await nodeUtil.getNodeFieldsFromComponent(this, '.tip', {
        computedStyle: ['height']
      });
      const sidebarItemCenterPoints = [];
      const sidebarItemMarginTop = sidebarItemFields['margin-top'].replace('px', '');

      for (let i = 1; i <= sidebarLength; i++) {
        sidebarItemCenterPoints.push((i * 2 - 1) * sidebarItemRealHeight / 2 + i * parseInt(sidebarItemMarginTop));
      }

      const tipHeight = parseInt(tipFields.height.replace('px', ''));
      this.setData({
        tipHeight,
        // tip 旋转后，中线位置下移了 20.5%
        tipHeightOverflow: tipHeight * 0.205,
        ['_sidebar.sidebarItemRect']: sidebarItemRect,
        ['_sidebar.sidebarItemHeight']: sidebarItemHeight,
        ['_sidebar.sidebarItemRealHeight']: sidebarItemRealHeight,
        ['_sidebar.sidebarItemCenterPoints']: sidebarItemCenterPoints
      });
    },

    /**
     * 获取所有的 index-anchor 节点实例
     */
    parseIndexAnchors() {
      // 获取该 index-list 内部所有的 index-anchor
      const indexAnchors = this.getRelationNodes('../index-anchor/index');

      // 没获取到节点实例的异常情况
      if (!indexAnchors) {
        console.error('获取 index-anchor 节点实例失败，请参考文档检查您的代码是否书写正确');
        return;
      }

      // 存入 data
      this.setData({
        ['_anchor.indexAnchorComponents']: indexAnchors
      });

      for (let i = 0; i < indexAnchors.length; i++) {
        indexAnchors[i].setData({
          anchorText: this.data.sidebarData[i]
        });
      }
    },

    /**
     * 把 Anchor 在页面中的位置信息存到 data 中
     */
    async parseAnchorRect() {
      // 每个 Anchor 距离页面顶部的像素
      const anchorTopLocations = [];
      // 每个 Anchor 的高度
      const anchorItemsHeight = [];
      // index-anchor 组件实例
      const indexAnchorComponents = this.data._anchor.indexAnchorComponents;

      for (const indexAnchorComponent of indexAnchorComponents) {
        // todo 此处获取 .anchor 节点，不知为什么在 index-anchor 组件中获取到的为空，后期再调研修改
        const anchorRect = await nodeUtil.getNodeRectFromComponent(indexAnchorComponent, '.anchor');
        if (anchorRect === null) {
          continue;
        }
        anchorTopLocations.push(anchorRect.top);
        anchorItemsHeight.push(anchorRect.height);
      }

      this.setData({
        // 每个 Anchor 距离页面顶部的像素
        ['_anchor.anchorTopLocations']: anchorTopLocations,
        // 每个 Anchor 的高度
        ['_anchor.anchorItemsHeight']: anchorItemsHeight
      });

    },

    // ================================== 页面元素控制函数 ==================================
    /**
     * 设置 Tip 显示隐藏
     * @param isShow 是否显示 Tip
     */
    switchTipShow(isShow) {
      dataUtil.setDiffData(this, {
        showTip: isShow
      });
    },

    /**
     * 切换 Sidebar 激活的选项
     * @param index 被激活选项的索引
     */
    switchSidebarIndex(index) {
      dataUtil.setDiffData(this, {
        activeSidebarItem: index,
      });
    },

    /**
     * 切换是否正在滑动 Sidebar
     */
    switchIsMovingSidebar(isMoving) {
      dataUtil.setDiffData(this, {
        ['_sidebar.isMoving']: isMoving
      });
    },

    /**
     * 根据 scrollTop 调整 Anchor、Sidebar 样式
     * @param scrollTop onScrollTop() 函数监听得到的值
     */
    setIndexListStyle(scrollTop) {
      // 当前应该激活的索引
      const currentShouldActiveIndex = this.countCurrentActiveIndex(scrollTop);
      if (currentShouldActiveIndex === undefined) {
        return;
      }

      // 设置 Anchor 的样式
      this.data.isStick && this.setAnchorStyle(scrollTop);
      // 激活 Sidebar 选项
      if (this.data.showSidebar && !this.data._sidebar.isMoving) {
        this.switchSidebarIndex(currentShouldActiveIndex);
      }
    },

    /**
     * 设置 Anchor 样式
     * @param scrollTop onScrollTop() 函数监听得到的值
     */
    setAnchorStyle(scrollTop) {
      const {
        // 每个 Anchor 距离页面顶部的 px 值
        anchorTopLocations,
        // 所有 Anchor 的高度
        anchorItemsHeight,
        // 所有 index-anchor 组件实例
        indexAnchorComponents
      } = this.data._anchor;

      // 当前应该激活的索引
      const currentShouldActiveIndex = this.countCurrentActiveIndex(scrollTop);

      // 当前应该激活的 index-anchor 组件实例
      const currentIndexAnchorComponent = indexAnchorComponents[currentShouldActiveIndex];
      // 当前应该激活的 Anchor top 值
      const currentIndexAnchorTop = anchorTopLocations[currentShouldActiveIndex];
      // 当前应该激活的 Anchor 高度
      const currentIndexAnchorHeight = anchorItemsHeight[currentShouldActiveIndex];

      // 下一个应该激活的 Anchor top 值
      const nextIndexAnchorTop = anchorTopLocations[currentShouldActiveIndex + 1];

      // stickOffsetTop px值
      const stickOffsetTop = this.data._stickOffsetTopPx;
      if (scrollTop + stickOffsetTop >= currentIndexAnchorTop && scrollTop + stickOffsetTop <= nextIndexAnchorTop - currentIndexAnchorHeight && !currentIndexAnchorComponent.isFixed()) {
        // 该条件下，当前 Anchor 应该设置为 fixed 布局，并把其他 Anchor 样式清空
        currentIndexAnchorComponent.setFixed(this.data.stickOffsetTop, currentIndexAnchorHeight);
        for (let i = 0; i < indexAnchorComponents.length; i++) {
          if (i !== currentShouldActiveIndex) {
            indexAnchorComponents[i].clearStyle();
          }
        }
      } else if (scrollTop + stickOffsetTop > nextIndexAnchorTop - currentIndexAnchorHeight && scrollTop + stickOffsetTop < nextIndexAnchorTop && !currentIndexAnchorComponent.isRelative()) {
        // 该条件下，当前 Anchor 应该设置为 relative 布局，并把其他 Anchor 样式清空
        currentIndexAnchorComponent.setRelative(nextIndexAnchorTop - currentIndexAnchorTop - currentIndexAnchorHeight);
        for (let i = 0; i < indexAnchorComponents.length; i++) {
          if (i !== currentShouldActiveIndex) {
            indexAnchorComponents[i].clearStyle();
          }
        }
      } else if (scrollTop + stickOffsetTop < currentIndexAnchorTop) {
        // 该条件下，清空所有 Anchor 样式
        for (let i = 0; i < indexAnchorComponents.length; i++) {
          indexAnchorComponents[i].clearStyle();
        }
      }
    },

    /**
     * 计算当前页面滚动到了第几个索引
     * @param scrollTop onScrollTop() 函数监听得到的值
     */
    countCurrentActiveIndex(scrollTop) {
      let result = 0;
      // 每个 Anchor 距离页面顶部的 px 值
      const { anchorTopLocations } = this.data._anchor;

      for (let i = 0; i < anchorTopLocations.length; i++) {
        if (scrollTop + this.data._stickOffsetTopPx < anchorTopLocations[i]) {
          result = i - 1;
          break;
        }
      }
      if (result < 0) {
        result = 0;
      }
      return result;
    },

    // ================================== 事件监听函数 ==================================

    /**
     * 监听 手指触摸后移动 事件
     * @param event 事件对象
     */
    onTouchMove(event) {
      // 显示 Tip
      this.switchTipShow(true);
      // 标识正在滑动 Sidebar
      this.switchIsMovingSidebar(true);

      // 取出 Sidebar 位置信息
      const { top: sidebarTop, sidebarItemHeight } = this.data._sidebar;
      // Sidebar 索引个数
      const sidebarLength = this.data.sidebarData.length;
      // 触摸点 Y 坐标
      const touchY = event.touches[0].clientY;
      // 计算当前触摸点在第几个索引处
      let index = Math.floor((touchY - sidebarTop) / sidebarItemHeight);

      // 滑动超过范围时限制索引边界值
      if (index < 0) {
        index = 0;
      } else if (index > sidebarLength - 1) {
        index = sidebarLength - 1;
      }

      // 选中的索引文字
      const tipText = this.data.sidebarData[index];
      dataUtil.setDiffData(this, {
        tipText,
        activeSidebarItem: index,
        tipTop: this.data._sidebar.sidebarItemCenterPoints[index]
      });

      // 页面应该滚动到的位置
      let scrollPageToLocation = this.data._anchor.anchorTopLocations[index] - this.data._stickOffsetTopPx;

      // 滚动页面到对应索引处
      wx.pageScrollTo({
        duration: 0,
        scrollTop: scrollPageToLocation
      });

      /**
       * fix issue1078
       * 当点击 sidebar 时，onTouchend 会先于 onTouchMove 执行
       * 导致滑动状态无法正常关闭，固此处添加一个延时状态修改（页面滚动需要一定时间）
       */
      event.type === 'tap' && setTimeout(() => {
        this.switchIsMovingSidebar(false);
      }, 100);

      // 触发 linselected 事件
      eventUtil.emit(this, 'linselected', { index, tipText });
    },

    /**
     * 监听 手指触摸动作结束 事件
     */
    onTouchend() {
      // 500 毫秒后隐藏 Tip
      setTimeout(() => {
        this.switchTipShow(false);
      }, 500);
      this.switchIsMovingSidebar(false);
    },

    /**
     * 监听 点击侧边栏
     */
    onTapSidebar(event) {
      // 把事件对象传入触摸滑动监听函数即可
      this.onTouchMove(event);
    }
  }
});
