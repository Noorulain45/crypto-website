'use client';
import {
  Box, Card, CardContent, Typography, TextField, Button,
  Avatar, CircularProgress, Alert,
} from '@mui/material';
import Navbar from '@/components/Navbar';
import { useGetProfileQuery, useUpdateProfileMutation } from '@/lib/api/authApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const router = useRouter();
  const token = useSelector((s: RootState) => s.auth.token);
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: updating, isSuccess }] = useUpdateProfileMutation();
  const [name, setName] = useState('');

  useEffect(() => {
    if (!token) router.replace('/login');
  }, [token, router]);

  useEffect(() => {
    if (profile) setName(profile.name);
  }, [profile]);

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 500, mx: 'auto', mt: 8, px: 2 }}>
        <Card>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Avatar src={profile?.avatar} sx={{ width: 80, height: 80, fontSize: 32 }}>
              {profile?.name?.[0]}
            </Avatar>
            <Typography variant="h5" fontWeight={700}>{profile?.name}</Typography>
            <Typography color="text.secondary">{profile?.email}</Typography>

            <Box component="form" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
              onSubmit={(e) => { e.preventDefault(); updateProfile({ name }); }}>
              <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              {isSuccess && <Alert severity="success">Profile updated!</Alert>}
              <Button type="submit" variant="contained" color="primary" disabled={updating}>
                {updating ? <CircularProgress size={22} /> : 'Save Changes'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
