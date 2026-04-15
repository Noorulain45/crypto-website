import { CryptoService } from './crypto.service';
export declare class CryptoController {
    private readonly cryptoService;
    constructor(cryptoService: CryptoService);
    getMarkets(currency?: string, perPage?: number, page?: number): Promise<any>;
    getTrending(): Promise<any>;
    getGlobal(): Promise<any>;
    getCoin(id: string): Promise<any>;
}
