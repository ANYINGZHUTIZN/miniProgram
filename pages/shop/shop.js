Page({
  data: {
    showModal: false,
    selectList: ['全部', '1-100', '100-500', '500-5000', '5000以上'],
    showToast: false,
    loading: false,
    goodsList: [{
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      },
      {
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      },
      {
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      },
      {
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      },
      {
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      },
      {
        "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
        "id": 99,
        "imgOssServer": "https://img-t1.rrzuji.cn",
        "init_sell_num": 450,
        "is_free_shipping": 1,
        "need_coin": 1650,
        "need_pay": "0.00",
        "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
        "price": "26.00",
        "sell_num": 0,
        "sort": 9994,
        "tags": "新品",
        "target_id": "",
        "title": "便携式勺筷餐具套装",
        "total_num": 999,
        "type": 1
      }
    ]
  },

  showModal() {
    this.setData({
      showModal: true
    });
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  showToast() {
    this.setData({
      showToast: true
    });
    setTimeout(() => {
      this.setData({
        showToast: false
      });
    }, 3000);
  },
 onReachBottom () {
    let goodsList=this.data.goodsList
    this.setData({
      loading: true
    });
   setTimeout(()=>{
    goodsList.push(goodsList[0],goodsList[0])
    this.setData({
      goodsList:goodsList,
      loading: false
    })
   },3000)
  }
});