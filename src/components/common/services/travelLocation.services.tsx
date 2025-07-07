export const TravelLocationService = {
  async getTravelLocation() {
    try {
      const response = await fetch('/travel-location.json');
      const travelLocation = await response.json();

      return travelLocation;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
