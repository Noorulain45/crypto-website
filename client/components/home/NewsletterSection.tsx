'use client';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useSubscribeMutation } from '@/lib/api/newsletterApi';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribe, { isLoading, isSuccess, isError, error }] = useSubscribeMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) subscribe({ email });
  };

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 8 },
        bgcolor: '#0a0a0f',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Outer glow wrapper */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 820,
          position: 'relative',
          borderRadius: '16px',
          p: '1px',
          background: 'linear-gradient(135deg, #00ff9d55, #00ff9d11, #00ff9d44)',
          boxShadow: '0 0 60px #00ff9d22, 0 0 120px #00ff9d0f',
        }}
      >
        <Box
          sx={{
            borderRadius: '15px',
            background: 'radial-gradient(ellipse 90% 90% at 80% 10%, #00ff9d18 0%, transparent 55%), #0d1410',
            px: { xs: 4, md: 6 },
            py: { xs: 4, md: 5 },
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: '#fff',
              mb: 3,
            }}
          >
            Want to be aware of all update
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#e8fdf2',
                  borderRadius: '8px',
                  color: '#000',
                  height: 44,
                  '& fieldset': { border: 'none' },
                },
                '& input::placeholder': { color: '#aaa', fontSize: '0.85rem' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                bgcolor: '#00e676',
                color: '#000',
                fontWeight: 700,
                borderRadius: '8px',
                px: 3,
                height: 44,
                minWidth: 120,
                fontSize: '0.85rem',
                textTransform: 'none',
                flexShrink: 0,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#00c853', boxShadow: 'none' },
              }}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </Box>

          {isSuccess && (
            <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>Subscribed successfully!</Alert>
          )}
          {isError && (
            <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
              {(error as any)?.data?.message || 'Something went wrong'}
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}
