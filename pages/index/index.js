// index.js

// 午餐选项
const lunchOptions = [
  '寿司', '牛肉粉丝汤', '桂林米粉', '咖喱鸡排饭', '酸菜鱼', '杂酱面',
  '平阳粉干', '凉皮', '阿香米线', '牛油拌饭', '煲仔饭', '石锅拌饭'
];

// 晚餐选项
const dinnerOptions = [
  '螺蛳粉', '煮方便米线', '煮南昌拌粉', '蛙蛙', '玉米/三文鱼', '玉米/桥头排骨',
  '花甲粉', '北京烤鸭', '手撕排骨', '烤鸡', '水煮肉片', '捞王'
];

// 午晚通用选项
const commonOptions = ['麻辣烫', '焗饭', '鸡公煲', '煎饼果子', '肠粉/虾饺皇'];

// 周末选项
const weekendOptions = ['肉蟹煲', '达美乐', '肯德基', '烧烤', '玉米/鸡排', '冒菜', '自己做吧崽'];

Page({
  data: {
    mealTimeOptions: ['中午', '晚上', '周末'],
    mealTimeIndex: 0,
    resultText: '点击按钮开始选择~',
    resultClass: 'result-hint'
  },

  onMealTimeChange(e) {
    this.setData({
      mealTimeIndex: e.detail.value
    });
  },

  randomPick() {
    const mealTimeIndex = this.data.mealTimeIndex;
    let options = [];
    let timeText = '';

    switch (parseInt(mealTimeIndex)) {
      case 0: // 中午
        options = [...lunchOptions, ...commonOptions];
        timeText = '中午';
        break;
      case 1: // 晚上
        options = [...dinnerOptions, ...commonOptions];
        timeText = '晚上';
        break;
      case 2: // 周末
        options = [...weekendOptions];
        timeText = '周末';
        break;
    }

    // 随机选择
    const randomIndex = Math.floor(Math.random() * options.length);
    const result = options[randomIndex];

    // 显示结果
    this.setData({
      resultText: `${timeText}就吃：${result}！`,
      resultClass: 'result-text'
    });
  }
});
