'use client';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../store/store';
import { rehydrate } from '../store/slices/authSlice';

function Rehydrator({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rehydrate());
  }, [dispatch]);
  return <>{children}</>;
}

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Rehydrator>{children}</Rehydrator>
    </Provider>
  );
}
