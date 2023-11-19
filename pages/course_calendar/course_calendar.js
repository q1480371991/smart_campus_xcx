// pages/course_calendar/course_calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minDate:new Date(2023, 8, 1).getTime(),
    maxDate:new Date(2023, 11, 31).getTime(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onSelectDate:function(event){
    const date=event.detail;
    const year = date.getFullYear(); // 获取年份
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，并补齐两位数
    const day = String(date.getDate()).padStart(2, '0'); // 获取日期，并补齐两位数
    const formattedDate = `${year}-${month}-${day}`; // 格式化日期为 'yyyy-MM-dd'
    console.log(formattedDate); // 输出格式化后的日期字符串
  }
  
})