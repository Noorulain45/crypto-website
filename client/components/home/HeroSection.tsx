'use client';
import { Box, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 3, md: 10 },
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        background: '#0d0d0d',
      }}
    >
      {/* Green glow bottom-left */}
      <Box sx={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00ff9d2e 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Left content */}
      <Box sx={{ zIndex: 1, maxWidth: 460 }}>
        <Typography
          sx={{
            fontSize: { xs: '2.8rem', md: '4rem' },
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#fff',
            mb: 2,
            letterSpacing: '-1px',
          }}
        >
          Save, Buy and Sell<br />
          Your blockchain<br />
          asset
        </Typography>

        <Typography
          sx={{
            fontSize: '0.95rem',
            color: '#888',
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 340,
          }}
        >
          The easy to manage and trade your cryptocurrency asset
        </Typography>

        <Stack direction="row" spacing={1.5}>
          <Button
            component={Link}
            href="/signup"
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#ffffff40',
              color: '#fff',
              borderRadius: '20px',
              px: 2.5,
              py: 0.7,
              fontSize: '0.72rem',
              textTransform: 'none',
              fontWeight: 400,
              '&:hover': { borderColor: '#00ff9d', color: '#00ff9d', bgcolor: 'transparent' },
            }}
          >
            Connect Wallet
          </Button>
          <Button
            component={Link}
            href="/dashboard"
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#ffffff40',
              color: '#fff',
              borderRadius: '20px',
              px: 2.5,
              py: 0.7,
              fontSize: '0.72rem',
              textTransform: 'none',
              fontWeight: 400,
              '&:hover': { borderColor: '#00ff9d', color: '#00ff9d', bgcolor: 'transparent' },
            }}
          >
            Start Trading
          </Button>
        </Stack>
      </Box>

      {/* Right illustration */}
      <Box
        sx={{
          position: 'absolute',
          right: { md: '2%' },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 0, md: 520 },
          height: { xs: 0, md: 520 },
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Image
          src="/Modern_3d_illustration_of_Crypto_trading 1.png"
          alt="Crypto trading illustration"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>
    </Box>
  );
}
