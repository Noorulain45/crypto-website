'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/lib/store/slices/authSlice';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function AuthCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      dispatch(setCredentials({ token }));
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [params, dispatch, router]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <CircularProgress color="primary" />
      <Typography color="text.secondary">Signing you in...</Typography>
    </Box>
  );
}
