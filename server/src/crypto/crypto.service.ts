import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';

@Injectable()
export class CryptoService {
  private async fetch(path: string) {
    const res = await fetch(`${COINGECKO_BASE}${path}`);
    if (!res.ok) throw new HttpException('Failed to fetch crypto data', HttpStatus.BAD_GATEWAY);
    return res.json();
  }

  getMarkets(currency = 'usd', perPage = 20, page = 1) {
    return this.fetch(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`,
    );
  }

  getTrending() {
    return this.fetch('/search/trending');
  }

  getCoinDetail(id: string) {
    return this.fetch(`/coins/${id}?localization=false&sparkline=true`);
  }

  getGlobal() {
    return this.fetch('/global');
  }
}
