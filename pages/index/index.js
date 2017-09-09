Page({
  data: {
    motto: 'Hello World',
    userInfo: '',
    items: [
"https://raw.githubusercontent.com/Manco1101/ky/master/images/1.jpg",      "https://raw.githubusercontent.com/Manco1101/ky/master/images/2.jpg",      "https://raw.githubusercontent.com/Manco1101/ky/master/images/3.jpg",      "https://raw.githubusercontent.com/Manco1101/ky/master/images/4.jpg", "https://raw.githubusercontent.com/Manco1101/ky/master/images/5.jpg",    "https://raw.githubusercontent.com/Manco1101/ky/master/images/6.jpg",
    ],
    logo: "https://raw.githubusercontent.com/Manco1101/ky/master/images/7.jpg",
    phone: '18820188210',
    baoye: {
      latitude: 22.672531, //纬度
      longitude: 114.042125 ,//经度
      name:" 坤元驾校",
    }
 
  },
  onCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../feedback/index'
    })
  
  },

  //扫一扫
  scanCode: function () {
    wx.scanCode({
      success: (res) => {

        this.setData({
          userInfo: res.result
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  onLocation: function() {
    wx.openLocation({
      latitude: this.data.baoye.latitude,
      longitude: this.data.baoye.longitude,
      name:this.data.baoye.name,
      address:" 广东省深圳市龙华区清泉富景大夏4楼410",
      scale: 28
    })
  },

  previewItem: function(e){
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: this.data.items
    })
  },

  onLoad: function() {
    var that = this
    wx.setNavigationBarTitle({
      title: " "
    })
    
    wx.showNavigationBarLoading()
    setTimeout(function () {
      wx.hideNavigationBarLoading()
    }, 3000)

    wx.getSystemInfo({
      success: function(res){
        var windowWidth = res.windowWidth
        var imageBoxWidth = windowWidth * 0.92
        var itemSize = imageBoxWidth * 0.954 / 3
        var itemAway = imageBoxWidth * 0.04 / 2
        that.setData({
          windowWidth: windowWidth,
          itemSize: itemSize,
          itemAway: itemAway
        })
      }
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

    
  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏


  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }


})