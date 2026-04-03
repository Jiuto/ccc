// index.js

Page({
  data: {
    showCelebrate: false,
    confirmedResult: '',
    celebrateEmoji: '🍽️',
    isSadStyle: false,
    showTopTip: true
  },

  onCelebrate(e) {
    const { result, emoji, isSadStyle } = e.detail;
    
    this.setData({
      showCelebrate: true,
      confirmedResult: result,
      celebrateEmoji: emoji,
      isSadStyle: isSadStyle
    });
  },

  closeCelebrate() {
    this.setData({
      showCelebrate: false
    });
  },

  closeTopTip() {
    this.setData({
      showTopTip: false
    });
  }
});
