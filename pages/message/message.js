Page({
  data: {
    showModal: false,
    showToast: false,
    dialogDelRead: false,
    tabs: [{
        title: '活动公告',
        showDot: true
      },
      {
        title: '订单消息',
        showDot: true
      }
    ],
    listData: [
      [{
          title: '活动通知',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '华为遥遥领先',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '免费得iPhone11',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '免费得iPhone15',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '活动通知',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '华为遥遥领先',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '免费得iPhone11',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },
        {
          title: '免费得iPhone15',
          content: '恭喜获得20个租币，请查收',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        }
      ],
      [{
          title: '订单已取消',
          content: '订单已成功取消，感谢您的关注',
          date: '2020-03-23',
          time: "14:30",
          isRead: false

        },
        {
          title: '订单已支付',
          content: '订单已成功',
          date: '2020-03-23',
          time: "14:30",
          isRead: false
        },

      ]
    ],
    currentTab: 0,
    deleteListId: '',
    loading: false,
    isPullDownRefresh: false, // 是否在下拉刷新,
  },

  onReachBottom() {
    let currentTab = this.data.currentTab
    if (this.data.listData[currentTab].length >= 12) {
      return
    } else {
      this.getdata();
    }
  },

  //计算tab dot显示
  changeTabDot() {
    let currentTab = this.data.currentTab
    let listData = this.data.listData
    if (listData[currentTab].length < 1) {
      this.data.tabs[currentTab].showDot = false
      return
    }
    listData[currentTab].some(v => {
      if (!v.isRead) {
        this.data.tabs[currentTab].showDot = true
        this.setData({
          tabs: this.data.tabs
        })
      } else {
        this.data.tabs[currentTab].showDot = false
        this.setData({
          tabs: this.data.tabs
        })
      }
    })
  },
  //加载列表数据
  async getdata() {
    let currentTab = this.data.currentTab
    this.setData({
      loading: true
    });
    setTimeout(() => {
      this.data.listData[currentTab].push({
        title: '华为遥遥领先',
        content: '恭喜获得20个租币，请查收',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString().slice(0, 5)
      })
      this.setData({
        listData: this.data.listData
      })
      this.setData({
        loading: false,
        isPullDownRefresh: false
      })
      my.stopPullDownRefresh()
    }, 3000);
    this.changeTabDot()
  },
  //tab切换
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index,
    });
    this.changeTabDot()
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
    this.showToast()
  },

  //底部提示
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
  //删除已读 弹窗
  delAllRead() {
    this.setData({
      dialogDelRead: !this.data.dialogDelRead
    });
  },

  //获取点击列表下标
  getListIndex(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      deleteListId: index
    })
  },

  //删除单项列表数据
  deleteList() {
    this.setData({
      showModal: false
    });
    let currentTab = this.data.currentTab
    let deleteListId = this.data.deleteListId
    this.data.listData[currentTab].splice(deleteListId, 1)
    this.setData({
      listData: this.data.listData
    })
    this.changeTabDot()
  },
  //已读确定
  getReadOk() {
    this.hideModal()
    let currentTab = this.data.currentTab
    let deleteListId = this.data.deleteListId
    this.data.listData[currentTab][deleteListId]['isRead'] = true;
    this.setData({
      listData: this.data.listData
    })
    this.changeTabDot()
  },
  //删除已读通知弹窗确定
  modalOk() {
    let currentTab = this.data.currentTab;
    let newList = this.data.listData[currentTab].filter(v => !v.isRead)
    this.data.listData[currentTab] = newList
    this.setData({
      listData: this.data.listData
    });
    this.changeTabDot()
    this.setData({
      dialogDelRead: !this.data.dialogDelRead
    });

  },

  //删除已读通知弹窗取消
  modalCancel() {
    this.setData({
      dialogDelRead: !this.data.dialogDelRead
    });
  },
  //一键已读
  readAll() {
    let currentTab = this.data.currentTab;
    let listData = this.data.listData
    listData[currentTab].forEach(v => v.isRead = true)
    this.setData({
      listData: this.data.listData
    });
    this.changeTabDot()
  }
});