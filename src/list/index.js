import hover from '../behaviors/hover';

Component({
  behaviors:[hover],
  options: {
    multipleSlots: true
  },
  externalClasses: [
    'l-class',
    'l-icon-class',
    'l-image-class',
    'l-right-class',
    'l-content-class',
    'l-desc-class',
    'l-link-icon-class'
  ],
  properties: {
    icon: String,
    iconColor: {
      type: String,
      value: null
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
