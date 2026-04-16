'use client';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Skeleton, Avatar, Chip,
} from '@mui/material';
import { useGetMarketsQuery } from '@/lib/api/cryptoApi';

export default function CryptoListings() {
  const { data: coins, isLoading } = useGetMarketsQuery({ perPage: 10 });

  return (
    <Box sx={{ py: 10, px: 3 }} id="markets">
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
        Top Cryptocurrencies
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24h %</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <TableCell key={j}><Skeleton /></TableCell>
                    ))}
                  </TableRow>
                ))
              : coins?.map((coin: any) => {
                  const isPositive = coin.price_change_percentage_24h >= 0;
                  return (
                    <TableRow key={coin.id} hover>
                      <TableCell>{coin.market_cap_rank}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar src={coin.image} sx={{ width: 28, height: 28 }} />
                          <Typography sx={{ fontWeight: 600 }}>{coin.name}</Typography>
                          <Typography color="text.secondary" variant="body2">{coin.symbol.toUpperCase()}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">${coin.current_price.toLocaleString()}</TableCell>
                      <TableCell align="right">
                        <Chip
                          label={`${isPositive ? '+' : ''}${coin.price_change_percentage_24h?.toFixed(2)}%`}
                          color={isPositive ? 'success' : 'error'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">${(coin.market_cap / 1e9).toFixed(2)}B</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
