'use client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00ff9d' },
    secondary: { main: '#00c8ff' },
    background: { default: '#0a0a0f', paper: '#0f1117' },
    text: { primary: '#ffffff', secondary: '#8a8a9a' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 50 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#0f1117',
          border: '1px solid #00ff9d44',
          boxShadow: '0 0 12px #00ff9d22',
          borderRadius: 16,
        },
      },
    },
  },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
