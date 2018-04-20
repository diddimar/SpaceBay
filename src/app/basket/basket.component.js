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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var basket_service_1 = require('../store-service/basket.service');
var store_service_1 = require('../store-service/store.service');
var BasketComponent = (function () {
    function BasketComponent(basketService, storeService, router, location) {
        this.basketService = basketService;
        this.storeService = storeService;
        this.router = router;
        this.location = location;
        this.numberOfItems = 0;
        this.totalPrice = 0;
        this.totalPriceOfId = 0;
    }
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.basketService.getItemsInBasket()
            .then(function (k) { return _this.items = k; });
        this.getTotalNumberOfItems();
        this.getTotalPrice();
        this.getTotalPriceOfId();
    };
    BasketComponent.prototype.goBack = function () {
        this.location.back();
    };
    BasketComponent.prototype.checkOut = function (item) {
        this.emptyBasket();
        this.router.navigate(['/checkOut']);
    };
    BasketComponent.prototype.toStore = function () {
        this.router.navigate(['/list']);
    };
    BasketComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        item.views += 1;
        this.storeService.update(item);
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    BasketComponent.prototype.delete = function (item) {
        this.basketService.deleteFromBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    };
    BasketComponent.prototype.buy = function (item) {
        this.selectedItem = item;
        this.basketService.addToBasketFromBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    };
    BasketComponent.prototype.getTotalPriceOfId = function () {
        this.totalPriceOfId = this.basketService.totalPrice;
    };
    BasketComponent.prototype.getTotalPrice = function () {
        this.totalPrice = this.basketService.totalPrice;
    };
    BasketComponent.prototype.getTotalNumberOfItems = function () {
        this.numberOfItems = this.basketService.numberOfItems;
    };
    BasketComponent.prototype.emptyBasket = function () {
        var _this = this;
        this.basketService.ITEMSINBASKET = [];
        this.basketService.totalPrice = 0;
        this.getTotalPrice();
        this.basketService.numberOfItems = 0;
        this.getTotalNumberOfItems();
        this.basketService.getItemsInBasket()
            .then(function (k) {
            _this.items = k;
        });
    };
    BasketComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'basket-component',
            templateUrl: './basket.component.html'
        }), 
        __metadata('design:paramtypes', [basket_service_1.BasketService, store_service_1.StoreService, router_1.Router, common_1.Location])
    ], BasketComponent);
    return BasketComponent;
}());
exports.BasketComponent = BasketComponent;
//# sourceMappingURL=basket.component.js.map