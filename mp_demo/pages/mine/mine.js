const util = require("../../utils/util.js")
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expiresDate:{
      title:"VIP会员到期时间",
      date:new Date(),
      type:'date'
    },
    settings:[
      {
        title: "绑定手机号",       
        type: 'arrow',
        navigateTo:'/pages/mobile-bind/mobile-bind'
      },
      {
        title: "我的关注",
        type: 'arrow'
      },
      {
        title: "使用须知",
        type: 'arrow'
      },
      {
        title: "我的客服",
        type: 'arrow'
      },
      {
        title: "接受消息",
        type: 'switch'
      }
    ]
  },

  goToSettingsPage(e){
    wx.navigateTo({
      url: e.detail,
    })
    // console.log(e.detail)
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