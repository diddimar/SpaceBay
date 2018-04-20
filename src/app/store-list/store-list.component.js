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
var store_service_1 = require('../store-service/store.service');
var basket_service_1 = require('../store-service/basket.service');
var StoreListComponent = (function () {
    function StoreListComponent(storeService, basketService, router) {
        this.storeService = storeService;
        this.basketService = basketService;
        this.router = router;
        this.numberOfItems = 0;
        this.totalPrice = 0;
    }
    StoreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTotalNumberOfItems();
        this.getTotalPrice();
        this.storeService.getItems()
            .then(function (k) { return _this.items = k; });
    };
    StoreListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        item.views += 1;
        this.storeService.update(item);
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    StoreListComponent.prototype.buy = function (item) {
        this.selectedItem = item;
        this.basketService.addToBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    };
    StoreListComponent.prototype.viewBasket = function () {
        this.router.navigate(['/basket']);
    };
    StoreListComponent.prototype.getTotalPrice = function () {
        this.totalPrice = this.basketService.totalPrice;
    };
    StoreListComponent.prototype.getTotalNumberOfItems = function () {
        this.numberOfItems = this.basketService.numberOfItems;
    };
    StoreListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'store-list',
            templateUrl: 'store-list.component.html'
        }), 
        __metadata('design:paramtypes', [store_service_1.StoreService, basket_service_1.BasketService, router_1.Router])
    ], StoreListComponent);
    return StoreListComponent;
}());
exports.StoreListComponent = StoreListComponent;
//# sourceMappingURL=store-list.component.js.map