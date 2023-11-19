// pages/classroom/classroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	"classroomname":"",
	"classroomtype":"",
	"campus":"",
	"capacity":"",
	"device":"",
	"starttime":null,
	"endtime": null,
	"mystarttime": new Date().getTime(),
	"myendtime": new Date().getTime(),


	// minHour: 10,
    // maxHour: 20,
    minDate: new Date(2023, 8, 1).getTime(),
    maxDate: new Date(2023, 11, 31).getTime(),
    
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
  publish:function(){
	  console.log(this.data.classroomname);
  },
  onInput1(event) {
	const timestamp=event.detail
	const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);
    this.setData({
      starttime: formattedTime,
	});
	
  },
  onInput2(event) {
	const timestamp=event.detail
	const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);
    this.setData({
      endtime: formattedTime,
	});
  },
})