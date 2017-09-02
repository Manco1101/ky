Page({
  data: {
    items: [
      "http://git.oschina.net/manco1101/kunyuan/blob/image/1.jpg",
      "../../images/2.JPG",
      "../../images/3.JPG",
      "../../images/4.JPG",
      "../../images/5.JPG",    "http://git.oschina.net/moyuan/mumu/blob/master/images/case-1.JPG"
    ],
    logo: "http://git.oschina.net/moyuan/mumu/raw/master/images/case-9.JPG",
    phone: '18820188210',
    baoye: {
      latitude: 31.026569, //纬度
      longitude: 121.73533299999997 //经度
    }
  },
  onCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  onLocation: function() {
    wx.openLocation({
      latitude: this.data.baoye.latitude,
      longitude: this.data.baoye.longitude,
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
      title: "坤元驾校"
    })
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
  }
})