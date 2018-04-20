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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var store_service_1 = require('./store.service');
var item_1 = require('./item');
var BasketService = (function () {
    function BasketService(storeService, http) {
        this.storeService = storeService;
        this.http = http;
        this.itemsUrl = 'app/inventory';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //-------------------------------Basket-------------------//
        this.ITEMSINBASKET = [];
        this.numberOfItems = 0;
        this.itemAlreadyInBasket = false;
        this.totalPrice = 0;
        this.item = item_1.Item;
    }
    ;
    BasketService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BasketService.prototype.getItemsInBasket = function () {
        return Promise.resolve(this.ITEMSINBASKET);
    };
    BasketService.prototype.addToBasket = function (item) {
        for (var x = 0; x < this.ITEMSINBASKET.length; x++) {
            if (this.ITEMSINBASKET[x].id == item.id) {
                item.qty = this.ITEMSINBASKET[x].qty + 1;
                this.itemAlreadyInBasket = true;
            }
        }
        if (this.itemAlreadyInBasket == true) {
            for (var x = 0; x < this.ITEMSINBASKET.length; x++) {
                if (this.ITEMSINBASKET[x].id == item.id) {
                    this.ITEMSINBASKET.splice(x, 1);
                }
            }
        }
        item.totalPriceId = item.price * item.qty;
        this.totalPrice += item.price;
        this.ITEMSINBASKET.push(item);
        this.numberOfItems += 1;
    };
    BasketService.prototype.addToBasketFromBasket = function (item) {
        this.ITEMSINBASKET.push(item);
        for (var x = 0; x < this.ITEMSINBASKET.length; x++) {
            if (this.ITEMSINBASKET[x].id == item.id) {
                item.qty = this.ITEMSINBASKET[x].qty + 1;
                this.ITEMSINBASKET.splice(-1, 1);
            }
        }
        item.totalPriceId = item.price * item.qty;
        this.totalPrice += item.price;
        this.numberOfItems += 1;
    };
    BasketService.prototype.deleteFromBasket = function (item) {
        for (var x = 0; x < this.ITEMSINBASKET.length; x++) {
            if (this.ITEMSINBASKET[x].id == item.id && this.ITEMSINBASKET[x].qty == 1) {
                item.qty -= 1;
                this.ITEMSINBASKET.splice(x, 1);
            }
        }
        item.qty -= 1;
        item.totalPriceId = item.price * item.qty;
        this.numberOfItems -= 1;
        this.totalPrice -= item.price;
    };
    BasketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_service_1.StoreService, http_1.Http])
    ], BasketService);
    return BasketService;
}());
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map