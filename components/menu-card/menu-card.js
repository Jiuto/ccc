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
    name: '紫菜蛋花汤',
    type: '汤',
    content: '做法：\n锅里加水/紫菜/生抽，煮开，转中小火边搅边加水淀粉，加蛋液，煮开加盐/香油/香菜'
  },
  {
    name: '酸辣汤',
    type: '汤',
    content: '做法：\n白胡椒粉/生抽/醋混合，锅里加水/木耳切丝/豆腐切丝/火腿肠切丝，煮开，顺时针搅动加水淀粉，加蛋液，加料汁/盐/老抽/香油/香菜'
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
    content: '前置：\n牛肉加生抽/蚝油/蛋清/料酒/淀粉/水，抓匀封油，腌 15min\n烧椒酱：\n线椒不放油干锅中火烧出虎皮，出锅剁碎加蒜末/盐/蚝油/生抽/醋/糖，淋热油\n做法：\n油加蒜末/姜末/烧椒酱（留一点烧椒酱出锅用）炒一炒，加水/生抽/蚝油，煮沸，加金针菇，烫牛肉，出锅后再淋烧椒酱'
  },
  {
    name: '年糕火腿肠',
    type: '半荤',
    content: '做法：\n年糕加盐煮 5min，年糕、火腿肠加孜然粉/辣椒粉/五香粉/花椒粉/芝麻/生抽/油，空气炸锅 180℃15min 中间翻面'
  },
  {
    name: '清炒时蔬-茼蒿/杭白菜',
    type: '素菜',
    content: '做法：\n油加蒜炒香，先加杆，炒一炒，再加叶，炒一炒，加盐/糖/蚝油'
  },
  {
    name: '清炒毛豆',
    type: '素菜',
    content: '做法：\n油加蒜/姜片炒香，加毛豆，大火炒1min，加一点水煮2-3min，加盐'
  },
  {
    name: '手撕包菜',
    type: '素菜',
    content: '做法：\n油加蒜/干辣椒/花椒炒香，加包菜，大火炒断生，加盐/生抽/醋'
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
    name: '蒜香酱油炒饭',
    type: '主食',
    content: '做法：\n糖/生抽/老抽/胡椒粉混合，油加蒜末炒微焦，加冷饭，炒散加料汁，炒匀，米饭拨到四周中间加点油，打进鸡蛋，炒散，最后加葱花'
  },
  {
    name: '饺子',
    type: '主食',
    content: '做法：\n1、香菇肉末虾仁鸡蛋\n比例：\n1000g 肉末 25 个香菇 10 个蛋 1000g 虾仁 = 150个胖饺子\n前置：\n泡香菇、虾仁化冻\n炒蛋散、香菇丁炒熟、虾仁剁碎、肉末，加姜末/生抽/老抽/香油/白胡椒粉，顺时针抓匀，分 2-3 次加葱姜水，顺时针搅动\n2、酸菜猪肉\n比例：\n酸菜 40% 猪肉 60%\n前置：\n泡酸菜，挤干（尽量干点）\n肉末加生抽/蚝油/白胡椒粉，分批次加花椒水一个方向搅匀，封芝麻油\n酸菜加猪油，可选加白糖/盐\n混合，一个方向，搅匀\n注意：\n煮饺子记得点水 2-3 次'
  },
  {
    name: '金针菇海蜇',
    type: '小菜',
    content: '买的啦~',
  },
  {
    name: '腌黄瓜',
    type: '小菜',
    content: '买的啦~',
  },
  {
    name: '橘子罐头',
    type: '小菜',
    content: '买的啦~',
  },
  {
    name: '香辣/孜然-掌中宝',
    type: '快手菜',
    content: '买的啦~',
  },
  {
    name: '鸡米花',
    type: '快手菜',
    content: '买的啦~',
  },
  {
    name: '辣子鸡',
    type: '快手菜',
    content: '买的啦~',
  },
  {
    name: '卤鸭脖',
    type: '小吃',
    content: '做法：\n电饭煲加姜片/鸭脖/生抽/老抽/料酒/冰糖/花椒/干辣椒/一罐啤酒，搅匀煮饭，开锅搅拌，再煮一次',
  },
  {
    name: '扭扭酥',
    type: '小吃',
    content: '做法：\n手抓饼两张叠放，静置3min（放软一点），切宽条，拧麻花，放硅油纸两头按压，刷蛋液，烤箱200℃15min，撒一点糖粉',
  },
  {
    name: '鱼香肉丝',
    type: '荤菜',
    content: '前置：\n肉丝中加水/淀粉抓匀，加盐/料酒抓匀，加蛋清抓匀，加水淀粉抓匀，封油冷藏腌制。\n料汁：\n生抽1/老抽1/醋2/糖2/料酒1/淀粉0.5，剁椒剁碎\n做法：\n油加肉丝炒白盛出，油加蒜末/姜末炒香，加剁椒小火炒出红油，加冬笋丝/木耳丝大火炒，加肉丝，炒匀加料汁，撒葱花',
  },
  {
    name: '酸辣爆炒鸡胗',
    type: '荤菜',
    content: '做法：\n油加蒜/姜/花椒炒香，加鸡胗炒，加泡椒/泡椒汁/老抽/生抽炒熟'
  },
  {
    name: '山药木耳炒肉',
    type: '荤菜',
    content: '注意：\n山药戴手套处理，用淮山药\n做法：\n油加蒜/葱花炒香，加肉片/胡萝卜片炒变色，加山药片/木耳炒匀，加生抽/盐，炒3-4min，撒葱花'
  },
  {
    name: '粉丝蒸鸡腿',
    type: '荤菜',
    content: '前置：\n鸡腿肉加生抽/老抽/盐/糖/白胡椒粉/淀粉，腌30min，粉丝泡软\n做法：\n粉丝上铺鸡腿肉，撒两勺水，盖保鲜膜，微波炉高火6min，撒葱花'
  },
  {
    name: '麻婆豆腐',
    type: '半荤',
    content: '前置：\n豆腐焯水后泡冷水\n做饭：\n油加葱花/肉末，翻炒后拨到一边，加豆瓣酱炒出红油，加糖/生抽/老抽，翻炒，加豆腐/一点水，煮一下，水淀粉勾芡，出锅撒葱花/花椒粉，淋热油'
  },
  {
    name: '小炒牛肉',
    type: '荤菜',
    content: '前置：\n牛肉加盐/淀粉抓一抓，封油，腌10min\n做法：\n油加花椒炒香捞出花椒，加蒜/姜炒香，加牛肉大火翻炒变色，加小米辣/青椒/大葱/盐/糖，炒香，加生抽/老抽炒匀'
  },
  {
    name: '蒜香烤排骨',
    type: '荤菜',
    content: '前置：\n排骨加蒜末/料酒/生抽/老抽/耗油/白胡椒粉/盐/糖，封油，腌20min\n做法：\n放进烤盘盖一层锡纸200℃30min，去掉盖的锡纸，再10min，撒芝麻/葱花'
  },
  {
    name: '红烧大虾',
    type: '半荤',
    content: '做法：\n油加大虾炒变色出锅，油加蒜末炒香，加虾/姜片/生抽/糖/一些水，中火煮2min，加点盐收汁'
  },
  {
    name: '啤酒鸭',
    type: '荤菜',
    content: '做法：\n鸭肉焯水，油加八角/桂皮/姜片/葱段/干辣椒炒香，加鸭肉，炒香，加小米辣/冰糖/生抽/老抽，炒一炒，加一罐啤酒，煮开，小火焖20-30min，加盐收汁撒葱花'
  },
  {
    name: '葱爆肉',
    type: '荤菜',
    content: '前置：\n肉片加黑胡椒粉抓匀，加一点点水，加盐/淀粉抓匀，封油\n料汁：\n醋/生抽/老抽/黑胡椒粉/淀粉/盐。\n做法：\n油大火肉炒变色，加大葱，炒一炒，加料汁，收汁出锅'
  },
  {
    name: '口水鸡',
    type: '荤菜',
    content: '做法：\n手枪腿，姜片/葱段/花椒/料酒，煮熟，用筷子戳一戳有没有血水，捞出放冰水，留半碗鸡汤，鸡腿手撕。\n料汁：\n辣椒面/芝麻，淋热油，加生抽/耗油/糖/盐/蒜末/醋，加鸡汤。\n做法：\n鸡肉加料汁撒葱花/小米辣'
  },
  {
    name: '水煮肉片',
    type: '荤菜',
    content: '前置：\n牛肉片加淀粉/盐/水抓匀，封油，腌30min。\n做法：\n油（多一点），加豆瓣酱炒出红油，加辣椒粉搅匀，加半锅水，把底料（青笋啊金针菇啊之类的）烫熟捞出，下牛肉烫变色，加水淀粉，出锅撒葱花/蒜末/辣椒粉/花椒粉，淋热油'
  },
  {
    name: '葱花肉馅饼',
    type: '小吃',
    content: '前置：\n猪肉末加盐/糖/白胡椒粉/生抽/耗油/水抓匀，加姜末/葱花抓匀，封油。\n做法：\n一层饺子皮一层肉末，用水粘连，一共两层肉末三层饺子皮，锅里煎到两面金黄即可。'
  },
];

const typeOptions = ['荤菜', '半荤', '素菜', '汤', '主食', '小菜', '快手菜', '小吃'];
const typeEmoji = {
  '荤菜': '🥩',
  '半荤': '🦐',
  '素菜': '🥬',
  '汤': '🍲',
  '主食': '🥟',
  '小菜': '🥗',
  '快手菜': '🍱',
  '小吃': '🍢'
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
