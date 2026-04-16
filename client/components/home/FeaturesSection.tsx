import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';

const features = [
  {
    title: 'Access Token Market',
    desc: 'Buy and sell token anytime\nand anywhere',
  },
  {
    title: 'User Friendly Interface',
    desc: 'Easy to navigate',
  },
  {
    title: 'Ownership Token control',
    desc: 'Be in control and own as many\nasset as possible',
  },
];

export default function FeaturesSection() {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 8 },
        position: 'relative',
        isolation: 'isolate',
        background: '#0a0a0f',
        overflow: 'hidden',
      }}
    >
      {/* Top-left green glow */}
      <Box sx={{
        position: 'absolute',
        top: '-60px',
        left: '-60px',
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #00ff9d22 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            color: '#fff',
            lineHeight: 1.2,
            mb: 1.5,
            maxWidth: 620,
            mx: 'auto',
          }}
        >
          Global Decentralize currency based on blockchain technology
        </Typography>
        <Typography sx={{ fontSize: '0.9rem', color: '#00ff9d', fontWeight: 400 }}>
          Web3 is the latest efficient technology
        </Typography>
      </Box>

      {/* Content: illustration + cards */}
      <Grid container spacing={4} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left — illustration */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: 'relative', height: { xs: 280, md: 420 } }}>
            <Image
              src="/Illustration.png"
              alt="Blockchain illustration"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </Box>
        </Grid>

        {/* Right — feature cards */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {features.map((f, i) => (
              <Box
                key={i}
                sx={{
                  px: 4,
                  py: 3,
                  background: 'linear-gradient(to right, #0a0a0f 0%, #0d2b1a 30%, #1a5c32 70%, #22c55e66 100%)',
                  borderRadius: '10px',
                  borderRight: '2px solid #22c55eaa',
                  textAlign: 'right',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, #0a0a0f 0%, #0d3320 25%, #1f6e3a 65%, #22c55e88 100%)',
                    borderColor: '#00ff9d',
                  },
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', mb: 0.5 }}>
                  {f.title}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#9ca3af', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                  {f.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
