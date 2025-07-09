export const TourPackageService = {
  async getTourPackage() {
    try {
      const response = await fetch('/tour-package.json');
      const tourPackage = await response.json();

      return tourPackage;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
