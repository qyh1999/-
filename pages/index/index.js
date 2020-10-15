//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   name:[]
  },
  getBanner(){
    var thas = this
    wx.request({
      url:'https://api.it120.cc/xiaochengxu/banner/list',
      success(res){
        console.log(res.data.data)
        thas.setData({
          name:res
        })
      },
      fail(err){
        console.log(err)
      }
    })
  },
  
  onLoad: function () {
   this.getBanner()
  },
  bofang(val){
    console.log(111111)
  }

})
