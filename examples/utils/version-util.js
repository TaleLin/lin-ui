// 小程序启动时检查版本
class VersionUtil {
  /**
   * 检查更新
   */
  checkUpdate(){
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate((hasUpdate)=>{
      if(hasUpdate){
        updateManager.onUpdateReady(()=>{
          wx.showModal({
            title:'更新提示',
            content:'有新版本啦！要更新看看吗',
            success(res){
              if(res.confirm){
                updateManager.applyUpdate();
              }
            }
          });
        });

        updateManager.onUpdateFailed(function () {
          // 新版本下载失败
          wx.showModal({
            title: '更新提示',
            content: '有新版本啦！删除当前小程序，重新打开就能更新啦！'
          });
        });
      }
    });


  }
}

const versionUtil = new VersionUtil();
export default versionUtil;
