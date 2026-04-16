import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../api/cryptoApi';
import { authApi } from '../api/authApi';
import { newsletterApi } from '../api/newsletterApi';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [newsletterApi.reducerPath]: newsletterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      authApi.middleware,
      newsletterApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
