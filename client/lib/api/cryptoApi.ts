import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery,
  endpoints: (builder) => ({
    getMarkets: builder.query<any[], { currency?: string; perPage?: number; page?: number }>({
      query: ({ currency = 'usd', perPage = 20, page = 1 } = {}) =>
        `/crypto/markets?currency=${currency}&perPage=${perPage}&page=${page}`,
    }),
    getTrending: builder.query<any, void>({
      query: () => '/crypto/trending',
    }),
    getGlobal: builder.query<any, void>({
      query: () => '/crypto/global',
    }),
    getCoin: builder.query<any, string>({
      query: (id) => `/crypto/${id}`,
    }),
  }),
});

export const { useGetMarketsQuery, useGetTrendingQuery, useGetGlobalQuery, useGetCoinQuery } =
  cryptoApi;
