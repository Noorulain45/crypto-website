import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/lib/providers/ReduxProvider';
import MuiProvider from '@/lib/providers/MuiProvider';
import EmotionRegistry from '@/lib/providers/EmotionRegistry';

export const metadata: Metadata = {
  title: 'CryptoPlatform',
  description: 'Track, trade and stay ahead of the crypto market',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <EmotionRegistry>
            <MuiProvider>{children}</MuiProvider>
          </EmotionRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
