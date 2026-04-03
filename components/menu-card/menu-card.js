// components/menu-card/menu-card.js

const menuOptions = [
  {
    name: '辣炒花甲',
    type: '半荤',
    content: '前置：\n花甲提前加盐加油吐沙\n做法：\n锅里油多点加花椒/干辣椒/姜丝/蒜片/洋葱半个，炒一炒加豆瓣酱炒出红油，放花甲，炒一炒加生抽，煮开，撒葱'
  },
  {
    name: '羊肚菌虾滑',
    type: '半荤',
    content: '前置：\n提前泡温水半小时\n做法：\n羊肚菌开口加虾滑（也可以再加一些肉末提前腌一下），蒸 12 分钟，蒸出来的汁和之前泡羊肚菌的汁可以留一点，回锅加盐和蚝油，水淀粉勾芡，浇汁撒点葱花'
  },
  {
    name: '口蘑蒸牛肉',
    type: '荤菜',
    content: '前置：\n牛肉加入 1 勺淀粉，姜片/葱段/1 勺料酒，1/2 勺蚝油，1/5 勺白砂糖，1/5 勺盐，1 勺生抽抓拌均匀，腌制 20 分钟\n做法：\n口蘑上铺牛肉，蒸十分钟撒葱花'
  },
  {
    name: '口蘑',
    type: '素菜',
    content: '做法：\n油蒜炒香，加口蘑，炒一炒加老抽/生抽/盐/糖，撒葱'
  },
  {
    name: '丝瓜蛋花汤',
    type: '汤',
    content: '做法：\n两个蛋打散，油加丝瓜炒一炒，加 400g 水烧开后淋蛋液，加点盐/香油/撒葱'
  },
  {
    name: '孜然洋葱炒牛肉',
    type: '荤菜',
    content: '前置：\n牛肉加盐/老抽/蚝油/胡椒粉抓一抓，加淀粉抓一抓，加水抓一抓，加油轻抓，冷藏腌 20min\n做法：\n油加牛肉炒变色出锅，油加蒜片/姜末/洋葱，加牛肉炒一炒，撒孜然粉'
  },
  {
    name: '香菇腐竹烧肉',
    type: '荤菜',
    content: '前置：\n准备香菇/腐竹/木耳/蒜苗，该泡泡\n做法：\n油加蒜片/姜丝/花椒炒一炒，加肉炒一炒，加蚝油/老抽/生抽/盐/糖炒一炒，加水，焖 20min，加其他材料，加水，焖 10min'
  },
  {
    name: '菠萝鸡翅',
    type: '荤菜',
    content: '前置：\n鸡翅改刀，加生抽/老抽/蚝油/料酒/姜/蜂蜜/辣椒粉/菠萝汁（丁），腌 30min\n做法：\n空气炸锅，刷油铺菠萝放鸡翅 180℃8min，翻面，再来 5min'
  },
  {
    name: '香菜牛肉',
    type: '荤菜',
    content: '前置：\n牛肉加盐/老抽/生抽/葱姜水/白胡椒粉/淀粉抓匀，油封腌 15min\n拌料：\n蒜末/葱花/芝麻/小米辣/辣椒面淋热油，加醋/生抽\n做法：\n水烧开牛肉烫一分钟，捞出来，拌料加香菜'
  },
  {
    name: '香菜豆腐',
    type: '素菜',
    content: '拌料：\n蒜末/葱花/芝麻/小米辣/辣椒面淋热油，加醋/生抽\n做法：\n老豆腐切块，空气炸锅刷油，200℃20min 中间翻面，出锅拌料'
  },
  {
    name: '香菜平菇',
    type: '素菜',
    content: '拌料：\n蒜末/葱花/芝麻/小米辣/辣椒面淋热油，加醋/生抽\n做法：\n沸水中火平菇烫 2min，过凉挤干，拌料'
  },
  {
    name: '蒜蓉秋葵',
    type: '素菜',
    content: '做法：\n秋葵去蒂焯水过凉，油加蒜末炒一炒，加盐/糖/生抽/水，浇汁'
  },
  {
    name: '玉米笋虾滑',
    type: '半荤',
    content: '做法：\n玉米笋切开，中间夹虾滑，牙签固定，空气炸锅刷油放笋表面再刷油，撒盐，180℃15min，翻面，5min，撒辣椒面'
  },
  {
    name: '烧椒牛肉',
    type: '荤菜',
    content: '前置：\n牛肉加生抽/蚝油/蛋清/料酒/淀粉水，抓匀封油，腌 15min\n烧椒酱：\n线椒不放油干锅中火烧出虎皮，出锅剁碎加蒜末/盐/蚝油/生抽/醋/糖，淋热油\n做法：\n油加蒜末/姜末/烧椒酱（留一点烧椒酱出锅用）炒一炒，加水/生抽/蚝油，煮沸，加金针菇，烫牛肉，出锅后再淋烧椒酱'
  },
  {
    name: '年糕火腿肠',
    type: '半荤',
    content: '做法：\n年糕加盐煮 5min，年糕、火腿肠加孜然粉/辣椒粉/五香粉/花椒粉/芝麻/生抽/油，空气炸锅 180℃15min 中间翻面'
  },
  {
    name: '茼蒿',
    type: '素菜',
    content: '做法：\n油加蒜炒香，先加杆，炒一炒，再加叶，炒一炒，加盐/糖/蚝油'
  },
  {
    name: '蒜香蜂蜜无骨鸡腿',
    type: '荤菜',
    content: '前置：\n手枪腿去骨加蒜末/料酒/盐/黑胡椒粉，腌 30min\n做法：\n油煎至两面金黄，出锅切块，蜂蜜/蚝油/生抽/水调成料汁，鸡腿回锅加料汁，大火煮开收汁，撒芝麻'
  },
  {
    name: '豆腐酿肉',
    type: '荤菜',
    content: '前置：\n肉末加葱花/生抽/料酒/白胡椒粉/淀粉，腌 15min，\n注意：\n要有一个能装浇汁的烤盘\n做法：\n老豆腐挖洞填肉，空气炸锅刷油 185℃10min，水淀粉加生抽/蚝油调成汁，浇汁，180℃5min，撒葱花'
  },
  {
    name: '鸡脚筋',
    type: '荤菜',
    content: '前置：\n鸡脚筋加生抽/老抽/料酒/白胡椒粉/蚝油/烧烤料，腌 30min\n做法：\n空气炸锅 180℃20min，中间翻面，撒孜然/芝麻，再来 200℃5min'
  },
  {
    name: '饺子',
    type: '主食',
    content: '做法：\n1、香菇肉末虾仁鸡蛋\n比例：\n1000g 肉末 50 个香菇 10 个蛋 1000g 虾仁\n前置：\n泡香菇、虾仁化冻\n炒蛋散、香菇丁炒熟、虾仁剁碎、肉末，加姜末/生抽/老抽/香油/白胡椒粉，顺时针抓匀，分 2-3 次加葱姜水，顺时针搅动\n2、酸菜猪肉\n比例：\n酸菜 40% 猪肉 60%\n前置：\n泡酸菜，挤干（尽量干点）\n肉末加生抽/蚝油/白胡椒粉，分批次加花椒水一个方向搅匀，封芝麻油\n酸菜加猪油，可选加白糖/盐\n混合，一个方向，搅匀\n注意：\n煮饺子记得点水 2-3 次'
  }
];

const typeOptions = ['荤菜', '半荤', '素菜', '汤', '主食'];
const typeEmoji = {
  '荤菜': '🥩',
  '半荤': '🦐',
  '素菜': '🥬',
  '汤': '🍲',
  '主食': '🥟'
}

Component({
  data: {
    mode: '', // 'match' 或 'search'
    typeOptions: typeOptions,
    typeEmoji: typeEmoji,
    typeIndex: 0,
    menuOptions: menuOptions,
    filteredMenus: [], // 根据类型筛选后的菜单
    menuIndex: null,
    currentDish: null, // 当前查看的菜品
    selectedDishes: [], // 已选的菜品
    groupedDishes: [], // 按类型分组的菜品
    showModal: false, // 是否显示弹窗
  },

  methods: {
    // 开始搭配模式
    startMatch() {
      this.setData({ 
        mode: 'match',
        selectedDishes: []
      });
      this.filterMenus();
    },

    // 开始查菜谱模式
    startSearch() {
      this.setData({ 
        mode: 'search',
        currentDish: null
      });
      this.filterMenus();
    },

    // 根据类型筛选菜单
    filterMenus() {
      const { typeIndex, menuOptions } = this.data;
      const selectedType = typeOptions[typeIndex];
      const filtered = menuOptions.filter(item => item.type === selectedType);
      this.setData({ 
        filteredMenus: filtered,
        menuIndex: null
      });
    },

    // 类型改变时触发
    onTypeChange(e) {
      this.setData({ typeIndex: parseInt(e.detail.value) });
      this.filterMenus();
    },

    // 菜单改变时触发
    onMenuChange(e) {
      this.setData({ menuIndex: parseInt(e.detail.value) });
    },

    // 查看菜品（查菜谱模式）
    viewDish() {
      const { filteredMenus, menuIndex } = this.data;
      if (filteredMenus.length > 0 && menuIndex >= 0) {
        this.setData({
          currentDish: filteredMenus[menuIndex]
        });
      } else {
        wx.showToast({
          title: '请先选择菜品',
          icon: 'none'
        });
      }
    },

    // 添加菜品到已选列表（搭配模式）
    addDish() {
      const { filteredMenus, menuIndex, selectedDishes } = this.data;
      if (filteredMenus.length > 0 && menuIndex >= 0) {
        const dish = filteredMenus[menuIndex];
        // 检查是否已存在
        const exists = selectedDishes.some(item => item.name === dish.name);
        if (!exists) {
          const newSelectedDishes = [...selectedDishes, dish];
          this.setData({
            selectedDishes: newSelectedDishes,
            groupedDishes: this.groupByType(newSelectedDishes)
          });
        } else {
          wx.showToast({
            title: '该菜品已在列表中',
            icon: 'none'
          });
        }
      } else {
        wx.showToast({
          title: '请先选择菜品',
          icon: 'none'
        });
      }
    },

    // 显示最终结果弹窗
    showFinalResult() {
      this.setData({ showModal: true });
    },

    // 关闭弹窗
    closeModal() {
      this.setData({ showModal: false });
    },

    // 复制菜单内容到剪贴板
    copyMenuContent() {
      const { selectedDishes, typeEmoji } = this.data;
      
      // 拼接菜单内容
      let menuText = '🥘 今日菜谱 🥘\n\n';
      
      selectedDishes.forEach((dish, index) => {
        menuText += `${index + 1}. 【${dish.name}】\n`;
        menuText += `${typeEmoji[dish.type]}类型：${dish.type}\n`;
        menuText += `${dish.content}\n\n`;
        menuText += '---\n\n';
      });
      
      menuText += '\n祝你用餐愉快！';
      
      // 复制到剪贴板
      wx.setClipboardData({
        data: menuText,
        success: () => {
          wx.showToast({
            title: '已复制到剪贴板',
            icon: 'success',
            duration: 2000
          });
        },
        fail: () => {
          wx.showToast({
            title: '复制失败',
            icon: 'none'
          });
        }
      });
    },

    // 按类型分组菜品
    groupByType(dishes) {
      const groups = {};
      dishes.forEach(dish => {
        if (!groups[dish.type]) {
          groups[dish.type] = [];
        }
        groups[dish.type].push(dish.name);
      });
      
      const result = [];
      for (const type in groups) {
        result.push({
          type: type,
          dishes: groups[type]
        });
      }
      return result;
    },

    // 返回初始状态
    backToInitial() {
      this.setData({
        mode: '',
        typeIndex: 0,
        menuIndex: null,
        currentDish: null,
        selectedDishes: [],
        groupedDishes: [],
        showModal: false
      });
    },
  }
});
