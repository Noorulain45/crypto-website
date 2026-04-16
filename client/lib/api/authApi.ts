import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<{ token: string }, { name: string; email: string; password: string }>({
      query: (body) => ({ url: '/auth/signup', method: 'POST', body }),
    }),
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
    }),
    getProfile: builder.query<any, void>({
      query: () => '/users/profile',
    }),
    updateProfile: builder.mutation<any, { name?: string; avatar?: string }>({
      query: (body) => ({ url: '/users/profile', method: 'PUT', body }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetProfileQuery, useUpdateProfileMutation } =
  authApi;
