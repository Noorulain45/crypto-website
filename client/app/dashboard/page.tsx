'use client';
import {
  Box, Grid, Card, CardContent, Typography, Avatar,
  Chip, Skeleton,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Navbar from '@/components/Navbar';
import { useGetMarketsQuery, useGetGlobalQuery } from '@/lib/api/cryptoApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const token = useSelector((s: RootState) => s.auth.token);
  const { data: coins, isLoading } = useGetMarketsQuery({ perPage: 12 });
  const { data: global } = useGetGlobalQuery();

  useEffect(() => {
    if (!token) router.replace('/login');
  }, [token, router]);

  const stats = global?.data;

  return (
    <>
      <Navbar />
      <Box sx={{ px: 4, py: 6, maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>Market Dashboard</Typography>

        {/* Global Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { label: 'Total Market Cap', value: stats ? `$${(stats.total_market_cap?.usd / 1e12).toFixed(2)}T` : null },
            { label: '24h Volume', value: stats ? `$${(stats.total_volume?.usd / 1e9).toFixed(2)}B` : null },
            { label: 'BTC Dominance', value: stats ? `${stats.market_cap_percentage?.btc?.toFixed(1)}%` : null },
            { label: 'Active Cryptos', value: stats ? stats.active_cryptocurrencies?.toLocaleString() : null },
          ].map((s) => (
            <Grid key={s.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography color="text.secondary" variant="body2">{s.label}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                    {s.value ?? <Skeleton width={80} />}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Coin Grid */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Top Coins</Typography>
        <Grid container spacing={2}>
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Skeleton variant="rounded" height={100} />
                </Grid>
              ))
            : coins?.map((coin: any) => {
                const isUp = coin.price_change_percentage_24h >= 0;
                return (
                  <Grid key={coin.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={coin.image} sx={{ width: 40, height: 40 }} />
                        <Box sx={{ flex: 1 }}>
                          <Typography sx={{ fontWeight: 600 }}>{coin.name}</Typography>
                          <Typography color="text.secondary" variant="body2">{coin.symbol.toUpperCase()}</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography sx={{ fontWeight: 600 }}>${coin.current_price.toLocaleString()}</Typography>
                          <Chip
                            icon={isUp ? <TrendingUpIcon /> : <TrendingDownIcon />}
                            label={`${isUp ? '+' : ''}${coin.price_change_percentage_24h?.toFixed(2)}%`}
                            color={isUp ? 'success' : 'error'}
                            size="small"
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>
      </Box>
    </>
  );
}
