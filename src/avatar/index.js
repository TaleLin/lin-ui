Component({
  externalClasses: ['l-class', 'l-class-text'],
  properties: {
    icon: String,
    text: String,
    iconStyle: {
      type: String,
      observer: '_parseCSSText'
    },
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
    _parseCSSText: function parseCSSText(cssText) {
      var cssTxt = cssText.replace('/\/\*(.|\s)*?\*\//g', ' ').replace('/\s+/g', ' ');
      var style = {};
      var properties = cssTxt.split(';').map(function (o) {
        return o.split(':').map(function (x) {
          return x && x.trim();
        });
      });
      properties.forEach(function (property) {
        var key = property[0];
        var value = property[1];
        style[key] = value;
      });

      this.setData({
        _iconSize: style.size || this.data.size * 0.6,
        _iconColor: style.color || '#ffffff',
      });
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
      this.triggerEvent('lintap', {
        e
      }, { bubbles: true, composed: true });
    },
  }
});