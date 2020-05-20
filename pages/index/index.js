// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    // name:"xxx",
    // spell:"xxxxxxx"    
    name:"郑开源",
    spell:"Zheng KaiYuan",
    job:"前端开发工程师",
    exp:"5年开发经验3年前端经验",
    tel:"18800311889",
    sex:"男",
    age:"27",
    email:"zky2109@live.com",
    address:"上海市闵行区林恒路16号",
    skill:[
      {name:"javascript",percent:85,color:"#ff9165"},
      {name:"html",percent:75,color:"#28c581"},
      {name:"css",percent:65,color:"#28c581"},
      {name:"node",percent:55,color:"#4ed9ff"},
      {name:"vue",percent:85,color:"#ff9165"},
      {name:"react",percent:75,color:"#28c581"},
      {name:"echarts",percent:65,color:"#28c581"},
      {name:"typescript",percent:55,color:"#4ed9ff"},
      {name:"小程序",percent:85,color:"#ff9165"},
      {name:"uniapp",percent:75,color:"#28c581"},
      {name:"koa",percent:65,color:"#28c581"},
      {name:"docker",percent:55,color:"#ff9165"},
      {name:"linux",percent:45,color:"#4ed9ff"},
      {name:"php",percent:35,color:"#4ed9ff"}
    ]
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
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
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