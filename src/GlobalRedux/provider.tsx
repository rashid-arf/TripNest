'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/GlobalRedux/store';
import { fetchTour } from '@/GlobalRedux/features/tour/action';

function ReduxInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  return null;
}

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ReduxInitializer />
      {children}
    </Provider>
  );
};
