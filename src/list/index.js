import hover from '../behaviors/hover';

Component({
  behaviors:[hover],
  relations: {
    '../list/index': {
      type: 'parent', // 关联的目标节点应为子节点
      linked() {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged() {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked() {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },

  options: {
    multipleSlots: true
  },
  externalClasses: [
    'l-class',
    'l-class-icon',
    'l-icon-class',
    'l-class-image',
    'l-image-class',
    'l-class-right',
    'l-right-class',
    'l-class-content',
    'l-content-class',
    'l-class-desc',
    'l-desc-class',
    'l-link-icon-class'
  ],
  properties: {
    icon: String,
    iconColor: {
      type: String,
      value: '#3963BC'
    },
    iconSize: {
      type: String,
      value: '28'
    },
    image: String,
    title: String,
    desc: String,
    tagPosition: {
      type: String,
      value: 'left'
    },
    tagContent: String,
    tagShape: {
      type: String,
      value: 'square'
    },
    tagColor: String,
    tagPlain: Boolean,
    badgePosition: {
      type: String,
      value: 'left'
    },
    dotBadge: Boolean,
    badgeCount: Number,
    badgeMaxCount: {
      type: Number,
      value: 99
    },
    badgeCountType: {
      type: String,
      value: 'overflow'
    },
    rightDesc: String,
    gap: Number,
    leftGap: Number,
    rightGap: Number,
    isLink: {
      type: Boolean,
      value: true,
    },
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: String

  },

  methods: {
    tapcell: function (e) {
      const {
        linkType,
        url
      } = e.currentTarget.dataset;
      if (url) {
        wx[linkType]({
          url
        });
      }
      this.triggerEvent('lintap', {
        e
      }, { bubbles: true, composed: true });
    }
  }
});
