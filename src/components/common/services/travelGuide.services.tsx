export const TravelGuideService = {
  async getTravelGuide() {
    try {
      const response = await fetch('/travel-guide.json');
      const travelGuide = await response.json();

      return travelGuide;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
