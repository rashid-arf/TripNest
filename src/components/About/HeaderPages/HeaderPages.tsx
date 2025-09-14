'use client';
import { FC, useEffect, useState } from 'react';
import { TopMenuPages } from '@/components/About/TopMenuPages/TopMenuPages';
import {HeaderMenuService} from "@/components/common/services/headerMenu.services";


export const HeaderPages: FC = () => {
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
      {headerMenu && <TopMenuPages menu={headerMenu} />}
    </header>
  );
};
