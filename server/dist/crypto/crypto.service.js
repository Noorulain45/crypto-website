"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const common_1 = require("@nestjs/common");
const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
let CryptoService = class CryptoService {
    async fetch(path) {
        const res = await fetch(`${COINGECKO_BASE}${path}`);
        if (!res.ok)
            throw new common_1.HttpException('Failed to fetch crypto data', common_1.HttpStatus.BAD_GATEWAY);
        return res.json();
    }
    getMarkets(currency = 'usd', perPage = 20, page = 1) {
        return this.fetch(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`);
    }
    getTrending() {
        return this.fetch('/search/trending');
    }
    getCoinDetail(id) {
        return this.fetch(`/coins/${id}?localization=false&sparkline=true`);
    }
    getGlobal() {
        return this.fetch('/global');
    }
};
exports.CryptoService = CryptoService;
exports.CryptoService = CryptoService = __decorate([
    (0, common_1.Injectable)()
], CryptoService);
//# sourceMappingURL=crypto.service.js.map