// components/activity-card/activity-card.js

// 做点什么 - 选项
const activityOptions = [
  { text: '看小说', icon: '📚' },
  { text: '买买买', icon: '🛍️' },
  { text: '打游戏', icon: '🎮' },
  { text: '玩俩猫', icon: '🐱' },
  { text: '刷视频', icon: '📱' },
  { text: '看综艺', icon: '📺' },
  { text: '玩桌游', icon: '🎲' },
  { text: '整点吃的', icon: '🍔' },
  { text: '打扫卫生', icon: '🧹' },
  { text: '去散步', icon: '🚶' },
  { text: '跳个操', icon: '💃' },
  { text: '出去玩', icon: '🎉' },
  { text: '打万万', icon: '🥊' },
  { text: '练个字', icon: '✍️' },
  { text: '戳毛毡', icon: '🧶' },
  { text: '画个画', icon: '🎨' },
  { text: '把我完善一下', icon: '⚙️' },
  { text: '包饺子', icon: '🥟' },
  { text: '看书', icon: '📖' },
  { text: '找麻麻玩', icon: '👩‍👧' },
];

Component({
  data: {
    resultText: '点击按钮开始选择~',
    resultClass: 'result-hint',
    considerList: [],
    currentResult: '',
    currentIcon: '',
    finalResult: '',
    finalIcon: '',
    showInfoModal: false,
    activityOptions: activityOptions
  },

  methods: {
    randomPick() {
      const randomIndex = Math.floor(Math.random() * activityOptions.length);
      const option = activityOptions[randomIndex];

      this.setData({
        resultText: `今天就：${option.text}！`,
        resultClass: 'result-text',
        currentResult: option.text,
        currentIcon: option.icon
      });
    },

    addToConsider() {
      const { currentResult, considerList } = this.data;
      if (!currentResult) {
        wx.showToast({ title: '请先随机选择', icon: 'none' });
        return;
      }
      if (considerList.some(item => item.text === currentResult)) {
        wx.showToast({ title: '已经在列表中了', icon: 'none' });
        return;
      }
      if (considerList.length >= 5) {
        wx.showToast({ title: '别什么都想要', icon: 'none' });
        return;
      }
      const option = activityOptions.find(opt => opt.text === currentResult);
      this.setData({
        considerList: [...considerList, option],
        finalResult: ''
      });
    },

    finalPick() {
      const { considerList } = this.data;
      if (considerList.length === 0) {
        wx.showToast({ title: '请先添加候选项', icon: 'none' });
        return;
      }
      const randomIndex = Math.floor(Math.random() * considerList.length);
      const option = considerList[randomIndex];
      this.setData({
        finalResult: option.text,
        finalIcon: option.icon
      });
      this.triggerEvent('celebrate', { result: option.text, emoji: option.icon });
      wx.vibrateShort({ type: 'heavy' });
    },

    clearConsider() {
      this.setData({
        considerList: [],
        finalResult: ''
      });
    },

    removeConsider(e) {
      const index = e.currentTarget.dataset.index;
      const considerList = [...this.data.considerList];
      considerList.splice(index, 1);
      this.setData({
        considerList,
        finalResult: ''
      });
    },

    confirmChoice() {
      const { currentResult, currentIcon } = this.data;
      if (!currentResult) {
        wx.showToast({ title: '请先随机选择', icon: 'none' });
        return;
      }
      this.triggerEvent('celebrate', { result: currentResult, emoji: currentIcon });
      wx.vibrateShort({ type: 'heavy' });
    },

    showInfo() {
      this.setData({
        showInfoModal: true
      });
    },

    closeInfoModal() {
      this.setData({
        showInfoModal: false
      });
    }
  }
});
