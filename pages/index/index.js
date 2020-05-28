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
    age:"26",
    wx:"VocaBerry",
    git:"gitmithy",
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
        desc:"在校期间在满足本专业相关课程学习中便积极开展参与网络社区,制作了相关兴趣论坛，博客的页面前端,自学lnmp基础等"
      }
      // ,
      // {
      //   school:"华中科技大学文华学院",
      //   major:"土木工程",
      //   year:"2011-2015",
      //   desc:"在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历在校经历"
      // }
    ],
    work:[
      {
        company:"上海东方数据广播有限公司",
        job:"前端开发工程师",
        year:"2019/04-至今",
        desc: `
        主要参与公司日常toc业务，诸如客户PC+手机端官网，客户活动页面H5动效交互实现，客户移动端单页面应用诸如抗疫展览手机专题，涵盖了点赞，投票，展示等功能
        参与了公司工作内容管理系统后台界面研发，使用了echarts+vue技术栈对员工绩效进行展示，
        对公司相关类似业务进行了组件封装，诸如css样式封装，日常界面交互js功能封装等
        
        在日常活动专题中使用vue react等技术栈优化业务，个人独立承担单一功能单页面的全套功能开发。在类H5推广页面中使用canvas动画进行动效制作丰富效果。在公司业务尝试中，进行了大屏数据展示类项目的研究。
        
        帮助带动公司技术栈发展，推进工作流程规范，推广相关新技术的普及学习使用。
        `
      },
      {
        company:"十堰源创网络科技有限公司",
        job:"个人创业(开发，推广，运维等)",
        year:"2017/04-2018/12 ",
        desc:`                属个人创业期间参与本地公司业务的推广和实施，根据客户需求定制PC，手机，微信端多端功能展示。
        在推广业务的过程中，积极向客户推广小程序业务的使用和实施
        期间个人进行了多个公司业务定制的开发和维护，针对客户的多种需求进行定向定制，诸如国际化，投稿平台，反馈平台等
        在发展个人开发业务能力的同时，也发展了个人业务推广能力，谈判能力和后期运行维护能力`
      },
      {
        company:"武汉学点网络科技有限公司",
        job:"前端开发工程师(偏移动端)",
        year:"2016/04-2017/04",
        desc:`            进行公司微信端活动页面定制开发，参与公司多个微信推广类项目整体实施，诸如阅读赚钱，徒弟推广等类微信营销类业务的页面和交互功能及前后端交互联调等。
       
        进行了公司微信营销系统后台界面功能界面定制开发，在公司要求下使用前端框架定制了满足公司需求的后台模板，同时向其中加入了多种满足公司公众号日常业务的便利性功能，诸如交互式微信编辑器，自动回复编辑等
        在公司要求下对相关js功能进行封装成类库，方便公司后端在相关使用中进行直接调用
        工作之余积极参与社区开源开发可用于生产的前端UI库，js功能库等，并将其运用于日常生产实践`
      },
      {
        company:"十堰日报社秦楚网",
        job:"前端开发工程师(偏PC端)",
        year:"2015/07-2016/04",
        desc:`
        主要参与公司对企事业单位官网及专题页面制作，
        在满足客户对页面效果的要求同时，同时对政企事业单位对页面的兼容性进行修复和整理，尽量满足兼容性不出问题
        在提升前端开发业务能力的同时对自己进行查漏补缺。<br> 紧跟目前框架潮流，同时进行个人开源demo项目维护。
        在工作中快速提升了业务开发效率，同时进行复用整理，大大缩减了相关类似项目的开发速度，为之后的进一步积累埋下了坚实基础
        `
      },             
    ],
    project:[
      {
        name:"xxxxxxx",
        desc:"该电商系统是O2O类型的新零售电商系统，分为购物子系统、支付子系统、数据库子系统、安全子系统、库存子系统、物流子系统和财务子系统。该核心架构采用了Activiti、shiro、QuartZ、Sculptor Boot、jabdp、jee-weapp、RocketMQ、kafka、Selenium、Echart、Vue、Element-UI、Uni-App、Swagger、ElasticSearch、Druid、Zookeeper，数据平台选择的是两种MySQL集群(Replication、PXC)，由MyCat管理，同时对MyCat做双机热备。NoSQL采用的是Redis Cluster集群和MongoDB集群"
      },
      {
        name:"XXXxxxxx",
        desc:"该系统是针对中小学生提供的k13在线教育系统，采用的是视频点播形式，分为B/S形式和C/S形式。我主要负责的是教学视频管理业务。授课教师向K13平台上传教学视频后，经过专业人员剪辑之后，由K13平台调用腾讯云点播API接口，来实现在线转码和压缩，并且添加水印，最后生成防盗播的URL路径，渲染到HTML网页或者APP上面。该系统使用的技术栈包括springboot、springmvc、mybatis、springsecurity、kafka、QuartZ、Flowable，该系统最终部署在腾讯云平台"
      }
    ],
    introduction:`
    我于2015年入职毕业正式成为一名前端工程师，本着对编程学习的热爱，在大学期间便开始学习相关技术，搭建博客，制作博客主题。
    在工作上乐于与同事展开业务讨论和交流，分享彼此经验共同提升自我，查漏补缺。在工作认真负责兢兢业业的同时
也会利用工作之余抓住每个间隙认真学习拓展自我技能，
积极参与程序员社区交流，分享个人学习代码经验，
在面对任务时，认真负责提前思考规划后续工作进展所面临的问题。
面对客户时，第一时间响应客户需求，针对客户需求会选用多种技术方法竭力达成客户需求。
由于单独开展过本地完整项目，有项目从开展到对接，开发，实施，维护，等相关经验及思维需求。
希望在接下来的工作中与各位志同仁人一同结交朋友一同进步！`


    
    ,
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