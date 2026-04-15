"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("./crypto.service");
let CryptoController = class CryptoController {
    cryptoService;
    constructor(cryptoService) {
        this.cryptoService = cryptoService;
    }
    getMarkets(currency = 'usd', perPage = 20, page = 1) {
        return this.cryptoService.getMarkets(currency, +perPage, +page);
    }
    getTrending() {
        return this.cryptoService.getTrending();
    }
    getGlobal() {
        return this.cryptoService.getGlobal();
    }
    getCoin(id) {
        return this.cryptoService.getCoinDetail(id);
    }
};
exports.CryptoController = CryptoController;
__decorate([
    (0, common_1.Get)('markets'),
    __param(0, (0, common_1.Query)('currency')),
    __param(1, (0, common_1.Query)('perPage')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getMarkets", null);
__decorate([
    (0, common_1.Get)('trending'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getTrending", null);
__decorate([
    (0, common_1.Get)('global'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getGlobal", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CryptoController.prototype, "getCoin", null);
exports.CryptoController = CryptoController = __decorate([
    (0, common_1.Controller)('crypto'),
    __metadata("design:paramtypes", [crypto_service_1.CryptoService])
], CryptoController);
//# sourceMappingURL=crypto.controller.js.map