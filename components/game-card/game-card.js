// components/game-card/game-card.js

Component({
  data: {
    amount: '',
    price: '',
    discount: '',
    probability: 0,
    probabilityText: '',
    showToast: false,
    toastMessage: '',
    showInfoModal: false,
  },

  methods: {
    getProbability() {
      const { amount, price, discount } = this.data;

      // 验证三个输入是否都是有效的数字（可带小数点）
      if (!amount || !price || !discount) {
        this.setData({
          probability: 0,
          probabilityText: '0%'
        });
        return;
      }

      const amountNum = parseFloat(amount);
      const priceNum = parseFloat(price);
      const discountNum = parseFloat(discount);

      if (isNaN(amountNum) || isNaN(priceNum) || isNaN(discountNum)) {
        this.setData({
          probability: 0,
          probabilityText: '0%'
        });
        return;
      }

      // 获取当前月份 (1-12)
      const month = new Date().getMonth() + 1;
      // 计算标准额度
      const standardAmount = month * 180;

      let probability = 0;

      if (standardAmount >= amountNum) {
        // 没超标
        // <=180 或 买后不超标
        if (priceNum <= 180 || amountNum + priceNum <= standardAmount ) {
          probability = 1.0; // 100%
        } else {
          // 买后超标且大于180
          if (discountNum <= 8) {
            probability = 0.8; // 80%
          } else if (discountNum > 8 && discountNum < 9) {
            probability = 0.7; // 70%
          } else {
            probability = 0.6; // 60%
          }
          if (priceNum <= 20) {
            probability += 0.2;
          }
        }
      } else {
        // 超标
        // 初始成功率70%，每超出180，成功率降低10%
        const exceedAmount = amountNum - standardAmount;
        const exceedCount = Math.floor((exceedAmount + priceNum) / 180);
        probability = 0.7 - (exceedCount * 0.1);

        if (priceNum <= 20) {
          probability += 0.15;
        }
        
        // 确保概率不低于0
        if (probability < 0) {
          probability = 0;
        }
      }
      
      const probabilityText = `${Math.round(probability * 100)}%`;
      
      this.setData({
        probability,
        probabilityText
      });
    },
    randomPick() {
      const { amount, price, discount } = this.data;
      if (!amount || !price || !discount) {
        this.showCustomToast('请先输入金额和折扣');
        return;
      }

      const { probability } = this.data;

      const isBuy = Math.random() < probability;
      const result = isBuy ? '买' : '不买';
      const emoji = isBuy ? '🎮' : '🚫';

      this.triggerEvent('celebrate', { result, emoji, isSadStyle: !isBuy });
      
      if (isBuy) {
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
      }, 2000);
    },

    onInput(e) {
      const field = e.currentTarget.dataset.field;
      const value = e.detail.value;
      
      // 只允许输入数字和小数点
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        this.setData({
          [field]: value
        });
        
        // 只有当三个字段都有有效值时才调用getProbability
        const { amount, price, discount } = this.data;
        const updatedData = { ...this.data, [field]: value };
        
        if (updatedData.amount && updatedData.price && updatedData.discount &&
            /^\d*\.?\d+$/.test(updatedData.amount) &&
            /^\d*\.?\d+$/.test(updatedData.price) &&
            /^\d*\.?\d+$/.test(updatedData.discount)) {
          this.getProbability();
        } else {
          // 如果任一字段为空或无效，重置成功率为0
          this.setData({
            probability: 0,
            probabilityText: '0%'
          });
        }
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
  }
});
