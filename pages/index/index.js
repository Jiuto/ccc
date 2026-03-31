// index.js

Page({
  data: {
    showCelebrate: false,
    confirmedResult: '',
    celebrateEmoji: '🍽️'
  },

  onCelebrate(e) {
    const { result, emoji } = e.detail;
    this.setData({
      showCelebrate: true,
      confirmedResult: result,
      celebrateEmoji: emoji
    });
  },

  closeCelebrate() {
    this.setData({
      showCelebrate: false
    });
  }
});
