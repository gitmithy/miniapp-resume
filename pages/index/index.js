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
    ],
    education:[
      {
        school:"华中科技大学文华学院",
        major:"土木工程",
        year:"2011-2015",
        desc:"在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历"
      },
      {
        school:"华中科技大学文华学院",
        major:"土木工程",
        year:"2011-2015",
        desc:"在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历"
      }
    ],
    work:[
      {
        company:"上海东方数据广播有限公司",
        job:"前端开发工程师",
        year:"2019/04-至今",
        desc:"参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx"
      },
      {
        company:"十堰源创网络科技有限公司",
        job:"个人创业(开发，推广，运维等)",
        year:"2017/04-2018/12 ",
        desc:"参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx"
      },
      {
        company:"武汉学点网络科技有限公司",
        job:"前端开发工程师(偏移动端)",
        year:"2016/04-2017/04",
        desc:"参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx"
      },
      {
        company:"十堰日报社秦楚网",
        job:"前端开发工程师(偏PC端)",
        year:"2015/07-2016/04",
        desc:"参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx参与xxxxxx"
      },             
    ],
    project:[
      {
        name:"xx电商系统",
        desc:"该电商系统是O2O类型的新零售电商系统，分为购物子系统、支付子系统、数据库子系统、安全子系统、库存子系统、物流子系统和财务子系统。该核心架构采用了Activiti、shiro、QuartZ、Sculptor Boot、jabdp、jee-weapp、RocketMQ、kafka、Selenium、Echart、Vue、Element-UI、Uni-App、Swagger、ElasticSearch、Druid、Zookeeper，数据平台选择的是两种MySQL集群(Replication、PXC)，由MyCat管理，同时对MyCat做双机热备。NoSQL采用的是Redis Cluster集群和MongoDB集群"
      },
      {
        name:"XXX K13在线教育系统",
        desc:"该系统是针对中小学生提供的k13在线教育系统，采用的是视频点播形式，分为B/S形式和C/S形式。我主要负责的是教学视频管理业务。授课教师向K13平台上传教学视频后，经过专业人员剪辑之后，由K13平台调用腾讯云点播API接口，来实现在线转码和压缩，并且添加水印，最后生成防盗播的URL路径，渲染到HTML网页或者APP上面。该系统使用的技术栈包括springboot、springmvc、mybatis、springsecurity、kafka、QuartZ、Flowable，该系统最终部署在腾讯云平台"
      }
    ],
    introduction:"txtxtxtxt",
    // panel:[
    //   {
    //     name:"",
    //     desc:"",
    //     src:""
    //   }
    // ],
    // openspurce:[
    //   {

    //   }
    // ]
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