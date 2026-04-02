// components/drunk-card/drunk-card.js

Component({
  data: {
    weekDrinkCount: '',
    probability: 0,
    probabilityText: '',
    showToast: false,
    toastMessage: '',
    showInfoModal: false,
    showTypeSelector: false,
    typeOptions: [
      '奶味重一点',
      '茶味重一点',
      '奶茶味重一点',
      '果茶',
      '沙冰',
      '咖啡'
    ],
    selectedTypeIndex: 0,
    drinkBrands: {
      '奶味重一点': ['一点点', '瑞幸（轻轻）'],
      '茶味重一点': ['霸王茶姬', '凑凑'],
      '奶茶味重一点': ['古茗', '茶百道', '奈雪', 'CoCo'],
      '果茶': ['古茗', '茶百道', '奈雪', 'CoCo', '凑凑', '瑞幸'],
      '沙冰': ['星冰乐', '瑞纳冰', '凑凑', '古茗', 'CoCo'],
      '咖啡': ['瑞幸', '自己做叭']
    },
    typeIcons: {
      '奶味重一点': '🥛',
      '茶味重一点': '🍵',
      '奶茶味重一点': '🧋',
      '果茶': '🍹',
      '沙冰': '🍧',
      '咖啡': '☕'
    },
  },

  methods: {
    getProbability() {
      const { weekDrinkCount } = this.data;
      if (!weekDrinkCount) {
        // this.showCustomToast('请先输入本周饮用量');
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
      
      const probabilityText = `${Math.round(probability * 100)}%`;
      
      this.setData({
        probability,
        probabilityText
      });
    },
    randomPick() {
      const { weekDrinkCount } = this.data;
      if (!weekDrinkCount) {
        this.showCustomToast('请先输入本周饮用量');
        return;
      }

      const { probability } = this.data;

      // 根据概率随机判断是否喝
      const isDrink = Math.random() < probability;
      const result = isDrink ? '喝' : '不喝';
      const emoji = isDrink ? '🍺' : '🚫';

      this.triggerEvent('celebrate', { result, emoji, isSadStyle: !isDrink });
      
      if (isDrink) {
        wx.vibrateShort({ type: 'heavy' });
      }

      // 显示类型选择器
      this.setData({
        showTypeSelector: isDrink,
      });
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
      }, 2000);
    },

    onInput(e) {
      const value = e.detail.value;
      // 只允许输入数字和小数点
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        this.setData({
          weekDrinkCount: value
        });
        this.getProbability();
      }
    },

    showInfoModal() {
      this.setData({
        showInfoModal: true
      });
    },

    hideInfoModal() {
      this.setData({
        showInfoModal: false
      });
    },

    onTypeChange(e) {
      this.setData({
        selectedTypeIndex: parseInt(e.detail.value)
      });
    },

    randomSelectDrink() {
      const { typeOptions, selectedTypeIndex, drinkBrands, typeIcons } = this.data;
      const selectedType = typeOptions[selectedTypeIndex];
      const brands = drinkBrands[selectedType];
      const typeIcon = typeIcons[selectedType];
      
      // 随机选择一个品牌
      const randomIndex = Math.floor(Math.random() * brands.length);
      const selectedBrand = brands[randomIndex];

      this.triggerEvent('celebrate', { result: selectedBrand, emoji: typeIcon });
    }
  }
});
