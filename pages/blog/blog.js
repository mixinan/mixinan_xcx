// var blogsData = require('../../data/blog-data.js')

Page({

   /**
    * 页面的初始数据
    */
   data: {

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.getBlogListData();
   },


   getBlogListData: function () {
      var that = this;
      wx.request({
         url: "http://47.93.3.163:8080/mixinan/blog/getWeiboByPage.do?pageno=1&blogno=10",
         method: 'GET',
         header: {
            "Content-Type": "json"
         },
         success: function (res) {
            var weiboList=[];
            var response = res.data;
            var data = response.data;
            for(var idx in data){
               var weibo = data[idx];
               weibo.blog.mi_blog_text = decodeURI(weibo.blog.mi_blog_text);
               weiboList.push(weibo);
            }

            var result = {
               weibos:response.data
            };
            that.setData(result);
         },
         fail: function (error) {
            // fail
            console.log(error)
         }
      })
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