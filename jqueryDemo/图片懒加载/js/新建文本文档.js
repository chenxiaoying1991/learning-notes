//获取应用实例
const app = getApp()
// 校验手机号格式
Page({
  data: {
    userInfo: '',
    detail: '',
    showPhoneBox: '',
    phoneNumber: '',
    luckNumberBox: '',
    luckNumber: '',
    js_code: '',
    playInfo: '', // 参加游戏次数
    hasUserInfo: false,
    luckyBut: false,
    iphoneButNum: false,
    gameBules: false, // 游戏
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      userInfo: wx.getStorageSync('userInfo')
    });
    // 如果是登陆状态 去获取订单编号和可玩次数
    if (that.data.userInfo) {
      wx.request({
        url: 'http://php-admin.btcwealth.net/wechat/trade/check-user-info',
        method: 'POST',
        data: {
          openId: that.data.userInfo.open_id
        }, //参数为键值对字符串
        header: {
          //设置参数内容类型为x-www-form-urlencoded
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        success: function (res) {
          if (res.data.code == 200) {
            that.setData({
              playInfo: res.data.data
            })
          }
        }
      })
    }
  },
  // 选择我的幸运号码
  selectNum: function () {
    this.setData({
      showPhoneBox: true
    })
  },
  // 手机号input
  phoneNumberInput: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  // 提交手机号
  phoneSubmit: function (e) {
    let that = this
    var myreg = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
    if (that.data.phoneNumber.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (that.data.phoneNumber.length < 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else if (!myreg.test(that.data.phoneNumber)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    } else {
      that.setData({
        luckNumberBox: true,
        showPhoneBox: false,
      })
    }

  },
  // 幸运号码input
  luckNumberInput: function (e) {
    this.setData({
      luckNumber: e.detail.value
    })
  },

  // 幸运号码input
  luckNumSubmit: function (e) {
    let that = this
    if (that.data.luckNumber == 0) {
      wx.showToast({
        title: '输入有误',
        icon: 'success',
        duration: 1000
      })
      return
    }
    let paramsData = {
      number: that.data.luckNumber,
      mobile: that.data.phoneNumber,
      openId: that.data.userInfo.open_id
    }

    wx.request({
      url: 'http://php-admin.btcwealth.net/wechat/trade/first-number',
      method: 'POST',
      data: paramsData, //参数为键值对字符串
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == 200) {
          // wx.navigateTo({
          //   url: `/pages/logs/logs?openid=${this.data.userInfo.openId}&number=${this.data.playInfo.trade_no}`

          // })
        }
      }

    })
  },
  // 点击遮罩消失
  hideLuckNumBox: function () {
    this.setData({
      luckNumberBox: false,
      showPhoneBox: false,
      gameRules: false
    })
  },
  // 游戏的规则
  gameRule: function () {
    this.setData({
      gameRules: true
    })
  },
  // 查看幸运号码 跳转
  navaTo: function () {
    // wx.navigateTo({
    //   url: `/pages/logs/logs?openid=${this.data.userInfo.openId}&number=${this.data.playInfo.trade_no}`

    // })
    console.log(`/pages/index/index?openid=${this.data.userInfo.openId}&number=${this.data.playInfo.trade_no}`)
  },

  getUserInfo: function (e) {
    console.log(e);
    let that = this;
    if (e.detail.userInfo) {
      let paramsData = {
        jsCode: wx.getStorageSync('js_code'),
        userInfo: JSON.stringify(e.detail)
      }
      wx.request({
        url: 'http://php-admin.btcwealth.net/wechat/trade/login',
        method: 'POST',
        data: paramsData, //参数为键值对字符串
        header: {
          //设置参数内容类型为x-www-form-urlencoded
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.code == 200) {
            that.setData({
              userInfo: res.data.data
            })
             wx.setStorageSync('userInfo', res.data.data);

            // 授权完成再去调取接口
            wx.request({
              url: 'http://php-admin.btcwealth.net/wechat/trade/check-user-info',
              method: 'POST',
              data: {
                openId: that.data.userInfo.open_id
              }, //参数为键值对字符串
              header: {
                //设置参数内容类型为x-www-form-urlencoded
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
              },
              success: function (res) {
                if (res.data.code == 200) {
                  that.setData({
                    playInfo: res.data.data
                  })
                }
              }
            })
          }
        }
      })
    }
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '选号',
      path: 'pages/index/index'
    }
  },
})