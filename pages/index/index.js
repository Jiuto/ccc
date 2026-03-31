// index.js

// 在公司吃-选项
const lunchOptions = [
  '寿司', '牛肉粉丝汤', '桂林米粉', '咖喱鸡排饭', '酸菜鱼', '杂酱面',
  '平阳粉干', '凉皮', '阿香米线', '牛油拌饭', '煲仔饭', '石锅拌饭'
];

// 在家吃(单人版)-选项
const dinnerOptions = [
  '螺蛳粉', '煮方便米线', '煮南昌拌粉', '蛙蛙', '玉米/三文鱼', '玉米/桥头排骨',
  '花甲粉', '北京烤鸭', '手撕排骨', '烤鸡', '水煮肉片', '捞王'
];

// 在公司吃/在家吃(单人版)-通用选项
const commonOptions = ['麻辣烫', '焗饭', '鸡公煲', '煎饼果子', '肠粉/虾饺皇'];

// 在家吃(双人版)-选项
const weekendOptions = ['肉蟹煲', '达美乐', '肯德基', '烧烤', '玉米/鸡排', '冒菜', '自己做吧崽'];

// 出去吃-选项
const outingOptions = ['凑凑', '海底捞', '魏嬢嬢', '郭氏鱼庄', '牛排', '烤肉', '桥头三嫩', '潮汕牛肉火锅'];

Page({
  data: {
    mealTypeOptions: ['在公司吃', '在家吃(单人版)', '在家吃(双人版)', '出去吃'],
    mealTypeIndex: 0,
    resultText: '点击按钮开始选择~',
    resultClass: 'result-hint',
    considerList: [],
    currentResult: '',
    finalResult: '',
    showCelebrate: false,
    confirmedResult: ''
  },

  onMealTypeChange(e) {
    this.setData({
      mealTypeIndex: e.detail.value
    });
  },

  randomPick() {
    const mealTypeIndex = this.data.mealTypeIndex;
    let options = [];

    switch (parseInt(mealTypeIndex)) {
      case 0:
        options = [...lunchOptions, ...commonOptions];
        break;
      case 1:
        options = [...dinnerOptions, ...commonOptions];
        break;
      case 2:
        options = [...weekendOptions];
        break;
      case 3:
        options = [...outingOptions];
        break;
    }

    // 随机选择
    const randomIndex = Math.floor(Math.random() * options.length);
    const result = options[randomIndex];

    // 显示结果
    this.setData({
      resultText: `这顿就吃：${result}！`,
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
      finalResult: result,
      showCelebrate: true,
      confirmedResult: result
    });
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
    this.setData({
      showCelebrate: true,
      confirmedResult: currentResult
    });
    // 震动反馈
    wx.vibrateShort({ type: 'heavy' });
  },

  closeCelebrate() {
    this.setData({
      showCelebrate: false
    });
  }
});
