Page({
  data: {
   singIn:false
  },
  changeSign(){
    this.setData({
      singIn:!this.data.singIn
    })
  }
});
