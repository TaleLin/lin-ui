import versionUtil from './utils/version-util';
App({
  onLaunch: function() {
    // 检查更新
    versionUtil.checkUpdate();
  },

  globalData: {

  }
});
