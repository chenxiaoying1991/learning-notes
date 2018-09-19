// <!-- index.wxml -->
// <view class="index-page-box">
//   <image mode="{{item.mode}}" src="/images/program-pic.png" class="help-image"></image>
//   <!-- 和image同级 -->
//   <view class="same-level-box">
//     <!-- 下面的内容 -->
//     <view class="help-list-box">
//       <!-- 头部 -->
//       <!-- <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button> -->
//       <view class="information-rule">
//         <block wx:if="{{userInfo}}">
//           <image class="userinfo-avatar my-infor" src="{{userInfo.avatarUrl}}" mode="cover"></image>
//           <text class="userinfo-nickname">{{userInfo.nickName}}</text>
//         </block>
//         <block wx:else>
//           <image class="my-infor" src="{{}}"></image>
//           <view>用户名</view>
//         </block>
//         <view class="game-rule" bindtap="gameRule">游戏规则</view>
//       </view>
//       <!-- 中间 -->
//       <view class="help-list-banner" wx:if="{{!lotteryNum.length}}">
//         <image src="/images/banner.png" class="banner-img"></image>
//       </view>
//       <view class="help-list-number" wx:if="{{lotteryNum.length}}">
//         <view class="help-lucky-number" wx:for="{{lotteryNum}}" wx:key="index" wx:for-index="idx">
//           <image src="/images/red-num.png" wx:if="{{idx == 0}}"></image>
//           <image src="/images/blue-num.png" wx:else></image>
//           <view class="lucky-n">{{item}}</view>
//         </view>
//       </view>
//       <!-- 底部 -->
//       <view class="help-information">
//         <view style="font-size:30rpx;font-family:PingFangSC-Regular;color:rgba(255,255,255,1);">
//           助力榜:
//         </view>
//         <view class="number-view">
//           <image src="/images/uers-name.png" mode="scaleToFill"></image>
//         </view>
//         <view class="number-view">
//           <image src="/images/uers-name.png" mode="scaleToFill"></image>
//         </view>
//         <view class="number-view">
//           <image src="/images/uers-name.png" mode="scaleToFill"></image>
//         </view>
//         <view class="number-view">
//           <image src="/images/uers-name.png" mode="scaleToFill"></image>
//         </view>
//         <view class="number-view">
//           <image src="/images/uers-name.png" mode="scaleToFill"></image>
//         </view>
//       </view>
//     </view>
//     <!-- 下面的倒计时和点击按钮 -->
//     <view class="task-num" wx:if="{{userInfo}}">每日可参与{{playInfo.left_time}}次</view>
//     <button class="lucky-num" open-type="getUserInfo" bindgetuserinfo="getUserInfo" wx:if="{{!userInfo}}">
//       选择我的幸运号码
//     </button>
//     <view class="lucky-num" wx:if="{{userInfo && !playInfo}}" bindtap="selectNum">
//       选择我的幸运号码
//     </view>
//     <view class="lucky-num" wx:if="{{userInfo && playInfo}}" bindtap="navaTo">
//       查看我的幸运号码
//     </view>
//   </view>

//   <!-- 手机号码所有的弹窗 -->
//   <view class="lucky-pop" wx:if="{{showPhoneBox}}" bindtap="hideLuckNumBox"></view>
//   <!-- 手机号码的弹窗 -->
//   <view class="lucky-phone" wx:if="{{showPhoneBox}}">
//     <text class="entry-num">请输入手机号码</text>
//     <input class="entry-ipt" type="number" maxlength="11" bindinput="phoneNumberInput" />
//     <text class="phone-details">您所获得的活动奖励将发送到您手机号对应的账户中！</text>
//     <view class="phone-sub">
//       <button bindtap="onConfirm" data-status="confirm" bindtap="phoneSubmit">提 交</button>
//     </view>
//   </view>

//   <!-- 幸运数字的弹窗 -->
//   <view class="lucky-pop" wx:if="{{luckNumberBox}}" bindtap="hideLuckNumBox"></view>
//   <!-- 幸运的弹窗 -->
//   <view class="lucky-phone" wx:if="{{luckNumberBox}}">
//     <text class="entry-num">在1～49中选择您的 幸运数字</text>
//     <input class="entry-ipt" type="number" maxlength="11" bindinput="luckNumberInput" />
//     <text class="phone-details">您所获得的活动奖励将发送到您手机号对应的账户中！</text>
//     <view class="phone-sub">
//       <button bindtap="onConfirm" data-status="confirm" bindtap="luckNumSubmit">提 交</button>
//     </view>
//   </view>
//   <!-- 游戏规则 弹窗 和信息 -->
//   <view class="lucky-pop" wx:if="{{gameRules}}" bindtap="hideLuckNumBox"></view>
//   <view class="rules-content"></view>
// </view>