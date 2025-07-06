export const BannerSwiperService = {
  async getBannerSwiperInfo() {
    try {
      const response = await fetch('/banner-swiper-config.json');
      const bannerSwiperInfo = await response.json();

      return bannerSwiperInfo;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};
