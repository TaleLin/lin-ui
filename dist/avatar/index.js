Component({
  externalClasses: [
    'l-class',
    'l-class-text',
    'l-text-class'
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
    text: String,
    src: String,
    openData: {
      type: Array,
      observer: '_initOpenData'
    },
    shape: {
      type: String,
      value: 'circle'
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    size: {
      type: Number,
      value: 120,
    },
    placement: {
      type: String,
      value: 'right'
    },
  },
  data: {
    _isHaveUserNickName: false,
    _isHaveUserAvatarUrl: false,
    _iconSize: '',
    _iconColor: '#ffffff'
  },
  methods: {
    _initOpenData: function (openData) {
      this._isHaveUserAvatarUrl(openData);
      this._isHaveUserNickName(openData);
    },

    _isHaveUserAvatarUrl: function (openData) {
      this.setData({
        _isHaveUserAvatarUrl: openData.indexOf('userAvatarUrl') !== -1
      });
    },

    _isHaveUserNickName: function (openData) {
      this.setData({
        _isHaveUserNickName: openData.indexOf('userNickName') !== -1
      });
    },
    tapAvatar: function (e) {
      this.triggerEvent('lintap', e, {
        bubbles: true,
        composed: true
      });
    },
  }
});