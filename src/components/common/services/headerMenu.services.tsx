export const HeaderMenuService = {
  async getMenu() {
    try {
      const response = await fetch('/header-menu.json');
      const menu = await response.json();
      return menu;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};
