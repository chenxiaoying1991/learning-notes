//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },
  //分享功能
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/logs/logs.wxml'
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    var that = this;
    wx.request({
      url: 'http://api.winchainos.com/api/activity/match/v1/guess/getGuessList',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData(
          {
            list: res.data[0]
          }
        )

      }
    })
    //调用微信扫一扫
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    //获取用户的地理位置
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
    // ,
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  }
})
