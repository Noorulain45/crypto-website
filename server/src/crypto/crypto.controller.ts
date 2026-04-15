import { Controller, Get, Param, Query } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('markets')
  getMarkets(
    @Query('currency') currency = 'usd',
    @Query('perPage') perPage = 20,
    @Query('page') page = 1,
  ) {
    return this.cryptoService.getMarkets(currency, +perPage, +page);
  }

  @Get('trending')
  getTrending() {
    return this.cryptoService.getTrending();
  }

  @Get('global')
  getGlobal() {
    return this.cryptoService.getGlobal();
  }

  @Get(':id')
  getCoin(@Param('id') id: string) {
    return this.cryptoService.getCoinDetail(id);
  }
}
