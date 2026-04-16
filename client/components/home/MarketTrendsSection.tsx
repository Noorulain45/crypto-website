'use client';
import { Box, Typography, Grid, Skeleton, Avatar } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import { useGetMarketsQuery } from '@/lib/api/cryptoApi';

function Sparkline({ positive }: { positive: boolean }) {
  const color = positive ? '#00ff9d' : '#ff4444';
  const points = positive
    ? '0,22 12,18 24,21 36,13 48,16 60,10 72,13 84,7 96,11 108,5'
    : '0,8 12,12 24,7 36,16 48,13 60,19 72,15 84,21 96,17 108,23';
  return (
    <svg width="108" height="32" viewBox="0 0 108 32">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarketTrendsSection() {
  const { data: coins, isLoading } = useGetMarketsQuery({ perPage: 12 });

  return (
    <Box sx={{ py: 8, px: { xs: 3, md: 6 }, bgcolor: '#060a0d' }} id="markets">
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#fff' }}>
        Market Trend
      </Typography>

      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Skeleton variant="rounded" height={130} sx={{ bgcolor: '#0f1a14' }} />
              </Grid>
            ))
          : coins?.map((coin: any) => {
              const isUp = coin.price_change_percentage_24h >= 0;
              return (
                <Grid key={coin.id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Box
                    sx={{
                      p: 2.5,
                      bgcolor: '#0a0f0d',
                      border: '1.5px solid #00ff9d66',
                      borderRadius: '14px',
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: '#00ff9d',
                        boxShadow: '0 0 20px #00ff9d22',
                      },
                    }}
                  >
                    {/* Top row: avatar + symbol/name + arrow */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src={coin.image} sx={{ width: 32, height: 32 }} />
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: 13, color: '#fff', lineHeight: 1.1 }}>
                            {coin.symbol.toUpperCase()}
                          </Typography>
                          <Typography sx={{ fontSize: 10, color: '#4a6a55', lineHeight: 1.2 }}>
                            {coin.name}
                          </Typography>
                        </Box>
                      </Box>
                      {isUp
                        ? <NorthEastIcon sx={{ fontSize: 16, color: '#00ff9d' }} />
                        : <SouthWestIcon sx={{ fontSize: 16, color: '#ff4444' }} />
                      }
                    </Box>

                    {/* Price */}
                    <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#fff', mb: 0.5 }}>
                      ${coin.current_price.toLocaleString()}
                    </Typography>

                    {/* % change + sparkline */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography sx={{ fontSize: 12, fontWeight: 600, color: isUp ? '#00ff9d' : '#ff4444' }}>
                        {isUp ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
                      </Typography>
                      <Sparkline positive={isUp} />
                    </Box>
                  </Box>
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
}
