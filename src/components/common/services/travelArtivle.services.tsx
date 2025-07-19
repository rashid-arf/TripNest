export const TravelArticleService = {
  async getTravelArticle() {
    try {
      const response = await fetch('/travel-article.json');
      const travelArticle = await response.json();

      return travelArticle;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
