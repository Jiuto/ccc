// components/fruit-card/fruit-card.js

// 水果 emoji 映射
const fruitEmoji = {
  '香梨': '🍐',
  '蟠桃': '🍑',
  '水蜜桃': '🍑',
  '凤梨': '🍍',
  '甘蔗': '🎋',
  '蓝莓': '🫐',
  '草莓': '🍓',
  '耙耙柑': '🍊',
  '砂糖橘': '🍊',
  '小番茄': '🍅',
  '黄瓜': '🥒',
  '哈密瓜': '🍈',
  '橙子': '🍊',
  '枇杷': '🟡',
  '西瓜': '🍉',
  '葡萄/提子': '🍇',
  '油桃': '🍑',
  '李子': '🟣',
  '菠萝蜜': '🍈',
  '芒果': '🥭',
  '荔枝': '🔴',
  '冬枣': '🔴',
  '橘子': '🍊',
  '车厘子': '🍒',
  '柚子': '🍊',
  '火龙果': '🐉',
  '香蕉': '🍌',
  '杨梅': '🔴'
};

const fruitOptions = [
  '香梨',
  '蟠桃',
  '水蜜桃',
  '凤梨',
  '甘蔗',
  '蓝莓',
  '草莓',
  '耙耙柑',
  '砂糖橘',
  '小番茄',
  '黄瓜',
  '哈密瓜',
  '橙子',
  '枇杷',
  '西瓜',
  '葡萄/提子',
  '油桃',
  '李子',
  '菠萝蜜',
  '芒果',
  '荔枝',
  '冬枣',
  '橘子',
  '车厘子',
  '柚子',
  '火龙果',
  '香蕉',
  '杨梅'
];

Component({
  data: {
    resultText: '点击按钮开始选择~',
    resultClass: 'result-hint',
    currentResult: '',
    considerList: [],
    showFinalModal: false,
    showInfoModal: false,
    fruitEmoji: fruitEmoji, // 将 emoji 映射暴露到模板中使用
    fruitOptions: fruitOptions // 将所有选项暴露到模板中使用
  },

  methods: {
    randomPick() {
      const randomIndex = Math.floor(Math.random() * fruitOptions.length);
      const result = fruitOptions[randomIndex];

      this.setData({
        resultText: result,
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
      if (considerList.length >= 10) {
        wx.showToast({ title: '少吃点叭！', icon: 'none' });
        return;
      }
      this.setData({
        considerList: [...considerList, currentResult],
      });
    },

    finalPick() {
      const { considerList } = this.data;
      
      // 显示最终选择弹窗
      this.setData({
        showFinalModal: true
      });
      
      // 震动反馈
      wx.vibrateShort({ type: 'heavy' });
    },

    closeFinalModal() {
      this.setData({
        showFinalModal: false
      });
    },

    clearConsider() {
      this.setData({
        considerList: [],
      });
    },

    removeConsider(e) {
      const index = e.currentTarget.dataset.index;
      const considerList = [...this.data.considerList];
      considerList.splice(index, 1);
      this.setData({
        considerList,
      });
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
    },
  }
});
