// components/activity-card/activity-card.js

// 做点什么-选项
const activityOptions = [
  '看小说', '买买买', '打游戏', '玩俩猫', '刷视频', '看综艺', '玩桌游',
  '整点吃的', '打扫卫生', '去散步', '跳个操', '出去玩', '打万万',
  '练个字', '戳毛毡', '画个画', '把我完善一下'
];

Component({
  data: {
    resultText: '点击按钮开始选择~',
    resultClass: 'result-hint',
    considerList: [],
    currentResult: '',
    finalResult: ''
  },

  methods: {
    randomPick() {
      const randomIndex = Math.floor(Math.random() * activityOptions.length);
      const result = activityOptions[randomIndex];

      this.setData({
        resultText: `今天就：${result}！`,
        resultClass: 'result-text',
        currentResult: result
      });
    },

    addToConsider() {
      const { currentResult, considerList } = this.data;
      if (!currentResult) {
        wx.showToast({ title: '请先随机选择', icon: 'none' });
        return;
      }
      if (considerList.includes(currentResult)) {
        wx.showToast({ title: '已经在列表中了', icon: 'none' });
        return;
      }
      if (considerList.length >= 5) {
        wx.showToast({ title: '别什么都想要', icon: 'none' });
        return;
      }
      this.setData({
        considerList: [...considerList, currentResult],
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
      const result = considerList[randomIndex];
      this.setData({
        finalResult: result
      });
      this.triggerEvent('celebrate', { result, emoji: '🎮' });
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
      const { currentResult } = this.data;
      if (!currentResult) {
        wx.showToast({ title: '请先随机选择', icon: 'none' });
        return;
      }
      this.triggerEvent('celebrate', { result: currentResult, emoji: '🎮' });
      wx.vibrateShort({ type: 'heavy' });
    }
  }
});
