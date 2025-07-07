export const LocationService = {
  async getMenu() {
    try {
      const response = await fetch('/travel-location.json');
      const menu = await response.json();
      return menu;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
