'use client';
import { AppBar, Toolbar, Button, Box, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import SvgIcon from '@mui/material/SvgIcon';

function DiscordIcon(props: object) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </SvgIcon>
  );
}
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { logout } from '@/lib/store/slices/authSlice';
import { useState } from 'react';

const socialIcons = [
  { icon: <FacebookIcon fontSize="small" />, href: 'https://www.facebook.com' },
  { icon: <InstagramIcon fontSize="small" />, href: 'https://www.instagram.com' },
  { icon: <LinkedInIcon fontSize="small" />, href: 'https://www.linkedin.com' },
  { icon: <DiscordIcon fontSize="small" />, href: 'https://discord.com' },
  { icon: <TelegramIcon fontSize="small" />, href: 'https://telegram.org' },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((s: RootState) => s.auth);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #ffffff11',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 1 }}>
        {/* Logo */}
        <Box component={Link} href="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/Logo (2).png" alt="CryptoPlatform" width={140} height={40} style={{ objectFit: 'contain' }} />
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'How it works', href: '/#features' },
            { label: 'Markets', href: '/#markets' },
            { label: 'Support', href: '/#support' },
          ].map((item) => (
            <Button key={item.label} color="inherit" component={Link} href={item.href}
              sx={{
                color: '#ccc',
                position: 'relative',
                textTransform: 'none',
                fontSize: '0.95rem',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: '2px',
                  bgcolor: '#00ff9d',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                },
                '&:hover': {
                  color: '#fff',
                  bgcolor: 'transparent',
                  '&::after': { width: '80%' },
                },
              }}>
              {item.label}
            </Button>
          ))}
          {token && (
            <Button color="inherit" component={Link} href="/dashboard"
              sx={{
                color: '#00ff9d',
                fontWeight: 600,
                position: 'relative',
                textTransform: 'none',
                fontSize: '0.95rem',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: '2px',
                  bgcolor: '#00ff9d',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                },
                '&:hover': {
                  bgcolor: 'transparent',
                  '&::after': { width: '80%' },
                },
              }}>
              Dashboard
            </Button>
          )}
        </Box>

        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Social icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {socialIcons.map((s, i) => (
              <IconButton key={i} href={s.href} target="_blank" rel="noopener noreferrer" size="small"
                sx={{ color: '#aaa', border: '1px solid #333', borderRadius: '8px', mx: 0.3, p: '6px', '&:hover': { color: '#00ff9d', borderColor: '#00ff9d' } }}>
                {s.icon}
              </IconButton>
            ))}
          </Box>

          {token ? (
            <>
              <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
                <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
              </IconButton>
              <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
                <MenuItem component={Link} href="/profile" onClick={() => setAnchor(null)}>Profile</MenuItem>
                <MenuItem component={Link} href="/dashboard" onClick={() => setAnchor(null)}>Dashboard</MenuItem>
                <MenuItem onClick={() => { dispatch(logout()); setAnchor(null); }}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button variant="outlined" size="small"
              component={Link} href="/login"
              sx={{ borderColor: '#00ff9d', color: '#00ff9d', ml: 1, '&:hover': { bgcolor: '#00ff9d22' } }}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
