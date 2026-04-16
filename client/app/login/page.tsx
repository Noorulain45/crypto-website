'use client';
import {
  Box, Card, CardContent, Typography, TextField, Button,
  Divider, Alert, CircularProgress,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/lib/api/authApi';
import { setCredentials } from '@/lib/store/slices/authSlice';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(form).unwrap();
      dispatch(setCredentials({ token: res.token }));
      router.push('/dashboard');
    } catch {}
  };

  const handleGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
      <Card sx={{ width: '100%', maxWidth: 420, p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}>Welcome Back</Typography>
          <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>Sign in to your account</Typography>

          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogle} sx={{ mb: 3 }}>
            Continue with Google
          </Button>

          <Divider sx={{ mb: 3 }}>or</Divider>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <TextField label="Password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            {isError && <Alert severity="error">{(error as any)?.data?.message || 'Invalid credentials'}</Alert>}
            <Button type="submit" variant="contained" color="primary" size="large" disabled={isLoading}>
              {isLoading ? <CircularProgress size={22} /> : 'Sign In'}
            </Button>
          </Box>

          <Typography sx={{ textAlign: 'center', mt: 3 }} variant="body2">
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: '#00C896' }}>Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
