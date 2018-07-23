// pages/football.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"各位币友，welcome to here",
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    items: [
      {
        name: 'S',
        value: 'S',
        checked: 'true'
      },
      {
        name: 'O',
        value: 'O'
      },
      {
        name: 'N',
        value: 'N'
      },
      {
        name: 'G',
        value: 'G'
      },
      {
        name: 'SONG',
        value: 'SONG'
      }
    ],
    indicatorDots:false,
    autoplay:false,
    interval:5000,
    duration:1000

  },
  listenSwiper: function (e) {
    
  },
  clickButton: function (e) {
    console.log(e);
  },
// checkout
  listenCheckboxChange: function (e) {
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
