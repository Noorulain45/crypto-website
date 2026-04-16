import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const newsletterApi = createApi({
  reducerPath: 'newsletterApi',
  baseQuery,
  endpoints: (builder) => ({
    subscribe: builder.mutation<{ message: string }, { email: string }>({
      query: (body) => ({ url: '/newsletter/subscribe', method: 'POST', body }),
    }),
  }),
});

export const { useSubscribeMutation } = newsletterApi;
