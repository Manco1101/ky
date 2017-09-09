//app.js
var hotapp = require('utils/hotapp.js');
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    hotapp.init('hotapp246715652');
    hotapp.setDebug(true);
  },

  onError: function (msg) {
    //错误日志上传(开发中)
    hotapp.onError(msg, '1.0.0', function (err) {
      console.log(err)
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    hotapp: hotapp // 这里作为一个全局变量, 方便其它页面调用
  }
})