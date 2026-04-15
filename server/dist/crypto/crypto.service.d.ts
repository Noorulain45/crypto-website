export declare class CryptoService {
    private fetch;
    getMarkets(currency?: string, perPage?: number, page?: number): Promise<any>;
    getTrending(): Promise<any>;
    getCoinDetail(id: string): Promise<any>;
    getGlobal(): Promise<any>;
}
