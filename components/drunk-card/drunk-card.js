// components/drunk-card/drunk-card.js

Component({
  data: {
    weekDrinkCount: '',
    showToast: false,
    toastMessage: ''
  },

  methods: {
    randomPick() {
      const { weekDrinkCount } = this.data;
      if (!weekDrinkCount) {
        this.showCustomToast('请先输入本周饮用量');
        return;
      }

      const drinkValue = parseFloat(weekDrinkCount);
      const weekDay = new Date().getDay(); // 0-6，0 表示周日，1-6 表示周一到周六
      
      let probability = 0;

      // 周一到周三 (1-3)
      if (weekDay >= 1 && weekDay <= 3) {
        if (drinkValue == 0) {
          probability = 0.6;
        } else if (drinkValue <= 0.5) {
          probability = 0.5;
        } else if (drinkValue > 0.5 && drinkValue <= 1) {
          probability = 0.4;
        } else if (drinkValue > 1) {
          probability = 0.3;
        }
      }
      // 周四到周五 (4-5)
      else if (weekDay >= 4 && weekDay <= 5) {
        if (drinkValue <= 1) {
          probability = 0.7;
        } else if (drinkValue > 1 && drinkValue <= 2) {
          probability = 0.5;
        } else if (drinkValue > 2) {
          probability = 0.3;
        }
      }
      // 周六 (6)、周日 (0)
      else if (weekDay === 6 || weekDay === 0) {
        if (drinkValue <= 2) {
          probability = 0.7;
        } else if (drinkValue > 2 && drinkValue <= 3) {
          probability = 0.4;
        } else if (drinkValue > 3) {
          probability = 0.1;
        }
      }

      // 根据概率随机判断是否喝
      const isDrink = Math.random() < probability;
      const result = isDrink ? '喝' : '不喝';
      const emoji = isDrink ? '🍺' : '🚫';

      this.triggerEvent('celebrate', { result, emoji, isSadStyle: !isDrink });
      
      if (isDrink) {
        wx.vibrateShort({ type: 'heavy' });
      }
    },

    showCustomToast(message) {
      this.setData({
        showToast: true,
        toastMessage: message
      });

      // 1 秒后自动隐藏
      setTimeout(() => {
        this.setData({
          showToast: false
        });
      }, 1000);
    },

    onInput(e) {
      const value = e.detail.value;
      // 只允许输入数字
      if (value === '' || /^\d+$/.test(value)) {
        this.setData({
          weekDrinkCount: value
        });
      }
    }
  }
});
