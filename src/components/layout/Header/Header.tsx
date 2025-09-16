'use client';
import { FC, useEffect, useState } from 'react';
import { TopMenu } from '@/components/common/TopMenu/TopMenu';
import { HeaderMenuService } from '@/components/common/services/headerMenu.services';

export const Header: FC = () => {
  const [headerMenu, setHeaderMenu] = useState(null);

  useEffect(() => {
    (async () => {
      const menuFromResponse = await HeaderMenuService.getMenu();

      setHeaderMenu(menuFromResponse);
    })();
  }, []);

  return (
    <header>
      {!headerMenu && <h1>Loading...</h1>}
      {headerMenu && <TopMenu menu={headerMenu} />}
    </header>
  );
};
